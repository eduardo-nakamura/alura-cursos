import fetch from 'node-fetch';

function handleError(err) {
    throw new Error(err.message)
}

async function checkUrls(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`;
                }))
        return arrayStatus
    } catch (error) {
        handleError(error)
    }
}

function genArrayUrls(params) {
    return params
        .map(item => Object
            .values(item).join());
}

export default async function validateURLs(list) {
    const links = genArrayUrls(list)
    const statusLinks = await checkUrls(links)
    //spread operator
    const resultsValidation = list.map((item, index) => ({
        ...item,
        status: statusLinks[index]
    }))
    return resultsValidation
}
import getFileAsync from '../5-commands.js';

const arrayResult = [
    {
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
  ]

describe('getFileAsync::', () => {

    it('Must be Function', () => {
        expect(typeof (getFileAsync)).toBe('function');
    })

    it('Must return array with results', async () => {
        const result = await getFileAsync('./test/files/texto1.md')
        expect(result).toEqual(arrayResult);
    })

    it('Return message "Links not found"', async () => {
        const result = await getFileAsync('./test/files/texto1_.md')
        expect(result).toBe('Links not found');
    })
})
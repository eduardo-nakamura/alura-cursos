// import
import exportFunction from './path/file.js';
// or
import { exportFunction, exportDefaultFunction } from './path/file.js';

// export function to another file
export function exportFunction(num1, num2) {
    return num1 + num2;
}

// export function as default to another file
export default function exportDefaultFunction(num1, num2) {
    return num1 + num2;
}



// Import all function from file
import * as functionList from './path/file.js';

const exportFunction = functionList.exportFunction(1, 2);
const exportDefaultFunction = functionList.exportDefaultFunction(1, 2);
const fs = require('fs');
const filepath = './randomFile.txt';

const createFile = () => {
    fs.writeFileSync(filepath, 'Hello, World!', 'utf8');
    console.log("Created the file");
};

const readFile = () => {
    const fileData = fs.readFileSync(filepath, 'utf8');
    console.log(`Data from file: ${fileData}`);
};

const writeFile = (newContent) => {
    fs.writeFileSync(filepath, newContent, 'utf8');
    console.log('File rewritten');
};

const updateFile = (appendedContent) => {
    fs.appendFileSync(filepath, appendedContent, 'utf8');
    console.log('File got appended');
};

// const deleteFile = () => {
//     fs.unlinkSync(filepath);
//     console.log("Deleted the file.");
// };

createFile();
readFile();
writeFile('Good Morning from fs');
readFile();
updateFile(' Hello, World!');
readFile();
// deleteFile();
// readFile();

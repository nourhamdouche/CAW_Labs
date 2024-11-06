// import the fs module to read files and readlin to get input from the user
let fs = require('fs');
let readline = require('readline');

// taking input from the user
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// read and print the contents of a file
function displayFileContent(fileName) {
    fs.readFile(fileName, 'utf8', function(error, data) {
        if (error) {// if an error happens (like the file doesn't exist), show an error message
            console.log('Error reading file:', error.message);
            process.exit(1); // Stop the program
        } else { // if there is no error, print the contents of the file
            console.log(data);
            rl.close(); //close the readline interface after displaying content
        }
    });
}

//check if a filename was provided when the program started
let fileName = process.argv[2];

if (fileName) {
    //if a filename was given  read and display the file
    displayFileContent(fileName);
} else {
    //if no filename was given ask the user for one
    rl.question('Please provide a file name to display its contents: ', function(inputFileName) {
        displayFileContent(inputFileName); 
    });
}

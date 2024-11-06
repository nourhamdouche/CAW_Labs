
let fs = require('fs');
/*the parameters order in Qst 1 
let text = process.argv[2];
let fileName = process.argv[3];
*/
let fileName = process.argv[2]; // First parameter is the filename as said in Qst 2
let text = process.argv[3];

fs.writeFile(fileName, text, function(error) {
    if (error) {
        console.error('Error writing file:', error.message);
    } else {
        console.log('The file has been saved!');

        //read and display the contents of the file as said in Qst 3
        fs.readFile(fileName, 'utf8', function(error, data) {
            if (error) {
                console.error('Error reading file:', error.message);
            } else {
                console.log(data); 
            }
        });
    }
});
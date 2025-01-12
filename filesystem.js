let fs = require("fs");

// 1. Read a file
try {
  let buffer = fs.readFileSync("abc.js"); 
  console.log("Binary data:", buffer);
  console.log("File content:", buffer.toString());
} catch (err) {
  console.error("Error reading the file:", err.message);
}

// 2. Create a file
try {
  fs.openSync("abc.txt", "w"); 
  fs.writeFileSync("abc.txt", "We are learning Node.js");
  console.log("File 'abc.txt' created successfully.");
} catch (err) {
  console.error("Error creating the file:", err.message);
}

// 3. Update a file
try {
  fs.appendFileSync("abc.txt", "\nAppending some new content.");
  console.log("File 'abc.txt' updated successfully.");
} catch (err) {
  console.error("Error updating the file:", err.message);
}

// 4. Delete a file
try {
  fs.unlinkSync("abc.txt");
  console.log("File 'abc.txt' deleted successfully.");
} catch (err) {
  console.error("Error deleting the file:", err.message);
}


//creating a directory
fs.mkdirSync("MyDirectory");
fs.writeFileSync("MyDirectory/myfile.txt","my content");

//remove a folder
//fs.rmdirSync("MyDirectory")
//fs.existSync() ----> if a file exists at a path (true/false)
 let doesPathExist =fs.existsSync("abc.txt");
 console.log(doesPathExist);
 doesPathExist =fs.existsSync("abc.txt");
 console.log(doesPathExist);


 //crating 10 folders using loop
 for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i}`;

    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "/readme.md", `# Readme for ${dirPathToMake}`);
}
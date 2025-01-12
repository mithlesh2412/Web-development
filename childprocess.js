let cp = require("child_process");

console.log("Trying to open GitHub...");

try {
  cp.execSync('open -a "Google Chrome" https://github.com/skills/github-pages');
  console.log("Opened GitHub");
} catch (err) {
  console.error("Failed to open GitHub:", err.message);
}
let output =cp.execSync("node abc.js");
console.log("output", output);
console.log("Output data:",output.toString());


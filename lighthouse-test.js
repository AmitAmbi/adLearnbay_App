// lighthouse-test.js
const { exec } = require('child_process');
const path = require('path');

// Define the URL to test
const url = 'http://localhost:3000'; // Change this to your app's URL

exec(`lighthouse ${url} --output=html --output-path=./lighthouse-report.html`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Lighthouse report generated: lighthouse-report.html`);
});

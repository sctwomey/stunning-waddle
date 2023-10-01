// This function generates the markdown structure for the README file that is created after all of the questions are answered. 
// Note: The starter functions were removed since no other functions are required to generate the structure for the README file with the use of a template literal.

function generateMarkdown(data) {
  return `
    # ${data.title} ![LicenseBadge](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
    ${data.description}
  
  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  
  ## Installation
    ${data.installation}
  
  ## Usage
    ${data.usage}
  
  ## License
    ${data.license}
  
  ## Contributing
    ${data.contributing}
  
  ## Tests
    ${data.tests}
  
  ## Questions
    If there are any questions regarding this project, you may contact me at 
    ${data.email}, or by visiting ${data.github}.   
    `;
};

module.exports = generateMarkdown;
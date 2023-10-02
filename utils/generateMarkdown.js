// This function generates the markdown structure for the README file that is created after all of the questions are answered. 
// Note: The starter functions were removed since no other functions are required to generate the structure for the README file with the use of a template literal.

function generateMarkdown(data) {

  let licenseBadge;
  let licenseSelection;

  if (data.license !== 'No License') {
    licenseBadge = `![LicenseBadge](https://img.shields.io/badge/License-${data.license}-blue.svg)`

    licenseSelection = `The project content in this repository is bound by the ${data.license} license.`
  }

  if (data.license === 'No License') {
    licenseBadge = '';
    licenseSelection = 'The project content in this repository is not bound by any license.';
  };

  return `
  # ${data.title} ${licenseBadge}

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
  ${licenseSelection}
  
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
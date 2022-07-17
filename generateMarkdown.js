// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause license', 'BSD 3-clause license', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The Fuck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0',  'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License',  'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License',]
function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return '[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)'
  } else if (license===licenseArr[1]){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]'
} else if (license===licenseArr[2]){
  return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

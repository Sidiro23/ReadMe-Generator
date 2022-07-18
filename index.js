// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ()=> {
  return inquirer.prompt([ 
    {
      type: 'list',
      name: 'license',
      message: 'Select license for this application',
      choices:['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause license', 'BSD 3-clause license', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The Fuck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0',  'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License',  'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License',]
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What does this application do?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do I install this application?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How do I use this application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can i contribute to this application?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How can I test this application?',
    },
    
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail?',
    },
  ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(`readMe.md`, data,
  (err)=>err ? console.error(err) : console.log(`readMe.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
  let answers = await questions();
  writeToFile((answers.fileName),(generateMarkdown(answers)))
  
}

// Function call to initialize app
init();

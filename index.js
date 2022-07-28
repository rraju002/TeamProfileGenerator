const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { rootCertificates } = require("tls");

const teamArray = []; 
function generateTeam(){
inquirer.prompt([ 
   {
    type: "imput" , 
    name: "engineerName", 
    message: "What is your engineer's name?"
   } 
])
}
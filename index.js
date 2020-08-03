
const Intern = require("./lib/Intern"); // You need to require all your objects like this

//Requiring Node modules
const inquirer = require("inquirer"); 
const path = require("path");
const fs = require("fs");

const pathLeadingToFile = path.resolve(__dirname, "output") 

//This will return all the 'stuff' before the actual path name like master/object/


const outputPath = path.join(pathLeadingToFile, "team.html");

//This will give you the full path like master/object/team.html. 
//In Node, this is how you put paths togeher


//You have to  require your templates so you can stick you data in them

//Render is used at the bottom in the fs.writeFileSync

const render = require("./src/page-template.js");

const teamMembers = []; //Creates array to hold your team members. 
                        //Note you can follow how this is used by looking at team in the src/template
const idArray = [];  //Creates ID array.



//All of Your Inquirer Stuff will go here



  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) { //If the output doesn't exist, make one.
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");

    //The  fs calls the fs module as you named it at the top
    //.writeFileSync() is a built in function

    //The first argument is the PATH you created above 

    //render() is actually filling up the template with the teamMembers

    //"utf-8" is because it is an HTML file
  }

 

}



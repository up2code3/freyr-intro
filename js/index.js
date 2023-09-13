

const today = new Date();

const thisYear = today.getFullYear();

const myName = "Tristan White";

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `${myName} ${thisYear}`;

footer.appendChild(copyright);

const skills = [
  "welding and construction, specifically, mig welding",
  "Service Industry, specifically, bartending",
];

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i += 1) {
  //I understand using a for loop to iterate through the items in the array

  let skill = document.createElement("li"); // creating the actual list items bullet points in the element represented by a variable named skill

  skill.innerText = skills[i]; //inner text dictates what goes at the list item bullet points
  // note: I couldnt find this in my notes , and the instructions were pretty confusing, i hope this is right
  // I did notice on the element tab of the dev tools , that the <li> items did not get put inside the <ul> tags. is that normal?

  skillsList.appendChild(skill); // this appends the items from the skill variable to the skillsSection. note: the instructions said skillList, but that seem to do nothing.
}

//const messageForm = document.getElementsByName('leave_message')[0];
const messageForm = document.querySelector('form[name="leave_message"]') 

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
 
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    console.log(usersName,usersEmail,usersMessage);
    
    const messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=mailto:${usersEmail}> ${usersName} </a>` + "wrote:" + `<span> ${usersMessage}</span>`

    messageList.appendChild(newMessage);
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type='button';

    newMessage.appendChild(removeButton);
    removeButton.addEventListener('click', (e) => {
      let entry = removeButton.parentNode;
      entry.remove();

    })

    messageForm.reset();
});

let githubRequest = new XMLHttpRequest();

githubRequest.open("GET","https://api.github.com/users/up2code3/repos")
githubRequest.send();

addEventListener("load", (Event) => {
  let repositories = JSON.parse(githubRequest.responseText);
  console.log(repositories)


// I compared the next to lines of code to the message section above to make sure it was right 
let projectSection = document.getElementById("projects") 
let projectList = projectSection.querySelector("ul") // this queries just the project section and not the whole page  


for (var i = 0 ; i < repositories.length ; i++){
  let project = document.createElement("li");  
  project.innerText = repositories[i].name; 
  projectList.appendChild(project);
}
})

//  I was stuck on line 87 for awhile, it had 7 li under the 
//  projects element on the page, but they all said object object,
//  so eventually it dawned on me to do the .name to refer 
//  to the key of the pair. but that didnt work, so i tired name:,
//  i thought maybe the colon was aprat of the name, it through 
//  an error, so I deleted the colon leaving it as .name
//  and suddenly it worked... weird... , even as i was typing this 
//  message all of the li's under projects disappeared, and 
//  I thought i broke it again, then I did a refresh and they came back. 
// this is the error message it threw when they all randomly disappear 
// 
//  VM2188:1 Uncaught SyntaxError: Unexpected end of JSON input
//     at JSON.parse (<anonymous>)at index.js:75:27</anonymous>
//
// then I just refresh and there is no longer an error, I think 
//  I had this code right a few Times , but I would see the error,
// and think it was broke, so I would try something else. I guess 
//  i was just moving to fast? or maybe the autosave and auto refresh feature is 
// making things Weird , or does AJAX just casue funny behavior?
//  jeeez it broke after I type this message, and it took 3 refresh to get it back.
// as of right now I see all the projects listed, I am going to save and commit.

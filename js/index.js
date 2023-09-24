//Tristan White Web Page Resume Project//

/*________________________________________________________________________________________________________________________________--___________*/

//Footer containing name and date//

const today = new Date();
const thisYear = today.getFullYear();
const myName = "Tristan White";
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `${myName} ${thisYear}`;
footer.appendChild(copyright);

/*______________________________________________________________________________________________________________________________________________*/

/*______________________________________________________________________________________________________________________________________________*/

// Makes an array of list items and appends them to the skills section//

const skills = ["HTML", "CSS", "Javascript", "AJAX", "API fetch"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i += 1) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

/*______________________________________________________________________________________________________________________________________________*/

/*______________________________________________________________________________________________________________________________________________*/

// Leave a message form section //

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usersName = e.target.usersName.value;
  const usersEmail = e.target.usersEmail.value;
  const usersMessage = e.target.usersMessage.value;

  const messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML =
    `<a href=mailto:${usersEmail}> ${usersName} </a>` +
    "wrote:" +
    `<span> ${usersMessage}</span>`;

  messageList.appendChild(newMessage);
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.classList.add("removeButtonAlt");
  newMessage.appendChild(removeButton);

  removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  messageForm.reset();
});
/*______________________________________________________________________________________________________________________________________________*/

/*______________________________________________________________________________________________________________________________________________*/

// fetchs github repos and list them in the projects section //

fetch("https://api.github.com/users/up2code3/repos")
  .then((response) => response.json())
  .then((repositories) => {
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for (var i = 0; i < repositories.length; i++) {
      let projectUrl = repositories[i].html_url;
      let projectName = repositories[i].name;
      let projectDescription = repositories[i].description;

      let project = document.createElement("li");
      let link = document.createElement("a");
      let paragraph = document.createElement("p");

      link.innerText = projectName;
      link.href = projectUrl;
      paragraph.innerText = projectDescription;

      projectList.appendChild(project);
      project.appendChild(link);
      project.appendChild(paragraph);
    }
  });
/*______________________________________________________________________________________________________________________________________________*/

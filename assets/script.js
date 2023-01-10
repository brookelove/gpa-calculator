// import "animate.css";
console.log("linked");
let main = document.getElementById("main");
let table = document.getElementById("inputGrades");
let addRow = document.getElementById("addRow");

// let firstQ = () => {
//   const newH1 = document.createElement("h1");
//   newH1.textContent = "How many grades do you "
// };
// firstQ();
// want to create possibly an even to askj for amount of grades you think will be there
let askAmountButton = () => {
  let askAmount = document.createElement("h1");
  askAmount.innerHTML = "What class is this for?";
  let askText = document.createElement("input");
  let askButton = document.createElement("button");
};
// pass in the parameter of user input
let createGradeInput = () => {
  // make i equal to user input
  for (i = 0; i < 7; i++) {
    // console.log(i);
    let newRow = document.createElement("tr");

    let delBttnBox = document.createElement("td");
    let assignmentBox = document.createElement("td");
    let gradeBox = document.createElement("td");
    let weightBox = document.createElement("td");
    let delBttn = document.createElement("button");

    let assignment = document.createElement("input");
    let grade = document.createElement("input");
    let weight = document.createElement("input");

    delBttn.innerText = "Clear";
    assignmentBox.appendChild(assignment);
    gradeBox.appendChild(grade);
    weightBox.appendChild(weight);
    delBttnBox.appendChild(delBttn);

    newRow.appendChild(assignmentBox);
    newRow.appendChild(gradeBox);
    newRow.appendChild(weightBox);
    newRow.appendChild(delBttnBox);

    table.appendChild(newRow);
  }
};
createGradeInput();
let addNewRow = () => {
  console.log("clicked");
  //   change the user input to be equal to one and then pass in i as 1
  let newRow = document.createElement("tr");

  let delBttnBox = document.createElement("td");
  let assignmentBox = document.createElement("td");
  let gradeBox = document.createElement("td");
  let weightBox = document.createElement("td");
  let delBttn = document.createElement("button");

  let assignment = document.createElement("input");
  let grade = document.createElement("input");
  let weight = document.createElement("input");

  delBttn.innerText = "Clear";
  assignmentBox.appendChild(assignment);
  gradeBox.appendChild(grade);
  weightBox.appendChild(weight);
  delBttnBox.appendChild(delBttn);

  newRow.appendChild(assignmentBox);
  newRow.appendChild(gradeBox);
  newRow.appendChild(weightBox);
  newRow.appendChild(delBttnBox);

  table.appendChild(newRow);
};
addRow.addEventListener("click", addNewRow);

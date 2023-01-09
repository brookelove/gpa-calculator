// import "animate.css";
console.log("linked");
let main = document.getElementById("main");
let table = document.getElementById("inputGrades");

// let firstQ = () => {
//   const newH1 = document.createElement("h1");
//   newH1.textContent = "How many grades do you "
// };
// firstQ();

let createGradeInput = () => {
  for (i = 0; i < 7; i++) {
    // console.log(i);
    let newRow = document.createElement("tr");

    let assignmentBox = document.createElement("td");
    let gradeBox = document.createElement("td");
    let weightBox = document.createElement("td");

    let assignment = document.createElement("input");
    let grade = document.createElement("input");
    let weight = document.createElement("input");

    assignmentBox.appendChild(assignment);
    gradeBox.appendChild(grade);
    weightBox.appendChild(weight);

    newRow.appendChild(assignmentBox);
    newRow.appendChild(gradeBox);
    newRow.appendChild(weightBox);

    table.appendChild(newRow);
  }
};
createGradeInput();

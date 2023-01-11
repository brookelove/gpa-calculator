// import "animate.css";
console.log("linked");
let main = document.getElementById("main");
// let table = document.getElementById("gradeTable");
let tableBody = document.getElementById("inputGrades");
let addRowBTN = document.getElementById("addRow");
let calculateBTN = document.getElementById("calculateGrade");
let assignmentInput = document.getElementById("assignment");
let gradeInput = document.getElementById("grade");
let weightInput = document.getElementById("weight");
let gradeArr = [];

// let askAmountButton = () => {
//   let askAmount = document.createElement("h1");
//   askAmount.innerHTML = "What class is this for?";
//   let askText = document.createElement("input");
//   let askButton = document.createElement("button");
// };
// console.log(document.getElementById("gradeTable").rows[1].cells[0].innerHTML);
// pass in the parameter of user input
let calculateMyGrade = () => {
  //   console.log(gradeArr.length);
  let weightedArr = [];
  let start = 0;
  for (let i = 0; i < gradeArr.length; i++) {
    // console.log(gradeArr[i].assignment);
    // console.log(typeof gradeArr[i].weight);
    // console.log(typeof gradeArr[i].grade);
    let weightNum = parseFloat(gradeArr[i].weight) / 100;
    console.log(weightNum);
    let weightedGrade = weightNum * parseFloat(gradeArr[i].grade);
    console.log(weightedGrade);
    weightedArr.push(weightedGrade);
    // console.log(weighedArr);
  }
  console.log(weightedArr);
  //   console.log(weighedArr.reduce((a, b) => a + b));
  weightedArr.forEach((item) => {
    start += item;
  });
  console.log(start);
};
// calculateMyGrade();
// createGradeInput();
let addNewRow = () => {
  let newGrade = {
    assignment: assignmentInput.value,
    grade: gradeInput.value,
    weight: weightInput.value,
  };
  gradeArr.push(newGrade);

  let newRow = document.createElement("tr");

  let delBttnBox = document.createElement("td");
  let editBttnBox = document.createElement("td");
  let assignmentBox = document.createElement("td");
  let gradeBox = document.createElement("td");
  let weightBox = document.createElement("td");
  let delBttn = document.createElement("button");
  let editBttn = document.createElement("button");

  assignmentBox.innerText = assignmentInput.value;
  gradeBox.innerText = gradeInput.value;
  weightBox.innerText = weightInput.value;
  delBttn.innerText = "Clear";
  editBttn.innerText = "Edit";

  delBttnBox.appendChild(delBttn);
  editBttnBox.appendChild(editBttn);

  newRow.append(assignmentBox, gradeBox, weightBox, delBttn, editBttn);
  //   newRow.appendChild(gradeBox);
  //   newRow.appendChild(weightBox);
  //   newRow.appendChild(delBttnBox);
  //   newRow.appendChild(editBttnBox);

  tableBody.appendChild(newRow);
  assignmentInput.value = "";
  gradeInput.value = "";
  weightInput.value = "";
};
addRowBTN.addEventListener("click", addNewRow);
calculateBTN.addEventListener("click", calculateMyGrade);

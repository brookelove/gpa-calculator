// import "animate.css";
console.log("linked");
let main = document.getElementById("main");
let tableBody = document.getElementById("inputGrades");
let addRowBTN = document.getElementById("addRow");
let calculateBTN = document.getElementById("calculateGrade");
let assignmentInput = document.getElementById("assignment");
let gradeInput = document.getElementById("grade");
let weightInput = document.getElementById("weight");
let className = document.getElementById("className");
let results = document.getElementById("results");
let saveBttn = document.getElementById("saveClassBttn");
let gradeArr = [];
let start = 0;

let calculateMyGrade = () => {
  //   className.value = "";
  let weightedArr = [];

  for (let i = 0; i < gradeArr.length; i++) {
    let weightNum = parseFloat(gradeArr[i].weight) / 100;
    let weightedGrade = weightNum * parseFloat(gradeArr[i].grade);
    weightedArr.push(weightedGrade);
  }
  weightedArr.forEach((item) => {
    start += item;
  });
  //   console.log(start);
  generateGrade(start);
  className.value = "";
};

let generateGrade = (num) => {
  // if else statement to either create a new div or write over a current one
  //   console.log(className);
  //   console.log(className.value);
  //   console.log(num);
  //   if (className.value == " ") {
  //     className.value = "Class";
  //   }
  let classH1 = document.createElement("h1");
  let totalGrade = document.createElement("h2");
  let saveBttn = document.createElement("button");
  classH1.innerText = className.value;
  totalGrade.innerText = String(num).concat("%");
  saveBttn.innerText = "Save Class";
  saveBttn.setAttribute = ("id", "saveClassBttn");
  results.append(classH1, totalGrade, saveBttn);
};

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

  tableBody.appendChild(newRow);
  assignmentInput.value = "";
  gradeInput.value = "";
  weightInput.value = "";
};
addRowBTN.addEventListener("click", addNewRow);
calculateBTN.addEventListener("click", calculateMyGrade);

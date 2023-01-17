// import "animate.css";
// console.log("linked");
let main = document.getElementById("main");
let tableBody = document.getElementById("inputGrades");
let addRowBTN = document.getElementById("addRow");
let calculateBTN = document.getElementById("calculateGrade");
let assignmentInput = document.getElementById("assignment");
let gradeInput = document.getElementById("grade");
let weightInput = document.getElementById("weight");
let className = document.getElementById("className");
let results = document.getElementById("results");
let savedContanier = document.getElementById("savedContainer");
// let saveBttn = document.getElementById("save");
let gradeArr = [];
let start = 0;
// console.log(document.getElementsByTagName("button"));

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
};
function renderButtons() {
  // Use JSON.parse() to convert text to JavaScript object
  let classList = [];
  for (var i = 0; i < localStorage.length; i++) {
    classList[i] = localStorage.getItem(localStorage.key(i));
  }
  //   var classList = JSON.parse(localStorage.getItem());
  // Check if data is returned, if not exit out of the function
  for (var i = 0; i < classList.length; i++) {
    if (classList !== null) {
      let key = localStorage.key(i);
      let newBttn = document.createElement("button");
      newBttn.innerText = key;
      savedContanier.append(newBttn);
      //   document.getElementById("saved-name").innerHTML = lastGrade.student;
      //   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
      //   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
    } else {
      return;
    }
  }
}
let saveClass = () => {
  //   console.log("saving your class now!");
  //   let classValue = className.value;
  localStorage.setItem(className.value.toLowerCase(), JSON.stringify(gradeArr));
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let newBttn = document.createElement("button");
    newBttn.innerText = key;
    savedContanier.append(newBttn);
  }
  className.value = "";
};

let generateGrade = (num) => {
  let classH1 = document.createElement("h1");
  let totalGrade = document.createElement("h2");
  let saveBttn = document.createElement("button");

  classH1.innerText = className.value;
  totalGrade.innerText = String(num).concat("%");
  saveBttn.innerText = "Save Class Here";

  saveBttn.setAttribute("id", "save");
  //   console.log(saveBttn);
  results.append(classH1, totalGrade);
  results.appendChild(saveBttn);

  let save = document.getElementById("save");
  save.addEventListener("click", saveClass);
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

  assignmentBox.setAttribute("class", "tableCellContainer");
  gradeBox.setAttribute("class", "tableCellContainer");
  weightBox.setAttribute("class", "tableCellContainer");

  newRow.append(assignmentBox, gradeBox, weightBox);

  newRow.setAttribute("class", "tableRowContainer");

  tableBody.appendChild(newRow);
  assignmentInput.value = "";
  gradeInput.value = "";
  weightInput.value = "";
};
renderButtons();
addRowBTN.addEventListener("click", addNewRow);
calculateBTN.addEventListener("click", calculateMyGrade);

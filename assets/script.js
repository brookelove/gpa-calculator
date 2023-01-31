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

let gradeArr = [];
let start = 0;

let calculateMyGrade = () => {
  let weightedArr = [];

  for (let i = 0; i < gradeArr.length; i++) {
    let weightNum = parseFloat(gradeArr[i].weight) / 100;
    let weightedGrade = weightNum * parseFloat(gradeArr[i].grade);
    weightedArr.push(weightedGrade);
  }
  weightedArr.forEach((item) => {
    start += item;
  });
  generateGrade(start);
};
let renderTable = () => {
  // if (tableBody.childElementCount == 0) {
  //   tableBody.setAttribute("class", "none");
  // }
  console.log(tableBody.childElementCount);
  let infor = event.target.innerText;
  //   console.log("clicked");
  //   console.log(infor); //gives the inner text of the button that has been clicked
  //   console.log(key)
  className.value = infor;
  let grabStorage = JSON.parse(localStorage.getItem(infor));
  //   console.log(grabStorage); //returns an array of the information for giving an array of objects
  tableBody.innerHTML = "";
  for (let i = 0; i < grabStorage.length; i++) {
    let newRow = document.createElement("tr");
    let assignmentBox = document.createElement("td");
    let gradeBox = document.createElement("td");
    let weightBox = document.createElement("td");
    assignmentBox.innerText = grabStorage[i].assignment;
    gradeBox.innerText = grabStorage[i].grade;
    weightBox.innerText = grabStorage[i].weight;
    assignmentBox.setAttribute("class", "tableCellContainer");
    gradeBox.setAttribute("class", "tableCellContainer");
    weightBox.setAttribute("class", "tableCellContainer");

    newRow.append(assignmentBox, gradeBox, weightBox);

    newRow.setAttribute("class", "tableRowContainer");

    tableBody.appendChild(newRow);
  }
};
let clickEvent = () => {
  let bttns = document.querySelectorAll(".clickedBtn");
  for (let i = 0; i < bttns.length; i++) {
    bttns[i].addEventListener("click", renderTable);
  }
};
let renderButtons = () => {
  savedContanier.innerHTML = "";
  let classList = [];
  //   console.log(classList);
  for (var i = 0; i < localStorage.length; i++) {
    classList[i] = localStorage.getItem(localStorage.key(i));
  }
  for (var i = 0; i < classList.length; i++) {
    if (classList !== null) {
      let key = localStorage.key(i);
      let newBttn = document.createElement("button");
      //   newBttn.forEach(renderTable(key));
      newBttn.classList.add("clickedBtn");
      newBttn.innerText = key;
      savedContanier.append(newBttn);
      clickEvent();
    } else {
      return;
    }
  }
  //   let grabBttns = document.querySelectorAll(".clickBtn");
  //   console.log(grabBttns);
  //   grabBttns.addEventListener("click", renderTable);
};
let storeClass = () => {
  //   console.log(className.value);
  if (className.value == "") {
    window.confirm("If you would like to save this class please input a name!");
  }
  //   console.log(tableBody);
  if (tableBody.hasChildNodes()) {
    tableBody.innerHTML = "";
    localStorage.setItem(
      className.value.toLowerCase(),
      JSON.stringify(gradeArr)
    );
    className.value = "";
    renderButtons();
  } else {
    window.confirm("Dont forget to put your grades in the table!");
  }
};

let generateGrade = (num) => {
  results.innerHTML = "";

  //   let tableRow = document.getElementsByTagName("tr");
  //   tableRow.innerHTML = "";
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
  save.addEventListener("click", storeClass);
};

let addNewRow = () => {
  console.log(tableBody.childElementCount);
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

var $ = document;
// localStorage.clear();
// localStorage.clear();
let inputElem = $.querySelector("#itemInput");
let addToDoBtn = $.querySelector("#addButton");
let ulElem = $.querySelector("#todoList");
let allDeletBtn = $.getElementsByClassName("btn btn-danger");

let dataList = [];
let dataObj = {};
//functions
function dataObjc() {
  dataObj = {
    id: dataList.length + 1,
    name: inputElem.value,
    complete: false,
  };
  dataList.push(dataObj);
}
function storage() {
  localStorage.setItem("data", JSON.stringify(dataList));
  console.log("storage:", dataList);
}
function creatToDo(dataObj) {
  console.log("creat to do:", dataList);

  let liElem, labelElem, ComletBtn, DeletBtn;
  liElem = $.createElement("li");
  liElem.className = "completed well";

  labelElem = $.createElement("label");
  labelElem.innerHTML = dataObj.name;

  ComletBtn = $.createElement("button");
  ComletBtn.className = "btn btn-success";
  ComletBtn.innerHTML = "Complete";

  DeletBtn = $.createElement("button");
  DeletBtn.className = "btn btn-danger";
  DeletBtn.innerHTML = "Delete";
  // deletToDo(DeletBtn);

  liElem.append(labelElem, ComletBtn, DeletBtn);
  ulElem.append(liElem);
}

function getData() {
  let getDatas = JSON.parse(localStorage.getItem("data"));
  console.log(getDatas);
  // console.log(getDatas);
  dataList = dataList.concat(getDatas);
  // getDatas.forEach(function (item) {
  //   creatToDo(item);
  // });
  dataList.forEach(function (item) {
    creatToDo(item);
  });

  console.log("get data:", dataList);
}

// console.log(event);
function deletToDo(item) {
  item.addEventListener("click", function (event) {
    let itemName = event.target.previousSibling.previousSibling.innerHTML;
    dataList = dataList.filter(function (item) {
      return item.name !== itemName;
    });
    ulElem.innerHTML = "";
    storage();
    getData();
  });
}

// event.target.parentNode.remove();
// console.log("delet to do:", dataList);
// console.log(event.target.previousSibling.previousSibling.innerHTML);

///events
addToDoBtn.addEventListener("click", function () {
  dataObjc(), storage(), creatToDo(dataObj);
});

window.addEventListener("load", function () {
  if (localStorage.getItem("data")) {
    getData();
  }
});

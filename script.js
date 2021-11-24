// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

showTasks(); //calling showTask function

// onkeyup event
inputBox.onkeyup = ()=>{
  let userData = inputBox.value; //getting user entered value
  if(userData.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

//add new task function
addBtn.onclick = ()=>{ //when user click on plus icon button
  let userData = inputBox.value; //getting input field value
  let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage

  if (getLocalStorage == null){ //if localstorage has no data
    listArray = []; //create a blank array
  } else {
    listArray = JSON.parse(getLocalStorage);  //transforming json string into a js object
  }

  listArray.push(userData); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string

  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

//show tasks function
function showTasks(){
  let getLocalStorage = localStorage.getItem("New Todo");

  if (getLocalStorage == null){
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage); 
  }
  
  //Counting the tasks/length of array
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask

  //const noOfPendingTasks = document.querySelector(".noOfPendingTasks");
  
  //check if there are pending tasks make the button active or not
  if (listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
    //noOfPendingTasks.textContent = "No pending task!";

  }

  //displaying tasks form array
  let newLiTag = "";
  listArray.forEach((element, index) => {
  	//creating new li tag for tasks
    newLiTag += `<li> ${element} 
    			<span id="editBtn" onclick="editTask(${index})"; ><i class="fas fa-edit"></i></span>
    			<span id="deleteBtn" onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span>
    			</li>`;
    
  });

  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank

  //edit at the same input field 
  // let newInputTag = "";
  // newInputTag += `<input> ${element} 
  //   			<span id="editBtn" onclick="editTask(${index})"; ><i class="fas fa-edit"></i></span>
  //   			<span id="deleteBtn" onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span>
  //   			</input>`;
  // todoList.innerHTML = newInputTag;
}

function editTask(index) {
	let newValue = prompt();
	if(newValue != null) {
		let getLocalStorage = localStorage.getItem("New Todo");
		listArray = JSON.parse(getLocalStorage);

		//edit a particular indexed li
		listArray.splice(index, 1, newValue); 

		//after editing, update again the localstorage for changes
		localStorage.setItem("New Todo", JSON.stringify(listArray));
		showTasks();//calling showTask function to show changes	
	} 
}

//delete a particular task function
function deleteTask(index) {

	let confirmDelete = confirm("Are you sure you want to delete this?");
	
	if ( confirmDelete == true ) {
		//get access first to the localstorage
		let getLocalStorage = localStorage.getItem("New Todo");
		listArray = JSON.parse(getLocalStorage);

		//delete or remove a particular indexed li
		listArray.splice(index, 1); 

		//after deletion, update again the localstorage for changes
		localStorage.setItem("New Todo", JSON.stringify(listArray));
		showTasks();//calling showTask function to show changes	
	}
	
}

//delete all tasks funnction
deleteAllBtn.onclick = () => {

	let confirmDeleteAll = confirm("Are you sure you want to delete all tasks?");

	if ( confirmDeleteAll == true ) {
		listArray = []; // empty the array
		//after deleting all tasks, update again the localstorage for changes
		localStorage.setItem("New Todo", JSON.stringify(listArray));
		showTasks();//calling showTask function to show changes
	}
		
}















// const themeLightBtn = document.querySelector(".themeLight");
// const themeDarkBtn = document.querySelector(".themeDark");


// const body = document.querySelector("body");
// const todoWrapper = document.querySelector(".wrapper");
// const todoInput = document.querySelector(".inputField input");
// const todoAddBtn = document.querySelector(".inputField button");
// const todoLi = document.querySelector(".todoList li");
// const todoEditBtn = document.querySelector(".todoList li #editBtn");
// const todoDeleteBtn = document.querySelector(".todoList li #deleteBtn");
// const todoFooter = document.querySelector(".wrapper .footer");
// const todoClearAllBtn = document.querySelector(".footer button");





// themeLightBtn.onclick = () => {
// 	body.classList.add("theme-1");
// 	todoWrapper.classList.add("theme-1");
// 	todoInput.classList.add("theme-1");
// 	todoAddBtn.classList.add("theme-1");
// 	todoLi.classList.add("theme-1");
// 	todoEditBtn.classList.add("theme-1");
// 	todoDeleteBtn.classList.add("theme-1");
// 	todoFooter.classList.add("theme-1");
// 	todoClearAllBtn.classList.add("theme-1");
// }
// themeDarkBtn.onclick = () => {
// 	body.classList.remove("theme-1");
// 	todoWrapper.classList.remove("theme-1");
// 	todoInput.classList.remove("theme-1");
// 	todoAddBtn.classList.remove("theme-1");
// 	todoLi.classList.remove("theme-1");
// 	todoEditBtn.classList.remove("theme-1");
// 	todoDeleteBtn.classList.remove("theme-1");
// 	todoFooter.classList.remove("theme-1");
// 	todoClearAllBtn.classList.remove("theme-1");
// }











// const pendingTasksNumb = document.querySelector(".pendingTasks");
//   pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
// if (listArray.length > 0){ //if array length is greater than 0
//     deleteAllBtn.classList.add("active"); //active the delete button
//   } else {
//     deleteAllBtn.classList.remove("active"); //unactive the delete button
//   }

//https://youtu.be/ykuD2QOZkhc?t=1335

// edit
// https://www.w3schools.com/jsref/jsref_forEach.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_splice2

const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const taskCompletedDOM = document.querySelector(".task-edit-completed");
const editFormDOM = document.querySelector(".single-task-form");
const editBtnDOM = document.querySelector(".task-edit-btn");
const formAlertDOM = document.querySelector(".form-alert");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");
console.log(id);
let tempName;

const config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/v1/tasks/" + id,
  headers: {},
};

const showTask = async () => {
  try {
    const response = await axios.request(config);
    // console.log(response);
    // console.log(response.data.item);

    const { _id: taskID, complete, name } = response.data.item;

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    tempName = name;

    if (complete) {
      taskCompletedDOM.checked = true;
    }
  } catch (error) {
    console.error(error);
  }
};

showTask();

editFormDOM.addEventListener("submit", async (e) => {
  editBtnDOM.textContent = "Loading...";
  e.preventDefault();
  try {
    const taskName = taskNameDOM.value;
    const taskCompleted = taskCompletedDOM.checked;

    const newData = {
      name: taskName,
      completed: taskCompleted,
    };

    let config = {
      method: "patch",
      url: "http://localhost:3000/api/v1/tasks/" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: newData, 
    };
console.log(newData);
    const response = await axios.request(config);
    console.log(response.data)
    const task = response.data.item;

    const { _id: taskID, completed, name } = task;

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    tempName = name;
    if (completed) {
      taskCompletedDOM.checked = true;
    }
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `Success, edited task`;
    formAlertDOM.classList.add("text-success");
  } catch (error) {
    console.error(error);
    taskNameDOM.value = tempName;
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = `Error, please try again`;
  } finally {
    editBtnDOM.textContent = "Edit";
    setTimeout(() => {
      formAlertDOM.style.display = "none";
      formAlertDOM.classList.remove("text-success");
    }, 3000);
  }
});


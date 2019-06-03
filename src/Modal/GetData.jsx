import Task from './Task';
import ListOfTask from './ListOfTask';
import TaskData from './TaskData';

let listOfTask = new ListOfTask();

for (let task of TaskData) {
    let id = task.id;
    let name = task.name;
    let labelArr = task.labelArr;
    let priority = task.priority;
    let memberIDArr = task.memberIDArr;
    let status = task.status;
    let desc = task.desc;

    let newTask = new Task(id, name, labelArr, priority, memberIDArr, status, desc)

    listOfTask.addTask(newTask)
}

export default listOfTask;
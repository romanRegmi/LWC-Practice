import { LightningElement } from 'lwc';

export default class Todo extends LightningElement {

    todoTasks = [ // To be used in the HTML
        {
            id: 1, // To pass as key in the HTML
            name: 'Task 1'
        },
        {
            id: 2,
            name: 'Task 2'
        },
        {
            id: 3,
            name: 'Task 3'
        },
        {
            id: 4,
            name: 'Task 4'
        }
    ];
    newTask = '';


    updateNewTask(event) {
        this.newTask = event.target.value;
    }

    addTask() {

        if (this.newTask !== '') {
            this.todoTasks.push({
                id: this.todoTasks.length + 1,
                name: this.newTask
            });
        }
        this.newTask = '';
        console.log(this.todoTasks);
    }



    deleteTask(event) {

        this.todoTasks = this.todoTasks.filter(task => task.id !== event.target.name);

        for (let i = 1; i <= this.todoTasks.length; i++) {
            this.todoTasks[i - 1].id = i;
        }
    }

}
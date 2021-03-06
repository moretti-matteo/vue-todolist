
const app = new Vue({
    el: '#app',
    data: {
        toDoList: [
            {
                text: "Fare la spesa",
                isDone: false,
            },
            {
                text: "Fare i compiti",
                isDone: true,
            },
            {
                text: "Lavare i piatti",
                isDone: true,
            },
        ],
        toDo: ""
    },
    methods: {
        addToDo() {
            this.toDo = this.toDo.trim();
            if (this.toDo) {
                console.log(this.toDo);
                this.toDoList.push({
                    text: this.toDo,
                    isDone: false,
                });

                this.toDo = "";
            }
        },
        removeToDo(i) {
            this.toDoList.splice(i, 1);
        },
        toggleToDo(i) {
            this.toDoList[i].isDone = !this.toDoList[i].isDone;
        }

    }
});
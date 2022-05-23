

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

    }
});
const todoBox = document.getElementById("to-do")
const displayBox = document.getElementById("modal")
const del = document.querySelector("#dels");
const can = document.querySelector("#cancels")
const con = document.querySelector("#confirms")

console.log(con)

let modal;

del.addEventListener('click', ShowModel)

function ShowModel() {
    displayBox.classList.add('open')
}

can.addEventListener('click', hideModel)

function hideModel() {
    displayBox.classList.remove('open')
}

con.addEventListener('click', function () {
    todoBox.remove();
    // displayBox.remove();
});


const todos = {
    "todoList":
        [
            {
                "taskBlock": "Home", "tasks":
                    [
                        { "task": "Clean room", "done": false },
                        { "task": "Get storage unit", "done": false }
                    ]
            },
            {
                "taskBlock": "Work", "tasks":
                    [
                        { "task": "Analysis", "done": false },
                        {
                            "task": "Sorting", "done": false, "subtasks":
                                [
                                    {
                                        "task": "Save files", "done": false, "subtasks":
                                            [
                                                { "task": "Pull from computer 1", "done": false },
                                                { "task": "Walk to computer 2", "done": false },
                                                { "task": "Save on computer 2", "done": false }
                                            ]
                                    },
                                    { "task": "Sort files", "done": false },
                                    { "task": "Plot data", "done": false }
                                ]
                        }
                    ]
            }
        ]
}

const ad = document.querySelector('#add');
const tables = document.querySelector('#customers');


console.log(todos.todoList[0].taskBlock);

// for(var i = 0; i < todo.todoList.length; i++){
//     const newTR = document.createElement('tr');
//     const newTD1 = document.createElement('td');
//     const newTD2 = document.createElement('td');
//     const newCb = document.createElement('input');
//     newCb.type = 'checkbox';
//     newTD1.textContent = todo.todoList[i].taskBlock;
//     newTD2.append(newCb)
//     newTR.append(newTD1)
//     newTR.append(newTD2)
//     tables.append(newTR)
// }


// filteredStatus = function(search, keys){
//     var lowSearch = search.toLowerCase();
//     return todos.todoList.tasks.filter(todo =>
//         keys.some(key =>
//             String(todo[key]).toLowerCase().includes(lowSearch)
//             )
//         );
// }

// console.log(filteredStatus('false', 'done'))
// // console.log(todos.todoList[1].tasks)

// for(const key in todos.todoList.tasks){
//     console.log(`${key}: ${todos[key]}`);
// }

Object.values(todos).forEach(val => console.log(val));
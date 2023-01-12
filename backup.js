let valores = document.getElementById('valores');
let  = document.getElementById['valor'];
let arr = ["HTML", "CSS", "JS"];

let list = "<ul>";

for(let i = 0; i < arr.length; i++) {
    list += "<li>" + arr[i] + "</li>";
}
list += "</ul>";

valores.innerHTML = list;

const todos = [];

const doSort = (todos) => {
    return todos
        //.map(todo => todo.toLowerCase()) // make all the items lowercase
        .sort((a, b) => {
            //compare 2 words letter by letter
            if (a.value > b.value) { return 1; } //first letter
            if (a.value < b.value) { return -1;} //second letter
            return 0; //the same
        })


}

   //sort the todos
   const sortedTodos = doSort(mapped)
   //restore the original
   .map(el => todos[el.index]);

//display the sorted todos
todoList.innerHTML = sortedTodos.map(todo => '<li>' + todo + '</li>').join('');
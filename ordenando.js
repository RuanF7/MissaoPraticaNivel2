
shuffle = (valor) => {
    for (let i = valor.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = valor[i];
        valor[i] = valor[j];
        valor[j] = temp;
    }

    return valor;
    
}

bubble_sort = (valor) => {
   const val = valor.slice();
   for (let i = 0; i < val.length - 1; i++) {
     for (let j = 0; j < val.length - 1 - i; j++) {
       if (val[j] > val[j+i]) {
        [val[j], val[j+1]] = [val[j+1], val[j]];
       }
     }
   }
   return val;
}

selection_sort = (valor) => {
    const val = valor.slice();
    
    for (let i = 0; i < val.length - 1; i++ ) {
        let minIndex = i;
        for (let j = i + 1; j < val.length; j++) {
            if (val[j] < val[minIndex]) {
                minIndex = j;
            }
        }
        [val[i], val[minIndex]] = [val[minIndex], val[i]];
    }

    return val;
}

quick_sort = (valor) => {
    if (valor.length <= 1) {
        return valor;
    }
    const pivot = valor[valor.length - 1];
    const leftVal = [];
    const rightVal = [];
    for (const el of valor.slice(0, valor.length - 1)) {
        el < pivot ? leftVal.push(el) : rightVal.push(el);
    }
    return [...quick_sort(leftVal), pivot, ...quick_sort(rightVal)];
}    

function add() {
    let valor = document.getElementById("valor");
    let valores = document.getElementById("valores");
}

function ordenar() {
    
}

function misturar() {
    
}

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

//attach event listener to the Add button
document.querySelector('#Add').addEventListener('click', () => {

    //get what's inside the input 
    const data = document.querySelector('#valor');

    //push the new todo into the todos array
    todos.push(data.value);

    //create additional helper array with object valuer and indexes
    var mapped = todos.map(
        (el, i) => ({ index: i, value: el.toLowerCase()  })
    );

    //display the sorted todos
    todoList.innerHTML = todos.map(todo => '<li>' + todo + '</li>').join('');

    //clear the value inside the input
    data.value = '';

});
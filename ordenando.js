swap = ([a],[b]) => {
    let a = b;
    let b = a;
}

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
function Stack() {

    let items = []; // matriz que almacena los elementos de la pila

    // metodo push(), agrega un nuevo elemento a la parte superior de la pila
    this.push = function(element) {
        items.push(element);
    };

    // metodo pop(), elimina el ultimo elemento agregado a la pila
    this.pop = function() {
        return items.pop();
    };

    // metodo peek(), devuelve el elemento superior de la pila
    this.peek = function() {
        return items[items.length - 1];
    };

    // metodo isEmpty(), devuelve verdadero si la pila no contiene ningun elemento y falso si el tamaño de la pila es mayor que 0
    this.isEmpty = function() {
        return items.length == 0;
    };

    // metodo size(), devuelve la cantidad de elementos que contiene la pila
    this.size = function() {
        return items.length;
    };

    // metodo clear(), elimina todos los elementos de la pila
    this.clear = function() {
        items = [];
    };

    // imprime el contenido de la pila
    this.print = function() {
        console.log(items.toString());
    };
}

let stack = new Stack(); // instancia de la clase Stack


/** EJEMPLOS **

- console.log(stack.isEmpty()); // true, porque esta vacia
- stack.push(2);
- stack.push(4);
- stack.push(6)
- console.log(stack.peek()); // return 6
- console.log(stack.size()); // return 3
- console.log(stack.isEmpty()); // false, ya no esta vacio
- stack.pop(); 
- console.log(stack.size()); // return 2
- stack.print(); // return [2, 4]

*/

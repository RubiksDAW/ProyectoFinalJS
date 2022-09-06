import { generateID } from "./ids.js";

export default class Board{
    id;
    title;
    items;

    constructor(title, items){
        this.id = generateID();
        this.title = title;
        this.items = [...items] /* tambien podríamos usar Array.from(items) / así evitamos hacer referencia creando una copia */
    }

    getIndex(id){
        return this.items.findIndex(item => item.id === id ); /* Nos devuelve el primer item que coincida con la id solicitada */
    }

    get(index){
        return this.items[index]
    }

    add(card){
        this.items.push(card)
    }

    get length(){
        return this.items.length;
    }

}
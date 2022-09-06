import { generateID } from "./ids.js";

export default class Card{

    id;
    title;

    constructor(title){
        this.title = title;
        this.id = generateID();
    }


}
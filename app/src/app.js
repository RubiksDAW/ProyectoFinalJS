import Board from "./board.js";
import Kanban from "./kanban.js";
import Card from "./card.js";


const kanban = new Kanban();

const card01 = new Card('tarea1');
const card02 = new Card('tarea2');
const card03 = new Card('tarea3');
const card04 = new Card('tarea4');
const card05 = new Card('tarea5');
const card06 = new Card('tarea6');

const board01 = new Board('TODOLIST', [card01,card02]);
const board02 = new Board('EXAMENES', [card03,card04]);
const board03 = new Board('TAREAS', [card05,card06]);


kanban.add(board01);
kanban.add(board02);
kanban.add(board03);

console.log(kanban);
import Board from "./board.js";
import Card from "./card.js";

export default class Kanban {
    boards;

    constructor() {
        this.boards = []
    }

    add(board) {
        this.boards.push(board)
    }

    addCard(card, indexBoard) {
        this.getBoard(indexBoard).add(card);
    }

    getBoard(index) {
        this.boards[index]
    }

    getIndex(id) {
        return this.boards.findIndex(board => board.id == id)
    }

    removeCard(indexBoard, indexCard) {
        const card = this.getBoard(indexBoard).items.splice(indexCard, 1)[0];
        return card;
    }

    insertCard(card, indexBoard, indexCard) {
        this.getBoard(indexBoard).items.splice(indexCard + 1, 0, card)

    }

    moveCard(indexBoardSrc, indexCardSrc, indexBoardTarget, indexCardTarget){
        const srcCard = this.removeCard(indexBoardSrc, indexCardSrc)
        this.insertCard(srcCard, indexBoardTarget, indexCardTarget)
    }

    updateBoard(id, index, title){
        this.getBoard(index).title = title;
    }

    removeBoard(index){
        const id = this.boards[index].id;
        this.boards.splice(index, 1)
    }

    updateCard(indexBoard, indexCard, title){
        const card = this.boards[indexBoard].items[indexCard]
        card.title = title;
    }
}
import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    iterateThroughSquares(position1, position2, movesArray, string) {
        for (let i = 0; i < 8; i++){
            if (position1 != i) {
                if (string === 'horizontal'){
                    movesArray.push(Square.at(position2,i))
                } else {
                    movesArray.push(Square.at(i,position2))
                }
                
            }
        } 
        return movesArray;
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this)
        if (this.player === Player.WHITE){

           this.iterateThroughSquares(location.col, location.row, moves, 'horizontal')
           this.iterateThroughSquares(location.row, location.col, moves, 'vertical')

            return moves;
        } 
        
    }
}
/*
getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this)
        if (this.player === Player.WHITE){
            //Horizontal moves
            for (let i = 0; i < 8; i++){
                if (location.col != i) {
                    moves.push(Square.at(location.row,i))
                }
            }
            //Vertical moves
            for (let i = 0; i < 8; i++) {
                if (location.row != i) {
                    moves.push(Square.at(i,location.col))
                }
            }
        } 
        */
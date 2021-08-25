import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = [];
        const MAX_INDEX = 7

        if (this.player === Player.WHITE) {

            //Left Diagonal Lower part
            for (var i =1, j=location.row, k=location.col ; i <= Math.min(location.row,location.col); i++)
            moves.push(Square.at(j-i, k-i)); 

            //Left Diagonal Upper part
            for (j=location.row+1, k=location.col+1 ; Math.max(j,k) <= MAX_INDEX; j++,k++)
            moves.push(Square.at(j, k));

            // Right Diagonal Lower part
            for (var j=location.row-1, k=location.col+1 ; Math.max(j,k) <= MAX_INDEX && j >=0; j--,k++)
            moves.push(Square.at(j, k));

            // Right Diagonal Upper part
            for (j=location.row+1, k=location.col-1 ; Math.max(j,k) <= MAX_INDEX && k >=0; j++,k--)
            moves.push(Square.at(j, k));

            return moves;
        } 
    }
}
    
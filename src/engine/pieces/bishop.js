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
        const maxIndexNum = 7

        if (this.player === Player.WHITE) {
            for (let i=0, j=location.col-location.row ; j <= maxIndexNum; i++,j++) {
            if(location.row != i && j != -1)
                moves.push(Square.at(i, j));
        }
            for (let i=0, j=location.row+location.col ; i <= location.row+location.col; i++,j--) {
            if(location.row != i)
                moves.push(Square.at(i, j));
        }
        console.log(moves)
        }
        return moves;
    }
}
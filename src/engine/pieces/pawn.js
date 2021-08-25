import Player from '../player';
import Square from '../square';
import Piece from './piece';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this)
        if (this.player === Player.WHITE) {
            if (location.row == 1){
                moves.push(Square.at(location.row + 2, location.col))
            }
            moves.push(Square.at(location.row + 1, location.col))

            let rightDiagonal = Square.at(location.row + 1, location.col + 1);
            let leftDiagonal = Square.at(location.row + 1, location.col - 1);

               if (!!board.getPiece(rightDiagonal) && (board.getPiece(rightDiagonal).player === Player.BLACK)){
                   moves.push(rightDiagonal)
               } 
               if (!!board.getPiece(leftDiagonal) && (board.getPiece(leftDiagonal).player === Player.BLACK)){
                moves.push(leftDiagonal)
            
               }
            }  
         else {
            if (location.row == 6){
             moves.push(Square.at(location.row - 2, location.col))
            }
            moves.push(Square.at(location.row - 1, location.col))
            
            let rightDiagonal = Square.at(location.row - 1, location.col + 1);
            let leftDiagonal = Square.at(location.row - 1, location.col - 1);
            
            if (!!board.getPiece(rightDiagonal) && (board.getPiece(rightDiagonal).player === Player.WHITE)){
                moves.push(rightDiagonal)
            } 
            if (!!board.getPiece(leftDiagonal) && (board.getPiece(leftDiagonal).player === Player.WHITE)){
             moves.push(leftDiagonal)
         
            }
        
        }
    return moves;
    }
}

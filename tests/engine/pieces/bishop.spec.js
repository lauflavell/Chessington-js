import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {
    let board;
    beforeEach(() => board = new Board());

    it('can move diagonally 1', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 4), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            // Diagonally Right
            Square.at(1, 3), Square.at(0, 2), Square.at(3, 5), Square.at(4, 6), Square.at(5, 7),
            // Diagonally Left
            Square.at(0, 6), Square.at(1, 5), Square.at(3, 3), Square.at(4, 2), Square.at(5, 1), Square.at(6, 0)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally 2', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(1, 2), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            // Diagonally Right
            Square.at(0, 1), Square.at(2, 3), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6),Square.at(6, 7),
            // Diagonally Left
            Square.at(0, 3), Square.at(2, 1), Square.at(3, 0)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 4), bishop);

        const moves = bishop.getAvailableMoves(board);

        moves.should.have.length(11);
    });

    it('can move diagonally 3', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(1, 2), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            // Diagonally Right
            Square.at(0, 1), Square.at(2, 3), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6),Square.at(6, 7),
            // Diagonally Left
            Square.at(0, 3), Square.at(2, 1), Square.at(3, 0)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves2', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(1,2), bishop);

        const moves = bishop.getAvailableMoves(board);

        moves.should.have.length(9);
    });

    it('can move diagonally 4', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(4, 6), bishop);

        const moves = bishop.getAvailableMoves(board);
        

        const expectedMoves = [
            //right Diagonal
            Square.at(0, 2), Square.at(1, 3), Square.at(2, 4), Square.at(3, 5), Square.at(5, 7),
            // left Diagonal
            Square.at(3, 7), Square.at(5, 5), Square.at(6, 4), Square.at(7,3)
        ];
        moves.should.have.length(9);
        moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally 5', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(4, 4), bishop);

        const moves = bishop.getAvailableMoves(board);
        

        const expectedMoves = [
            //right Diagonal
            Square.at(3, 3), Square.at(2, 2), Square.at(1, 1), Square.at(0, 0), Square.at(5, 5), Square.at(6, 6), Square.at(7, 7),
            // left Diagonal
            Square.at(1, 7), Square.at(2, 6), Square.at(3, 5), Square.at(5, 3), Square.at(6, 2), Square.at(7, 1)
        ];
        moves.should.have.length(13);
        //moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally 6', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(7, 2), bishop);

        const moves = bishop.getAvailableMoves(board);
        

        const expectedMoves = [
            //right Diagonal
            Square.at(5, 0), Square.at(6, 1),
            // left Diagonal
            Square.at(2, 7), Square.at(3, 6), Square.at(4, 5), Square.at(5, 4), Square.at(6, 3)
        ];
        moves.should.have.length(7);
        //moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally 7', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(7, 7), bishop);

        const moves = bishop.getAvailableMoves(board);
        

        const expectedMoves = [
            //right Diagonal
            Square.at(6, 6), Square.at(5, 5), Square.at(4, 4), Square.at(3, 3), Square.at(2, 2), Square.at(1, 1), Square.at(0, 0)
            // left Diagonal

        ];
        moves.should.have.length(7);
        moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally 8', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(0, 0), bishop);

        const moves = bishop.getAvailableMoves(board);
    

        const expectedMoves = [
            //right Diagonal
            Square.at(1, 1), Square.at(2, 2), Square.at(3, 3), Square.at(4, 4), Square.at(5, 5), Square.at(6, 6), Square.at(7, 7)
            // left Diagonal

        ];
        moves.should.have.length(7);
        moves.should.deep.include.members(expectedMoves);
    });
it('can move diagonally 9', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(0, 7), bishop);

        const moves = bishop.getAvailableMoves(board);
        

        const expectedMoves = [
            //right Diagonal
            Square.at(1, 6), Square.at(2, 5), Square.at(3, 4), Square.at(4, 3), Square.at(5, 2), Square.at(6, 1), Square.at(7, 0)
            // left Diagonal

        ];
        moves.should.have.length(7);
        moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally 10', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(7, 0), bishop);

        const moves = bishop.getAvailableMoves(board);
        

        const expectedMoves = [
            //right Diagonal
            Square.at(0, 7), Square.at(1, 6), Square.at(2, 5), Square.at(3, 4), Square.at(4, 3), Square.at(5, 2), Square.at(6, 1)
            // left Diagonal

        ];
        moves.should.have.length(7);
        moves.should.deep.include.members(expectedMoves);
    });

    
});
import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Pawn', () => {

    describe('white pawns', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can only move one square up if they have already moved', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 0), pawn);
            pawn.moveTo(board, Square.at(2, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(3, 0));
            
        });

        it('can move one or two squares up on their first move', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
        });
        it('can move Diagonally if there is an opponent', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 2), pawn);

            const blackPawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 3), blackPawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 2), Square.at(4, 3)]);
        });

        it('can not move if opponent is white', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 2), pawn);

            const blackPawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4, 3), blackPawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(1);
            moves.should.deep.include.members([Square.at(4, 2)]);
        });

        it.only('can not move if left diagonal when on 0 col', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 0), pawn);

            const blackPawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 1), blackPawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 0), Square.at(4, 1) ]);
        });

        it('can move with two opponents', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 1), pawn);

            const blackPawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 0), blackPawn);

            const black2Pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 2), black2Pawn);
            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(3);
            moves.should.deep.include.members([Square.at(4, 1), Square.at(4, 0), Square.at(4, 2) ]);
        });

        it('cannot move with two white blocking', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 1), pawn);

            const blackPawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4, 0), blackPawn);

            const black2Pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4, 2), black2Pawn);
            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(1);
            moves.should.deep.include.members([Square.at(4, 1) ]);
        });
    });

    describe('black pawns', () => {

        let board;
        beforeEach(() => board = new Board(Player.BLACK));    
        
        it('can only move one square down if they have already moved', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 0), pawn);
            pawn.moveTo(board, Square.at(5, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(4, 0));
        });

        it('can move one or two squares down on their first move', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 7), Square.at(5, 7)]);
        });

        it.only('cannot move with two white blocking', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 1), pawn);

            const blackPawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 0), blackPawn);

            const black2Pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 2), black2Pawn);
            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(3);
            moves.should.deep.include.members([Square.at(3, 0), Square.at(3, 1), Square.at(3, 2) ]);
        });

    });

});

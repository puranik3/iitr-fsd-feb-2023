import { Cell } from './Cell.js';
import { Directions } from './constants.js';

export class Snake {
    constructor( game ) {
        this.game = game;

        this.head = new Cell( 1, 1 );
        this.tail = [];
        this.size = 3;
        this.direction = Directions.RIGHT;
    }

    draw( context ) {
        const { cellSize } = this.game.configuration;

        // head
        context.fillStyle = '#000000';
        context.fillRect( this.head.x * cellSize, this.head.y * cellSize, cellSize, cellSize );

        const size = cellSize / 10;
        const offset = cellSize / 3;
        const x = cellSize * this.head.x;
        const y = cellSize * this.head.y;

        // eyes
        switch (this.direction) {
            case Directions.UP:
                context.beginPath();
                context.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case Directions.DOWN:
                context.beginPath();
                context.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case Directions.RIGHT:
                context.beginPath();
                context.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case Directions.LEFT:
                context.beginPath();
                context.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
        }

        // tail
        context.fillStyle = '#888888';
        this.tail.forEach(
            tail => {
                context.fillRect(
                    tail.x * cellSize, tail.y * cellSize, cellSize, cellSize
                );
            }
        )
    }

    move() {
        this.tail.push( this.head );

        this.head = this.getNext();

        if( this.tail.length > this.size ) {
            this.tail.shift();
        }
    }

    getNext() {
        switch( this.direction ) {
            case Directions.UP:
                return new Cell( this.head.x, this.head.y - 1 );
            case Directions.DOWN:
                return new Cell( this.head.x, this.head.y + 1 );
            case Directions.RIGHT:
                return new Cell( this.head.x + 1, this.head.y );
            case Directions.LEFT:
                return new Cell( this.head.x - 1, this.head.y );
        }
    }

    isTail( cell ) {
        const match = this.tail.find(
            tail => cell.x === tail.x && cell.y === tail.y
        );

        return match;
    }

    setDirection( direction ) {
        if( this.direction === Directions.UP && direction === Directions.DOWN ) {
            return;
        }

        if( this.direction === Directions.DOWN && direction === Directions.UP ) {
            return;
        }
        
        if( this.direction === Directions.LEFT && direction === Directions.RIGHT ) {
            return;
        }
        
        if( this.direction === Directions.RIGHT && direction === Directions.LEFT ) {
            return;
        }

        this.direction = direction;
    }

    grow() {
        this.size += 3;
    }
}
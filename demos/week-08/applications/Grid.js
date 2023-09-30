import { Cell } from './Cell.js';

export class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
    }

    seed() {
        const { nbCellsX, nbCellsY, level } = this.game.configuration;
        const nbApples = 5 * ( level + 1 )

        for( let count = 0; count < nbApples; count++ ) {
            const x = Math.floor( Math.random() * nbCellsX );
            const y = Math.floor( Math.random() * nbCellsY );
            this.apples.push( new Cell( x, y ) );
        }

        console.log( this.apples );
    }

    draw( context ) {
        const { width, height, cellSize } = this.game.configuration;

        // horizontal lines
        for( let y = 0; y <= height; y += cellSize ) {
            context.beginPath();
            context.moveTo( 0, y );
            context.lineTo( width, y );
            context.stroke();
        }


        // vertical lines
        for( let x = 0; x <= width; x += cellSize ) {
            context.beginPath();
            context.moveTo( x, 0 );
            context.lineTo( x, height );
            context.stroke();
        }

        // apples
        context.fillStyle = 'red';
        this.apples.forEach(
            apple => {
                context.fillRect(
                    apple.x * cellSize,
                    apple.y * cellSize,
                    cellSize,
                    cellSize
                ) 
            }
        )
    }

    isOutside( cell ) {
        const { nbCellsX, nbCellsY } = this.game.configuration;
        
        return cell.x > nbCellsX || cell.x < 0 || cell.y > nbCellsY || cell.y < 0;
    }

    isDone() {
        return this.apples.length === 0;;
    }

    isApple( cell ) {
        const match = this.apples.find(
            apple => apple.x === cell.x && apple.y === cell.y
        );

        return match;
    }

    eat( cell ) {
        this.apples = this.apples.filter(
            c => c.x !== cell.x || c.y !== cell.y
        )
    }
}
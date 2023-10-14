import { State, Scores, Velocity, random } from './utils.js';

const board = document.querySelector('.board') as Element;
const ball = document.querySelector('.ball') as HTMLElement;
const paddle_1 = document.querySelector('.paddle_1') as HTMLElement;
const paddle_2 = document.querySelector('.paddle_2') as HTMLElement;
const score_1 = document.querySelector('.player_1_score') as HTMLElement;
const score_2 = document.querySelector('.player_2_score') as HTMLElement;
const message = document.querySelector('.message') as HTMLElement;

const board_coord = board.getBoundingClientRect();
const initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;

let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();

const paddle_height = paddle_1_coord.height;
let ball_top = ball.style.top;
let ball_left = ball.style.left;

class Game {
    state = State.STOPPED;
    scores : Scores;

    constructor() {
        // game state (data members)
        this.state = State.STOPPED;
        this.scores = {
            player1: 0,
            player2: 0,
        };
    }

    // bind listeners at the start of the game
    start() {
        this.bindListeners();
    }

    // to reset game state on completion of a rally
    reset() {
        this.state = State.STOPPED;
        ball.style.top = ball_top;
        ball.style.left = ball_left;
        ball_coord = initial_ball_coord;

        message.innerText = 'Press Enter to start playing';
    }

    // set up event handling - handle 'keydown' event - check event.key and react to 'Enter' or one of the 4 player controls ('w', 's', 'ArrowUp', 'ArrowDown')
    bindListeners() {
        document.addEventListener('keydown', (event) => {
            const key = event.key;

            if( key === 'Enter' ) {
                // start the game
                if( this.state === State.STOPPED ) {
                    this.state = State.STARTED;

                    ball_coord = initial_ball_coord;
                    ball.style.top = ball_top;
                    ball.style.left = ball_left;

                    message.innerText = 'Game on!';

                    requestAnimationFrame(() => {
                        let velocity = this.getVelocity();
                        this.moveBall( velocity );
                    });
                }
            } else {
                if( key === 'w' ) {
                    paddle_1.style.top = Math.max( board_coord.top, paddle_1_coord.top - window.innerHeight * 0.085 ) + 'px';
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                }

                if( key === 's' ) {
                    paddle_1.style.top = Math.min( board_coord.bottom - paddle_height, paddle_1_coord.top + window.innerHeight * 0.085 ) + 'px';
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                }
                
                if( key === 'ArrowUp' ) {
                    paddle_2.style.top = Math.max( board_coord.top, paddle_2_coord.top - window.innerHeight * 0.085 ) + 'px';
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                }
                
                if( key === 'ArrowDown' ) {
                    paddle_2.style.top = Math.min( board_coord.bottom - paddle_height, paddle_2_coord.top + window.innerHeight * 0.085 ) + 'px';
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                }
            }
        });
    }

    // generate a random velocity and return it
    getVelocity() {
        let velocity : Velocity;
        
        velocity = {
            dx: random( 3, 8 ) * ( random( 0, 1 ) === 0 ? -1 : 1 ),
            dy: random( 3, 8 ) * ( random( 0, 1 ) === 0 ? -1 : 1 ),
        };

        return velocity;
    }
    
    // generate a random velocity to be set when ball bounces off a player's paddle (bat), and return it
    bounce( velocity : Velocity ) {
        let newVelocity : Velocity = this.getVelocity();
        
        // set opposite direction for x, and maintain direction for y
        let curXDirection = velocity.dx > 0 ? 1 : -1;
        let curYDirection = velocity.dy > 0 ? 1 : -1;
        newVelocity.dx = Math.abs( newVelocity.dx ) * -curXDirection;
        newVelocity.dy = Math.abs( newVelocity.dy ) * curYDirection;
        
        return newVelocity;
    };

    // game loop
    moveBall( velocity : Velocity ) {
        // if ball hits the top or bottom edge, we need to change the direction
        if( ball_coord.top <= board_coord.top ) {
            velocity.dy = -velocity.dy;
        }

        if( ball_coord.bottom >= board_coord.bottom ) {
            velocity.dy = -velocity.dy;
        }

        // if ball hits the paddle, we need to change the direction (with a different velocity ideally)
        // ball hits paddle_1
        if(
            ball_coord.left <= paddle_1_coord.right
            &&
            ball_coord.top >= paddle_1_coord.top
            &&
            ball_coord.bottom <= paddle_1_coord.bottom
        ) {
            // velocity.dx = -velocity.dx;
            velocity = this.bounce( velocity );
        }
        
        if(
            ball_coord.right >= paddle_2_coord.left
            &&
            ball_coord.top >= paddle_2_coord.top
            &&
            ball_coord.bottom <= paddle_2_coord.bottom
        ) {
            velocity = this.bounce( velocity );
        }

        // ball moved out of right edge - player 1 wins
        if( ball_coord.right >= board_coord.right ) {
            this.scores.player1++;
            score_1.innerText = '' + this.scores.player1;
            this.reset();
            return;
        }
        
        // ball moved out of left edge - player 2 wins
        if( ball_coord.left <= board_coord.left ) {
            this.scores.player2++;
            score_2.innerText = '' + this.scores.player2;
            this.reset();
            return;
        }

        // move the ball by updating values for top, left styles inline
        
        // get the new ball_coord using ball.getBoundingClientRect()
        ball.style.top = ball_coord.top + velocity.dy + 'px';
        ball.style.left = ball_coord.left + velocity.dx + 'px';

        ball_coord = ball.getBoundingClientRect();
        
        // set up recursive call of game loop (moveBall) before next display refresh
        requestAnimationFrame(() => {
            this.moveBall( velocity );
        });
    }
}
// create and start the game
const game = new Game();
game.start();

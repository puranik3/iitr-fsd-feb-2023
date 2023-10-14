// enumeration
// const STARTED = 'STARTED';
// const STOPPED = 'STOPPED';
// const PAUSED = 'PAUSED';

enum GameState {
    STARTED = 'STARTED',
    STOPPED = 'STOPPED',
    PAUSED = 'PAUSED'
};

let status : GameState = GameState.STARTED;

if( status === GameState.STARTED ) {
    console.log( 'Game on' );
}

export {}
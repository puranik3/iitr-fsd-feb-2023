enum State {
    STARTED,
    STOPPED
}

interface Scores {
    player1: number,
    player2: number
}

interface Velocity {
    dx: number,
    dy: number
};

const random = ( min : number, max : number ) => Math.floor( min + Math.random() * ( max - min + 1 ) );

random( 3, 8 );

export {
    State,
    Scores,
    Velocity,
    random
}
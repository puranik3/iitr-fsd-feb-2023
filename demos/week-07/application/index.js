// List of tracks that have to be played
let track_list = [
  {
    name: "Demo1",
    artist: "Broke For Free",
    image: "https://picsum.photos/640/360",
    path: "songs/sample1.mp3"
  },
  {
    name: "Every Morning",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/320/180",
    path: "songs/every-morning-18304.mp3"
  },
  {
    name: "Relax and Sleep",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/480/270",
    path: "songs/relax-and-sleep-18565.mp3",
  },
  {
    name: "Uplifting Day",
    artist: "Lesfm",
    image: "https://picsum.photos/240/180",
    path: "songs/uplifting-day-15583.mp3",
  }
];

// Step 1: Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
  
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
  
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
  
// Step 2: Specify globally used values
let track_index = 0;
let isPlaying = false;
const curr_track = document.createElement( 'audio' );
let intervalId;

// Step 3 : Create the audio element for the player

// loadTrack( track_index ) to load a track and set it up
function loadTrack() {
  const song = track_list[track_index];
  curr_track.src = song.path;
  curr_track.load();

  now_playing.innerText = 'PLAYING ' + ( track_index + 1 ) + ' of ' + track_list.length;
  track_art.style.backgroundImage = 'url( "' + song.image +  '" )';
  track_name.innerText = song.name;
  track_artist.innerText = song.artist;

  clearInterval( intervalId );
  intervalId = setInterval( seekUpdate, 1000 );
}

// Set up a random background color
function random_bg_color() {
    
}
    
// Reset all values to their default
function resetValues() {
}

// To switch to playing when paused, and vice versa
function playPauseTrack() {
  if( !isPlaying ) {
    playTrack();
  } else {
    pauseTrack();
  }

  total_duration.innerText = getFormattedDuration( curr_track.duration );
}
    
function playTrack() {
  isPlaying = true;
  curr_track.play();
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
    
function pauseTrack() {  
  isPlaying = false;
  curr_track.pause();
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  track_index = ( track_index + 1 ) % track_list.length;
  loadTrack();
  playTrack();
}
    
function prevTrack() {
  track_index = ( track_index - 1 + track_list.length ) % track_list.length;
  loadTrack();
  playTrack();
}

function seekTo() {
  // seek_slider.value // 0 - 100
  curr_track.currentTime = curr_track.duration * ( seek_slider.value / 100 );
}
    
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function getFormattedDuration(duration) {
  const minutes = '' + Math.floor( duration / 60 );
  const seconds = '' + Math.round( duration - minutes * 60 );

  return minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
}

// update the progress slider and durations as the music plays
function seekUpdate() {
  let seekPosition = ( curr_track.currentTime / curr_track.duration ) * 100;
  seek_slider.value = seekPosition;

  curr_time.innerText = getFormattedDuration( curr_track.currentTime );
}

loadTrack();

// set the ball rolling when the page loads!
playpause_btn.addEventListener( 'click', playPauseTrack );
curr_track.addEventListener( 'ended', nextTrack );
next_btn.addEventListener( 'click', nextTrack );
prev_btn.addEventListener( 'click', prevTrack );
volume_slider.addEventListener( 'input', setVolume );
seek_slider.addEventListener( 'input', seekTo );
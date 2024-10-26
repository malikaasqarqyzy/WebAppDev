const tracks = [
  { name: "Track 1", src: "track1.mp3", cover: "cover1.jpg" },
  { name: "Track 2", src: "track2.mp3", cover: "cover2.jpg" },
  { name: "Track 3", src: "track3.mp3", cover: "cover3.jpg" }
];

let currentTrackIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause");
const trackName = document.getElementById("track-name");
const trackCover = document.getElementById("track-cover");
const trackList = document.getElementById("track-list");

// Initialize track list
function initializeTrackList() {
  tracks.forEach((track, index) => {
    const trackItem = document.createElement("li");
    trackItem.textContent = track.name;
    trackItem.onclick = () => selectTrack(index);
    trackList.appendChild(trackItem);
  });
}

// Load the selected track
function loadTrack(index) {
  currentTrackIndex = index;
  audioPlayer.src = tracks[index].src;
  trackCover.src = tracks[index].cover;
  trackName.textContent = tracks[index].name;
}

// Toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.textContent = "Play";
  } else {
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

// Play the next track
function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  audioPlayer.play();
  playPauseButton.textContent = "Pause";
  isPlaying = true;
}

// Play a selected track
function selectTrack(index) {
  loadTrack(index);
  audioPlayer.play();
  playPauseButton.textContent = "Pause";
  isPlaying = true;
}

// Initialize the player
loadTrack(currentTrackIndex);
initializeTrackList();

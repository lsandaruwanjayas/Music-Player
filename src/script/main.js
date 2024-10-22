const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Amalgam",
    artist: "Rockot",
    duration: "4.14",
    src: "./src/audio/amalgam.mp3",
  },
  {
    id: 1,
    title: "Creative Technology",
    artist: "Pumpupthemind",
    duration: "1.50",
    src: "./src/audio/creative-technology-showreel.mp3",
  },
  {
    id: 2,
    title: "Ethereal Vistas",
    artist: "Denys Brodovskyi",
    duration: "4.01",
    src: "./src/audio/ethereal-vistas.mp3",
  },
  {
    id: 3,
    title: "For Her Chill",
    artist: "Lidérc",
    duration: "2.13",
    src: "./src/audio/for-her-chill.mp3",
  },
  {
    id: 4,
    title: "Groovy Ambient Funk",
    artist: "moodmode",
    duration: "2.16",
    src: "./src/audio/groovy-ambient-funk.mp3",
  },
  {
    id: 5,
    title: "In Slow Motion",
    artist: "soundbay",
    duration: "1.58",
    src: "./src/audio/in-slow-motion.mp3",
  },
  {
    id: 6,
    title: "Movement",
    artist: "SoulProdMusic",
    duration: "2.35",
    src: "./src/audio/movement.mp3",
  },
  {
    id: 7,
    title: "Night Detective",
    artist: "Amaksi",
    duration: "1.55",
    src: "./src/audio/night-detective.mp3",
  },
  {
    id: 8,
    title: "Nightfall",
    artist: "SoulProdMusic",
    duration: "2.21",
    src: "./src/audio/nightfall.mp3",
  },
  {
    id: 9,
    title: "No Place To Go",
    artist: "SergePavkinMusic",
    duration: "5.37",
    src: "./src/audio/no-place-to-go.mp3",
  },
  {
    id: 10,
    title: "Perfect Beauty",
    artist: "Good_B_Music",
    duration: "7.20",
    src: "./src/audio/perfect-beauty.mp3",
  },
  {
    id: 11,
    title: "Solitude",
    artist: "lucafrancini",
    duration: "2.38",
    src: "./src/audio/solitude-dark.mp3",
  },
];

const audio = new Audio();

let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const renderSongs = (array) => {
  const songsHTML = array.map((song) => {
    return `<li id="song-${song.id}" class="playlist-song"></li>
     <button class="playlist-song-info">
     <span class="playlist-song-title">${song.title}</span>
      <span class="playlist-song-artist">${song.artist}</span>
      <span class="playlist-song-duration">${song.duration}</span>
     </button>
     <button
          class="playlist-song-delete"
          aria-label="Delete${song.title}"
          >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
      </button>
     `;
  }).join("");
  playlistSongs.innerHTML = songsHTML;
};


renderSongs(userData?.songs)
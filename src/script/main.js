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

 
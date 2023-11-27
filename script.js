console.log("Welcome to my music");

//Initialize variables
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterplay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Shiv Thandav",
    filePath: "song/1.mp3",
    coverPath: "cover.jpg.jpg",
  },
  {
    songName: "Divine spirit",
    filePath: "song/2.mp3",
    coverPath: "cover2.jpeg",
  },
  {
    songName: "pawfect",
    filePath: "song/3.mp3",
    coverPath: "cover3.jpg",
  },
  {
    songName: "Deepali",
    filePath: "song/4.mp3",
    coverPath: "cover 4.jpeg",
  },
  {
    songName: "bagundey-bagundey",
    filePath: "song/5.mp3",
    coverPath: "cover5.jpg",
  },
  {
    songName: "ela ela",
    filePath: "song/6.mp3",
    coverPath: "cover6.webp",
  },
  {
    songName: "jiya jale",
    filePath: "song/7.mp3",
    coverPath: "cover5.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0] = songs[i].songName;
});
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    //  gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    //  gif.style.opacity = 0;
  }
});

//Listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //Update seekbar
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  console.log(progress);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-cicle-pause");
      element.classList.add("fa-cicle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-cicle-play");
      e.target.classList.add("fa-cicle-pause");
      audioElement.src = `song/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `song/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

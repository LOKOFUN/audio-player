// TODO: прогресс бар
// TODO: кнопки управления контекстом аудио объекта

let currentId = 0;
const list = [
    {
        id: 0,
        src: 'music/song1.mp3',
        image: 'image/poster/post_malone1.png',
        song: 'Hollywood Bleeding',
        singer: 'Post Malone'
    },
    {
        id: 1,
        src: 'music/song2.mp3',
        image: 'image/poster/slide1.png',
        song: 'Hefner',
        singer: 'MORGENSHTERN'
    },
    {
        id: 2,
        src: 'music/song3.mp3',
        image: 'image/poster/slide2.png',
        song: 'привычка',
        singer: 'скриптонит'
    },
    {
        id: 3,
        src: 'music/song4.mp3',
        image: 'image/poster/slide2.png',
        song: 'ТУ ТУ ТУ',
        singer: 'КРАШ'
    },
];

let playerPoster = document.getElementById('player-poster');
let playerSong = document.getElementById('player-song');
let playerSinger = document.getElementById('player-singer');
let playButton = document.getElementById('btnPlay');
let volumeButton = document.getElementById('volume');
let refreshButton = document.getElementById('refresh');
let repeatButton = document.getElementById('repeat');
playerSong.innerText = list[0].song;

audioObj = new Audio();
audioObj.volume = 1;
audioObj.src = list[currentId].src;

const playSong = () => {
    audioObj.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
};

const pauseSong = () => {
    audioObj.pause();
    playButton.innerHTML = '<i class="fas fa-play" ></i>';
};

const handelPlay = () => audioObj.paused ? playSong() : pauseSong();

const setSongInfo = () => {
    audioObj.src = list[currentId].src;
    playerPoster.src = list[currentId].image;
    playerSong.innerText = list[currentId].song;
    playerSinger.innerText = list[currentId].singer;
    playSong();
};

const nextSong = () => {
    audioObj.paused;
    audioObj.pause();
    if (currentId < list.length - 1) {
        currentId++;
        setSongInfo();
    } else {
        currentId = 0;
        setSongInfo();
    }
};

const prevSong = () => {
    audioObj.paused;
    audioObj.pause();
    if (currentId > 0) {
        currentId--;
        setSongInfo();
    } else {
        currentId = list.length - 1;
        setSongInfo();
    }
};

audioObj.onended = () => {
    currentId++;
    setSongInfo();
};

audioObj.onloadedmetadata = () => {
    let min = (Math.floor(audioObj.duration / 60));
    let sec = (audioObj.duration % 60).toFixed(0);
    let playerDuration = document.getElementById('player-duration');

    playerDuration.innerText = `${min}:${sec}`;
};

audioObj.ontimeupdate = () => {
    let min = (Math.floor(audioObj.currentTime / 60));
    let sec = (audioObj.currentTime % 60).toFixed(0);

    document.getElementById('count-duration').innerText = `${min}:${sec}`;
};

const enableVolume = () => {
    audioObj.volume = 1;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
};

const muteVolume = () => {
  audioObj.volume = 0;
  volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
};

const handleVolume = () => audioObj.volume ? muteVolume() : enableVolume();

const animationRepeat = () => {
    repeatButton.animate([
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(360deg)'}],
    {duration: 1000}
)};

const animationRefresh = () => {
  refreshButton.animate([
      {transform: 'translateY(0px)'},
      {transform: 'translateY(2px)'},
      {transform: 'translateY(-4px)'}],
      {duration: 100})
};

const  refreshSong = () => {
    currentId = [Math.floor(Math.random() * list.length)];
    audioObj.play();
    animationRefresh();
    setSongInfo();
};

const repeatSong = () => {
    audioObj.onended = () => {
        audioObj.src = list[currentId].src;
        audioObj.play();
    };

    animationRepeat();
};







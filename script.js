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
];

let playerPoster = document.getElementById('player-poster');
let playerSong = document.getElementById('player-song');
let playerSinger = document.getElementById('player-singer');

playerSong.innerText = list[0].song;

audioObj = new Audio();
audioObj.src = list[currentId].src;
let handlerTimer;

const playSong = () => {
    audioObj.play();
    document.getElementById('btnPlay').innerHTML = '<i class="fas fa-pause"></i>';
    handlerTimer = setInterval(countSeconds = () => {
        duration = (audioObj.currentTime % 60).toFixed(0);
        document.getElementById('count-duration').innerHTML = duration;
    },1000);
};

const pauseSong = () => {
    audioObj.pause();
    document.getElementById('btnPlay').innerHTML = '<i class="fas fa-play" ></i>';
    clearInterval(handlerTimer);
};

const handelPlay = () => audioObj.paused ? playSong() : pauseSong();

const nextSong = () => {
    audioObj.paused;
    audioObj.pause();
    if (currentId < list.length - 1) {
        currentId++;
        audioObj.src = list[currentId].src;
        audioObj.play();
        playerPoster.src = list[currentId].image;
        playerSong.innerText = list[currentId].song;
        playerSinger.innerText = list[currentId].singer;
    }
    else {
        currentId = 0;
        audioObj.src = list[currentId].src;
        audioObj.play();
        playerPoster.src = list[currentId].image;
        playerSong.innerText = list[currentId].song;
        playerSinger.innerText = list[currentId].singer;
    }
};

const prevSong = () => {
    audioObj.paused;
    audioObj.pause();
    if (currentId > 0) {
        currentId = currentId - 1;
        audioObj.src = list[currentId].src;
        audioObj.play();
        playerPoster.src = list[currentId].image;
        playerSong.innerText = list[currentId].song;
        playerSinger.innerText = list[currentId].singer;
    }
    else{
        currentId = list.length -1;
        audioObj.src = list[currentId].src;
        audioObj.play();
        playerPoster.src = list[currentId].image;
        playerSong.innerText = list[currentId].song;
        playerSinger.innerText = list[currentId].singer;
    }
};

audioObj.onended = () => {
    currentId = currentId + 1;
    audioObj.src = list[currentId].src;
    audioObj.play();
    playerPoster.src = list[currentId].image;
    playerSong.innerText = list[currentId].song;
    playerSinger.innerText = list[currentId].singer;
};

audioObj.onloadedmetadata  = function () {
    let min = (Math.floor(audioObj.duration / 60));
    let sec = (audioObj.duration % 60).toFixed(0);
    let playerDuration = document.getElementById('player-duration');
    playerDuration.innerText = min + ':' + sec;
};



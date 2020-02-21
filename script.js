let isPlaying = false;
let currentId = 0;
let list = [{
        id: 0,
        src: 'music/song1.mp3',
        image: 'image/poster/post_malone1.png',
        name: 'Hollywood Bleeding',
        singer: 'Post Malone'
    },
    {
        id:1,
        src: 'music/song2.mp3',
        image: 'image/poster/slide1.png',
        name: 'Hefner',
        singer: 'MORGENSHTERN'
    },
    {
        id:2,
        src: 'music/song3.mp3',
        image: 'image/poster/slide2.png',
        name: 'привычка',
        singer: 'скриптонит'
    },
];

audioObj = new Audio();
audioObj.src = list[currentId].src;

audioObj.onloadedmetadata = function(){
    let min = (Math.floor(audioObj.duration / 60));
    let sec = (audioObj.duration % 60).toFixed(0);
    let playerDuration = document.getElementById("player-duration");
    playerDuration.innerText = min + ":" + sec;
};



let playPause = () => {
    if(!isPlaying){
        audioObj.play();
        let btnPlay = document.getElementById("btnPlay").innerHTML = "<i class=\"fas fa-pause\"></i>";
    }
    else
    {
        audioObj.pause();
        let btnPlay = document.getElementById("btnPlay").innerHTML = "<i class=\"fas fa-play\" ></i>";
    }
    isPlaying = !isPlaying;
};

let nextSong = () => {
        isPlaying = false;
        audioObj.pause();
        if(currentId < list.length-1){
            currentId++;
            audioObj.src = list[currentId].src;
            audioObj.play();
            let playerPoster = document.getElementById("player-poster");
            playerPoster.src = list[currentId].image;
            let playerSong = document.getElementById("player-song");
            playerSong.innerText = list[currentId].name;
            let playerSinger = document.getElementById("player-singer");
            playerSinger.innerText = list[currentId].singer;
        }
};

let prevSong = () => {
    isPlaying = false;
    audioObj.pause();
    if(currentId > 0){
        currentId = currentId-1;
        audioObj.src = list[currentId].src;
        audioObj.play();
        let playerPoster = document.getElementById("player-poster");
        playerPoster.src = list[currentId].image;
        let playerSong = document.getElementById("player-song");
        playerSong.innerText = list[currentId].name;
        let playerSinger = document.getElementById("player-singer");
        playerSinger.innerText = list[currentId].singer;
    }
};

audioObj.onended = () => {
    currentId = currentId+1;
    audioObj.src = list[currentId].src;
    audioObj.play();
    let playerPoster = document.getElementById("player-poster");
    playerPoster.src = list[currentId].image;
    let playerSong = document.getElementById("player-song");
    playerSong.innerText = list[currentId].name;
    let playerSinger = document.getElementById("player-singer");
    playerSinger.innerText = list[currentId].singer;
};





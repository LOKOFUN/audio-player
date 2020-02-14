let isPlaying = false;
let currentId = 0;
let list = [{
        id: 0,
        src: 'song1.mp3',
        image: 'post_malone1.png'
    },
    {
        id:1,
        src: 'song2.mp3',
        image: 'slide1.png'
    },
    {
        id:2,
        src: 'song1.mp3'}];

audioObj = new Audio();
audioObj.src = list[currentId].src;

let playPause = () => {
    if(!isPlaying){
        audioObj.play();
    }
    else
    {
        audioObj.pause();
    }
    isPlaying = !isPlaying;
};

let nextSong = () => {
    isPlaying = false;
    audioObj.pause();
    currentId = currentId+1;
    audioObj.src = list[currentId].src;
    audioObj.play();
};

let prevSong = () => {
    isPlaying = false;
    audioObj.pause();
    currentId = currentId-1;
    audioObj.src = list[currentId].src;
    audioObj.play();
};

audioObj.onended = () => {
    currentId = currentId+1;
    audioObj.src = list[currentId].src;
    audioObj.play();
};

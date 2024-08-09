require('./style.css')

function WebMusicButton(options) {
    this.options = options || {};
    this.options.musicUrl = options.musicUrl || 'http://nginx.web-framework-jr3m.1660089233265532.cn-zhangjiakou.fc.devsapp.net/images/static/diving-watch/music.mp3';
    this.options.isPlay = false
}

WebMusicButton.prototype.init = function() {
    this.create();
    this.action();
};

WebMusicButton.prototype.create = function() {
    var musicButton = document.getElementById('music-button');
    if (musicButton) {
        var audio = document.createElement('audio');
        audio.src = this.options.musicUrl;
        musicButton.appendChild(audio);
        musicButton.classList.add('music-bg')
        document.body.appendChild(musicButton);
    } else {
        console.warn('Element with id "music-button" not found.');
    }
};

WebMusicButton.prototype.action = function() {
    var musicButton = document.getElementById('music-button');
    musicButton.addEventListener('click',()=>{
        if(!this.options.isPlay){
            this.play()
            this.options.isPlay = true
            musicButton.classList.remove('music-bg-pause')
            musicButton.classList.add('music-bg-play')
        }else{
            this.pause()
            this.options.isPlay = false
            musicButton.classList.remove('music-bg-play')
            musicButton.classList.add('music-bg-pause')
        }
    })
};


WebMusicButton.prototype.play = function() {
    var musicButton = document.getElementById('music-button');
    if (musicButton) {
        const audio = musicButton.getElementsByTagName('audio')[0];
        if (audio) {
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        } else {
            console.warn('No audio element found within music-button.');
        }
    } else {
        console.warn('Element with id "music-button" not found.');
    }
};

WebMusicButton.prototype.pause = function() {
    var musicButton = document.getElementById('music-button');
    if (musicButton) {
        const audio = musicButton.getElementsByTagName('audio')[0];
        if (audio) {
            audio.pause();
        } else {
            console.warn('No audio element found within music-button.');
        }
    } else {
        console.warn('Element with id "music-button" not found.');
    }
};

module.exports = WebMusicButton;

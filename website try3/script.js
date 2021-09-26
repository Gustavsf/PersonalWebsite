let arrayPc = document.getElementsByClassName('pc-lang');
let arrayBox = document.getElementsByClassName('box');
let socialMedia = document.getElementsByClassName('social-link');
const vid = document.getElementById('video');
const playButton = document.getElementById('btn-play');
const hobbyText = document.getElementById('welcome-text');
const hobbies = ['Play guitar', 'Ski', 'Skimboard', 'Skate','Code'];

vid.addEventListener('play', function(){
    setTimeout(function(){
        changeText();
    }, 100)
});

function changeText(){
    setTimeout(function(){
        if(vid.currentTime > 0 && !vid.paused && !vid.ended){
            if(vid.currentTime >= 2 && vid.currentTime <= 3){
                //ski
                hobbyText.innerHTML ='<span id="big-letters">Hey,</span> my name is <span id="big-letters">Gustavs Freimanis</span>and I like to <span id="big-letters" id="spn-hobby">'+hobbies[1] +'</span>';                 

                }
            if(vid.currentTime >= 5 && vid.currentTime <= 6){
                //skim
                hobbyText.innerHTML ='<span id="big-letters">Hey,</span> my name is <span id="big-letters">Gustavs Freimanis</span>and I like to <span id="big-letters" id="spn-hobby">'+hobbies[2] +'</span>';                 

                }
            if(vid.currentTime >= 8 && vid.currentTime <= 9){
                //skate
                hobbyText.innerHTML ='<span id="big-letters">Hey,</span> my name is <span id="big-letters">Gustavs Freimanis</span>and I like to <span id="big-letters" id="spn-hobby">'+hobbies[3] +'</span>';                 

                }
            if(vid.currentTime >= 12 && vid.currentTime <= 13){
                //code
                hobbyText.innerHTML ='<span id="big-letters">Hey,</span> my name is <span id="big-letters">Gustavs Freimanis</span>and I like to <span id="big-letters" id="spn-hobby">'+hobbies[4] +'</span>';                 

                }
            changeText();
        } else {
            playButton.style.display = 'block';
        }
    }, 1000)        
}


for(let i =0; i< socialMedia.length; i++){
    socialMedia[i].addEventListener("click", function(){
        if(i === 0){
        window.open('https://www.linkedin.com/in/gustavs-freimanis-3966b9192/');
        } else{
        window.open('https://github.com/Gustavsf/PersonalWebsite');
        }
    });
}

//observer - animation and media
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        for(let i = 0; i<arrayPc.length; i++){
            setTimeout(function(){
                arrayPc[i].style.animationPlayState ='running';
                arrayBox[i].style.animationPlayState ='running';          
            }, i * 300)
        }               
    }
}, { threshold: [0.3] });

observer.observe(document.getElementById('slide-3'));

//audio visualizer
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = new AudioContext;

vid.addEventListener('click', function(){
    if(vid.currentTime > 0 && !vid.paused && !vid.ended){
        vid.pause();
        audioFile.pause();
    }
});
playButton.addEventListener("click", function(){
    vid.play();
    audioFile.play();
    audioFile.volume = 1;
    playButton.style.display = 'none';
    audioCtx.resume();
    vid.currentTime = audioFile.currentTime;
});
let audioFile = new Audio('vid/CyberpunkAcousticGuitar.mp3');
const canvas = document.getElementById('sound-vis');
const audioVis = document.getElementById('gray-box');
const ctx = canvas.getContext('2d');
let audioSource = audioCtx.createMediaElementSource(audioFile);
let analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

//sample size
analyser.fftSize = 64;

//half fftSize (32), bar amount
const buffer = analyser.frequencyBinCount;
const bufferArray = new Uint8Array(buffer);

const barWidth = canvas.width/buffer;
let barHeight;
function animate(){
let x = canvas.width/2;
let y = canvas.width/2;
    ctx.clearRect(0 , 0, canvas.width, canvas.height);
    //0 => 255
    analyser.getByteFrequencyData(bufferArray);
    for(let i = 0; i < buffer;i++){
        barHeight = bufferArray[i];
        ctx.fillStyle= 'rgba('+ y +', '+ x/2 +', 255, 0.8)';
        ctx.fillRect(x, canvas.height - barHeight, barWidth , barHeight);
        ctx.fillStyle= 'rgba('+ (y+130) +', 205, '+ x +', 0.8)';
        ctx.fillRect(y, canvas.height - barHeight, barWidth , barHeight);
        x += barWidth;
        y -=barWidth;
    }
    requestAnimationFrame(animate);
}
animate();
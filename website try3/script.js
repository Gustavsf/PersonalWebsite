let arrayPc = document.getElementsByClassName('pc-lang');
let arrayBox = document.getElementsByClassName('box');
let socialMedia = document.getElementsByClassName('social-link');
const vid = document.getElementById('video');
const hobbyText = document.getElementById('welcome-text');
const hobbies = ['Play guitar', 'Ski', 'Skimboard', 'Skate','Code'];

for(let i =0; i< socialMedia.length; i++){
    socialMedia[i].addEventListener("click", function(){
        if(i === 0){
        window.open('https://www.linkedin.com/in/gustavs-freimanis-3966b9192/');
        } else{
        window.open('https://github.com/Gustavsf');
        }
    });
}

function hobbyTextChange(){
    for(let i = 0; i < hobbies.length; i++){
    setTimeout(function(){
        hobbyText.innerHTML ='<span id="big-letters">Hey,</span> my name is <span id="big-letters">Gustavs Freimanis</span>and I like to <span id="big-letters" id="spn-hobby">'+hobbies[i] +'</span>'; 
                 
    }, i * 3000)}
}
//observer - animation and media
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        for(let i = 0; i<arrayPc.length; i++){
            setTimeout(function(){
                arrayPc[i].style.animationPlayState ='running';
                arrayBox[i].style.animationPlayState ='running';          
            }, i * 200)
        }               
    }
}, { threshold: [0.3] });

var observer2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        try {
            audioFile.volume = audioFile.volume - 0.3;
            if(audioFile.volume <= 0.1){
            audioFile.pause();
            vid.pause();
            //vid.currentTime = audioFile.currentTime;
            console.log('media paused');}
        } catch (error) {}                                     
    }
}, { threshold: [0.7] });

var observer3 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        audioFile.play();
        vid.play();
        hobbyTextChange();
        console.log('media resumed');
        let isStart = true;

        audioFile.volume = 0.3;
        setTimeout(function(){
            audioFile.volume = 0.6;          
        }, 500)
        setTimeout(function(){
            audioFile.volume = 1;          
        }, 1000)          
    }
}, { threshold: [0.3] });

observer.observe(document.getElementById('slide-3'));
observer2.observe(document.getElementById('gustavs-pic'));
observer2.observe(document.getElementById('personal-info'));
observer2.observe(document.getElementById('about-me'));
observer2.observe(document.getElementById('slide-3'));
observer2.observe(document.getElementById('computer-skills'));
observer3.observe(document.getElementById('video-div'));


//audio visualizer
let audioFile = new Audio('vid/CyberpunkAcousticGuitar.mp3');
const audioCtx = new AudioContext();
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
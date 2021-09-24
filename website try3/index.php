<?php
error_reporting(E_ERROR | E_PARSE);

if(isset($_POST['submit'])){
    $to = "gustavsff@hotmail.lv";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote:" . "\n\n" . $_POST['comment'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); //copy to sender
    echo('Mail sent!');
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/e5b585fbd8.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <div id="slide-1">
    <div id="gray-box">
        <canvas id="sound-vis"></canvas>
    </div>
    <p id="welcome-text"><span id="big-letters">Hey,</span> my name is <span id="big-letters">Gustavs Freimanis</span>
     and I like to <span id="big-letters" id="spn-hobby">Skate</span></p>
        <div id="video-div">
            <img src="img/iphonePic.png" alt="Image of Iphone" id="iphone-pic">
            <video src="vid/websiteIntro.mp4" id="video" paused muted ></video>
        </div>
    
    </div>

    <div id="slide-2">
        <img src="img/GustavsPic.jpg" alt="Picture of Gustavs Freimanis" id="gustavs-pic">
        <hr>

        <div id="personal-info">
            <p>Name:</p>
            <p>Gustavs Freimanis</p>                       
            <p>Age:</p>
            <p>20</p>
            <p>Location:</p>
            <p>Riga</p>
            <p>Email:</p>
            <a href = "mailto: gustavsff@hotmail.lv">Gustavsff@hotmail.lv</a>

        </div>
        <div id="about-me">
            <p>About me:</p>
            <p>
                I am a friendly, outgoing guy, interested in new technologies, 
                I intend to keep practicing coding and developing new skills for the rest of my life. 
                Working on group programming projects in my university 
                I have learnt how to divide tasks, give and recieve constructed criticism.
            </p>                                  
        </div>
    </div>

    <div id="slide-3">
        <hr>
        <h2>Computer skills</h2>
        <div id="computer-skills">
            <span>
                <div class="box"><i class="fab fa-html5"></i></div>
                <p class="pc-lang">HTML</p>
            </span>
            <span>
                <div class="box"><i class="fab fa-css3-alt"></i></div>
                <p class="pc-lang">CSS</p>
            </span>
            <span>
                <div class="box"><i class="fab fa-js"></i></div>
                <p class="pc-lang">JS</p>
            </span>
            <span>
                <div class="box"><i class="fab fa-java"></i></div>
                <p class="pc-lang">JAVA</p>
            </span>
            <span>
                <div class="box"><i class="fab fa-php"></i></div>
                <p class="pc-lang">PHP</p>
            </span>
        </div>
    </div>

    <div id="slide-4">
        <hr>
        <h3>Education and training:</h3>
        <ul>
            <li>Riga Technical University: <span id="desc">Computer systems 1 year</span> </li>
            <li>Riga coding school: <span id="desc">Programming basics 120 hours</span> </li>
        </ul>
        <h3>Work experience:</h3>
        <ul>
            <li>Volunteer work: <span id="desc">Working at info desk in Kekavas festival</span></li>
            <li>Construction work: <span id="desc">Constructing and removing dance floor at "Song and Dance" festival</span></li>
        </ul>
        <hr>
    </div>

    <h3>Let's talk :)</h3>
    <p>I am looking forward to hearing from you! This websites source code available on my Github.</p>
    <div id="social-media">
        <span class="social-link">
            <i class="fab fa-linkedin"></i>
            <p>LinkedIn</p>
        </span>
        <span class="social-link">
            <i class="fab fa-github-square"></i>
            <p>Github</p>
        </span>        
    </div>

    <div id="slide-5">
        <form id="userform" method='post'>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <textarea rows="4" cols="20" name="comment" id="comment" form="usrform" placeholder="Type your message here..."></textarea>
            <input id="btn-submit" type="submit" name="submit" value="Submit">
        </form>
    </div>
    <div id="footer">
        
    </div>

    <script src="script.js"></script>
</body>
</html>
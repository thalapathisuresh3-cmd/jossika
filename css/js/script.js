```javascript
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE
   SCRIPT.JS - PART 1
========================================================== */

/* -------------------------------
   Smooth Page Transition
-------------------------------- */

function openPage(page){

    document.body.classList.add("fade-out");

    setTimeout(function(){

        window.location.href = page;

    },600);

}

/* -------------------------------
   Click Animation
-------------------------------- */

document.querySelectorAll("button").forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.style.transform="scale(.95)";

        setTimeout(function(){

            btn.style.transform="";

        },150);

    });

});

/* -------------------------------
   Balloon Game
-------------------------------- */

let poppedCount=0;

function popBalloon(balloon){

    if(balloon.classList.contains("popped"))
        return;

    balloon.classList.add("popped");

    balloon.innerHTML="💥";

    poppedCount++;

    let status=document.getElementById("status");

    if(status){

        status.innerHTML=
        "Balloons Popped : "
        +poppedCount+
        " / 4";

    }

    createMiniConfetti(balloon);

    if(poppedCount===4){

        if(status){

            status.innerHTML=
            "❤️ You Are So Special ❤️";

        }

        setTimeout(function(){

            openPage("cake.html");

        },1200);

    }

}

/* -------------------------------
Mini Confetti
-------------------------------- */

function createMiniConfetti(element){

    const rect=element.getBoundingClientRect();

    for(let i=0;i<18;i++){

        let piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.position="fixed";

        piece.style.left=
        rect.left+
        rect.width/2+"px";

        piece.style.top=
        rect.top+
        rect.height/2+"px";

        piece.style.width="8px";

        piece.style.height="8px";

        piece.style.borderRadius="50%";

        const colors=[
            "#ff4d6d",
            "#ffb703",
            "#4d8cff",
            "#7bff7b",
            "#ffffff"
        ];

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        document.body.appendChild(piece);

        let x=(Math.random()*250)-125;

        let y=(Math.random()*250)-125;

        piece.animate(

        [

        {

        transform:"translate(0,0)",
        opacity:1

        },

        {

        transform:
        `translate(${x}px,${y}px)`,

        opacity:0

        }

        ],

        {

        duration:700,

        easing:"ease-out"

        });

        setTimeout(function(){

            piece.remove();

        },700);

    }

}

/* -------------------------------
YES Button
-------------------------------- */

const yes=document.querySelector(".yesBtn");

if(yes){

yes.addEventListener("click",function(){

openPage("balloons.html");

});

}

/* -------------------------------
NO Button
-------------------------------- */

const no=document.querySelector(".noBtn");

if(no){

no.addEventListener("mouseover",function(){

let x=Math.random()*300-150;

let y=Math.random()*200-100;

no.style.transform=
`translate(${x}px,${y}px)`;

});

no.addEventListener("click",function(){

alert("No option 😄❤️");

});

}

/* -------------------------------
Floating Hearts
-------------------------------- */

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*20)+"px";

heart.style.animationDuration=
(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},9000);

}

/* Generate Hearts */

setInterval(function(){

createHeart();

},1200);

/* -------------------------------
Background Fade
-------------------------------- */

window.onload=function(){

document.body.style.opacity=0;

setTimeout(function(){

document.body.style.transition=".8s";

document.body.style.opacity=1;

},100);

};
```
```javascript
/* ==========================================================
   SCRIPT.JS - PART 2
   Cake • Wish • Roses
========================================================== */

/* -----------------------------
   Cake Page
------------------------------ */

const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

if (blowBtn) {

    blowBtn.addEventListener("click", function () {

        blowBtn.disabled = true;

        if (flame) {
            flame.style.display = "none";
        }

        if (smoke) {
            smoke.style.display = "block";
        }

        /* Confetti */

        for (let i = 0; i < 80; i++) {

            createCakeConfetti();

        }

        setTimeout(function () {

            openPage("wish.html");

        }, 2500);

    });

}

/* -----------------------------
Cake Confetti
------------------------------ */

function createCakeConfetti() {

    let confetti = document.createElement("div");

    confetti.style.position = "fixed";

    confetti.style.width = "10px";

    confetti.style.height = "10px";

    confetti.style.borderRadius = "50%";

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#4dabf7",
        "#8ce99a",
        "#ffffff"
    ];

    confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left =
        Math.random() * window.innerWidth + "px";

    confetti.style.top = "-20px";

    document.body.appendChild(confetti);

    let duration = 2000 + Math.random() * 2000;

    confetti.animate(
        [
            {
                transform: "translateY(0px) rotate(0deg)",
                opacity: 1
            },
            {
                transform:
                    `translateY(${window.innerHeight + 100}px) rotate(720deg)`,
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(function () {

        confetti.remove();

    }, duration);

}

/* -----------------------------
Wish Page Countdown
------------------------------ */

const countdown = document.getElementById("countdown");

if (countdown) {

    let number = 3;

    countdown.innerHTML = number;

    const timer = setInterval(function () {

        number--;

        if (number > 0) {

            countdown.innerHTML = number;

        } else {

            countdown.innerHTML = "❤️";

            clearInterval(timer);

            setTimeout(function () {

                openPage("roses.html");

            }, 1200);

        }

    }, 1000);

}

/* -----------------------------
Rose Petals
------------------------------ */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    petal.style.fontSize =
        (18 + Math.random() * 18) + "px";

    document.body.appendChild(petal);

    setTimeout(function () {

        petal.remove();

    }, 11000);

}

if (document.body.classList.contains("rose-page")) {

    setInterval(function () {

        createPetal();

    }, 700);

}

/* -----------------------------
Background Music
------------------------------ */

const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {

    document.addEventListener("click", function () {

        bgMusic.play().catch(function(){});

    }, { once: true });

}

/* -----------------------------
Continue Button
------------------------------ */

const continueBtn =
document.querySelector(".continue-btn");

if (continueBtn) {

    continueBtn.addEventListener("click", function () {

        openPage("memories.html");

    });

}
```

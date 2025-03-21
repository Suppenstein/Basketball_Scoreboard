homeScore = document.getElementById("homeScore");
guestScore = document.getElementById("guestScore");

let homeSum = 0;
let guestSum = 0;

function homeOne(){
    //console.log("button has been clicked");
    homeSum += 1;
    homeScore.textContent = homeSum;
}

function homeTwo(){
    homeSum += 2;
    homeScore.textContent = homeSum;
}

function homeThree(){
    homeSum += 3;
    homeScore.textContent = homeSum;
}


function guestOne(){
    guestSum += 1;
    guestScore.textContent = guestSum;
}

function guestTwo(){
    guestSum += 2;
    guestScore.textContent = guestSum;
}

function guestThree(){
    guestSum += 3;
    guestScore.textContent = guestSum;
}
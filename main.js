let typed = new Typed(".text", {
    strings:["Frontend Developer", "Photographer", "Web Desinger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 85){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML= counter + "%";
    }
}, 30);
// communcatioon

let numberTwo = document.getElementById("numberTwo");
let counterTwo = 0;
setInterval(() => {
    if(counterTwo == 60){
        clearInterval();
    }else{
        counterTwo += 1;
        numberTwo.innerHTML= counterTwo + "%";
    }
}, 30);

//Problem Solving
let numberThree = document.getElementById("numberThree");
let counterThree = 0;
setInterval(() => {
    if(counterThree == 90){
        clearInterval();
    }else{
        counterThree += 1;
        numberThree.innerHTML= counterThree + "%";
    }
}, 30);


//team work

let numberFour = document.getElementById("numberFour");
let counterFour = 0;
setInterval(() => {
    if(counterFour == 75){
        clearInterval();
    }else{
        counterFour += 1;
        numberFour.innerHTML= counterFour + "%";
    }
}, 30);
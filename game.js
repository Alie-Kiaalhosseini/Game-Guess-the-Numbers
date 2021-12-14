const game = document.querySelector(".game")
const play = document.querySelector(".play");
let scores = document.querySelector(".score");
const h4 = document.querySelector("h4");
let gamePlay = false;
let score = 0;3
play.addEventListener("click" , () =>{
    if(!gamePlay){
    h4.innerHTML = "good player";
    gamePlay = true;
    game.innerHTML = "";
   score = 0;
    let number = document.querySelector(".input1");
    number.style.display = "none";
    maker(number.value);
    play.innerHTML = " Check ";
    } else {
        const numbers = document.querySelectorAll(".numb");
        score++;
         h4.style.display = "none";
        scores.innerHTML = `${score} Guesses`;
        let winn = 0;
        for (let index = 0; index < numbers.length; index++) {
            if( numbers[index].correct == numbers[index].value){
                numbers[index].style.backgroundColor = "green";
                numbers[index].style.color = "#fff";
                winn++;
            } else {
                    let color = (numbers[index].correct>numbers[index].value) ? "blue" : "red";
                numbers[index].style.backgroundColor = color;
                numbers[index].style.color = "black";
                }
                if(winn == numbers.length){
                    scores.innerHTML += "   You Win!!"
                    play.innerHTML = " reset ";
                    gamePlay = false;
                }
        }
}
});

function maker(num){
    for(let i = 0 ; i<num ; i++){
        let el = document.createElement("input");
        el.setAttribute("type","number");
        console.log(el);
        el.max = 9;
        el.min = 1;
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.order = i;
        el.classList.add("numb");
        game.appendChild(el);
    }
    

}


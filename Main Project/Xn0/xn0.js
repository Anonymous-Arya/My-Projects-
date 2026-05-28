let box = document.querySelectorAll(".box"); // this is the array of the all boxes of game!
let rst = document.querySelector("#resetgame");
let result = document.querySelector(".pop-up");
let popup = document.querySelector(".hello");
let kp = document.querySelector(".kp");


let p1 = prompt("Enter the name of 1st Player!").toUpperCase();
let p2 = prompt("Enter the Name of 2nd Player!").toUpperCase();
let turn;
turn = p1;
alert("First turn is of " + turn);

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]; // the array of the entire winning sitiation

let winpannel = ()=>{
  popup.removeAttribute("style");
}

box.forEach((hey) => {
  // accessing all Boxes of array of Box one by one
  hey.addEventListener("click", () => {
    if ((turn = p1 && turn != p2)) {
      // the turn of both the players
      hey.innerHTML = "X";
      turn = p2;
    } else {
      hey.innerHTML = "O";
      turn = p1;
    }
    hey.disabled = true; //disabeling because the player should enter only one input at a time (no repeat)
    winnerpattern();
  });
});
let winnerpattern = () => {
  for (const element of win) {
    //accessing the 0th eldex element(array) of win array
    let a = box[element[0]].innerHTML;
    let b = box[element[1]].innerHTML;
    let c = box[element[2]].innerHTML;
    if (a != "" && b != "" && c != "") {
      if (a == b && b == c) {
        if (turn == p1) {
          turn = p2;
        } else {
          turn = p1;
        }
        winpannel();
       result.innerHTML = "Congretulation! "+turn + " is the Winner!!";
        for (let btn of box) {
          btn.disabled = true;
        }
      }
    }
  }
};
const resetgm = () => {
  for (let btn of box) {
    btn.disabled = false;
    btn.innerHTML = "";
  }
  result.innerHTML = "";
  if (turn == p1) {
    turn = p2;
  } else {
    turn = p1;
  }
  alert("The Turn is of "+turn);
};

rst.addEventListener("click", resetgm);
kp.addEventListener("click", ()=>{
  popup.setAttribute("style", "display:none;")
});
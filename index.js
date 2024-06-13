const firstBox = document.getElementById("first");
const secondBox = document.getElementById("second");
const thirdBox = document.getElementById("third");
const btn = document.getElementById("btn");

let dice1 = 0;
let dice2 = 0;
let dice3 = 0;

const rollDice = () => {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  dice3 = Math.floor(Math.random() * 6) + 1;
};

btn.addEventListener("click", () => {
  rollDice();
  firstBox.textContent = dice1;
  secondBox.textContent = dice2;
  thirdBox.textContent = dice3;

  const results = [
      { id: 'first', value: dice1 },
      { id: 'second', value: dice2 },
      { id: 'third', value: dice3 }
    ];
  
  determineWinner(results);
 
});


function determineWinner(results) {
  results.sort((a, b) => b.value - a.value);
  const winner = results[0];
  const second = results[1];
  const third = results[2];

  if (winner.value === second.value && second.value === third.value && third.value === winner.value) {
    results.forEach(result => {
      document.getElementById(result.id).style.backgroundColor = 'blue';
    });
  } else {
    document.getElementById(winner.id).style.backgroundColor = 'green';
    document.getElementById(second.id).style.backgroundColor = 'yellow';
    document.getElementById(third.id).style.backgroundColor = 'red';
  }
}
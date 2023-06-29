const heroes = ["Iron Man", "Superman", "Wonderwoman", "Nader"];

function exclaim(str) {
  return str + "!";
}
// undefined!("Iron Man")
// :)!("Iron Man")

// const exclaimedHeroes = heroes.map((str) => exclaim(str));
// const exclaimedHeroes = heroes.map(exclaim);
const exclaimedHeroes = heroes.map(exclaim(":)"));

console.log(exclaimedHeroes);

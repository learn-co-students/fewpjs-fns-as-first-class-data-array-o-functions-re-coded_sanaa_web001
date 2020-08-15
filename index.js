function wakeDog(a, b){
  return `Wake ${a} the ${b}`;
}
function leashDog(a, b) {
  return`Leash ${a} the ${b}`;
}
function walkToPark(a, b) {
  return `Walk to the park with ${a} the ${b}`;
}
function throwFrisbee(a, b) {
  return `Throw the frisbee for ${a} the ${b}`;
}
function walkHome(a, b) {
  return `Walk home with ${a} the ${b}`;
}
function unleashDog(a, b) {
  return `Unleash ${a} the ${b}`;
}

wakeDog("Xerox", "Border Collie");
leashDog("Boo Radley", "Pibble");
walkToPark("Bunny", "Labrador");
throwFrisbee("Mary J. Blige", "Papillon");
walkHome("Santa Paws", "Husky");
unleashDog("Lauren", "Golden Retriever");

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

function exerciseDog(dogName, dogBreed) {
  return routine.map(e => e(dogName, dogBreed));
}

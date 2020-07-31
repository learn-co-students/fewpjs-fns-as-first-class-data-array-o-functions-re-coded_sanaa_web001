// When this program runs, it should print out:
//
// ```
// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");



function wakeDog(dogName, dogBreed) {
 let string =`Wake ${dogName} the ${dogBreed}`;
 console.log(string);
 return string;

}

function leashDog(dogName, dogBreed) {
let string = `Leash ${dogName} the ${dogBreed}`;
console.log(string);
return string;
}

function walkToPark(dogName, dogBreed) {
let string = `Walk to the park with ${dogName} the ${dogBreed}`;
console.log(string);
return string;
}

function throwFrisbee(dogName, dogBreed) {
let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
console.log(string);
return string;
}
function walkHome(dogName, dogBreed) {
let string = `Walk home with ${dogName} the ${dogBreed}`;
console.log(string);
return string;
}
function unleashDog(dogName, dogBreed) {
let string = `Unleash ${dogName} the ${dogBreed}`;
console.log(string);
return string;
}

let routine = [wakeDog ,leashDog ,walkToPark ,throwFrisbee
,walkHome,unleashDog] ;

function exerciseDog (dogName , dogBreed){
  console.log(routine.length);
  let result= [];
  for(let i=0; i<routine.length; i++){
   let string= routine[i](dogName,dogBreed);
  result.push(string);
  }
  return result;
}
// console.log(exerciseDog('lucy','bundle'));
let result =exerciseDog('lucy','bundle');

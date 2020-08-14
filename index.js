function wakeDog(dogName, dogBreed){
  let a = `Wake ${dogName} the ${dogBreed}`;
  return a;
}
function leashDog(dogName, dogBreed){
  let b = `Leash ${dogName} the ${dogBreed}`;
  return b;
}
function walkToPark(dogName, dogBreed){
  let c = `Walk to the park with ${dogName} the ${dogBreed}`;
  return c;
}
function throwFrisbee(dogName, dogBreed){
  let d = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return d;
}
function walkHome(dogName, dogBreed){
  let e = `Walk home with ${dogName} the ${dogBreed}`;
  return e;
}
function unleashDog(dogName, dogBreed){
  let f = `Unleash ${dogName} the ${dogBreed}`;
  return f;
}



 var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
 
function exerciseDog(dogName, dogBreed){
 let res = [];
routine.forEach(function(ele){
let z = ele(dogName, dogBreed);
   res.push(z);});
  return res;
}

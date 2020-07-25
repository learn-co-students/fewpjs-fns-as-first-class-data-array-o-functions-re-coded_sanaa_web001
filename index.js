// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");
//create functions with the following names
// wakeDog
// leashDog
// walkToPark
// throwFrisbee
// walkHome
// unleashDog

// function wakeDog(dogName, dogBreed) {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     return `Wake ${dogName} the ${dogBreed}`;
//   }

// function leashDog(dogName, dogBreed) {
//     console.log(`Leash ${dogName} the ${dogBreed}`);
//     return `Leash ${dogName} the ${dogBreed}`;
//   }  

// function walkToPark(dogName, dogBreed) {
//     console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
//     return `Walk to the park with ${dogName} the ${dogBreed}`;
//   }
  
// function throwFrisbee(dogName, dogBreed) {
//     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     return `Throw the frisbee for ${dogName} the ${dogBreed}`;
//   }
  
// function walkHome(dogName, dogBreed) {
//     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     return `Throw the frisbee for ${dogName} the ${dogBreed}`;
//   }
  
// function unleashDog(dogName, dogBreed) {
//     console.log(`Unleash ${dogName} the ${dogBreed}`);
//   }

//   routine=[
// leashDog(),
// walkToPark(),
// throwFrisbee("Santa Paws","Husky"),
// walkHome("Santa Paws","Husky"),
// unleashDog()
//   ]

var wakeDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog,breed){
 var arrayO=new Array();
   routine.forEach(r => {
    arrayO.push(r(dog,breed));
  });
  return arrayO;
}

console.log(exerciseDog("Esther", "Dalmation"));
// let wakeDog = 
function wakeDog(dogName, dogBreed) {
    let message = `Wake ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
  }
// let leashDog = 
function leashDog(dogName, dogBreed) {
    let message = `Leash ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
  }
// let walkToPark = 
function walkToPark(dogName, dogBreed) {
    let message = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
  }
// let throwFrisbee = 
function throwFrisbee(dogName, dogBreed) {
    let message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
  }
// let walkHome = 
function walkHome(dogName, dogBreed) {
    let message = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
  }
// let unleashDog = 
function unleashDog(dogName, dogBreed) {
    let message = `Unleash ${dogName} the ${dogBreed}`
    console.log(message);
    return message;
  }
const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName, dogBreed){
    const dogArray = [];
    for(let i = 0; i < routine.length; i++){
        dogArray.push(routine[i](dogName,dogBreed));
    }
    return dogArray;
}

// exerciseDog('Byron','poodle');

  


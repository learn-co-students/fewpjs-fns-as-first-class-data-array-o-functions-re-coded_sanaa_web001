 let wakeDog  = (dogName , dogBreed) => {
      
     return `Wake ${dogName} the ${dogBreed}`
    }
    
    let leashDog  = (dogName , dogBreed) => {
      
     return `Leash ${dogName} the ${dogBreed}` ; 
     
    }
    
    let walkToPark = (dogName ,dogBreed ) => {
      
      return `Walk to the park with ${dogName} the ${dogBreed}` 
    }
    
   let  throwFrisbee =  (dogName ,dogBreed) => {
     
      return `Throw the frisbee for ${dogName} the ${dogBreed}` ;
    } 
    
    let  walkHome =  (dogName ,  dogBreed) => {
      
      return `Walk home with ${dogName} the ${dogBreed}`
    }
    
    
     let  unleashDog =  (dogName ,  dogBreed) => {
      
      return `Unleash ${dogName } the ${dogBreed}` ; 
    }
    
    
    
    const routine = [
      wakeDog ,
      leashDog,
      walkToPark,
     throwFrisbee,
      walkHome,
      unleashDog
      ] ;
      
      
      function exerciseDog(dog , breed ){
        return routine.map(e => e(dog , breed)) ;
        
      }
      exerciseDog('Byron' , 'poodle')
      
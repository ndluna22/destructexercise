//object desstructuring1

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//object desstructuring2

console.log(discoveryYears); // {yearsNeptuneDiscovered:1846, yearsMarsDiscovered: 1659}

//object desstructuring3

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // "Your name is Alejandro and you like purple"
getUserData({firstName: "Melissa"}) // "Your name is Melissa and you like green"
getUserData({}) // "Your name is first name and you like green"

//array desstructuring1

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//array desstructuring2

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // "Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"

//array desstructuring3

console.log(numbers) // [10,20,30]



//ES2015 Object Destructuring


const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  let a = obj.numbers.a;
  let b = obj.numbers.b;

//ES2015 One-Line Array Swap


[arr[0], arr[1]] = [arr[1], arr[0]]


//raceResults()

//raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

const raceResults = ({first,second,third,...rest}) => {
    return ({ first, second, third, ...rest });
};

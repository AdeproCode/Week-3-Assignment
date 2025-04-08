//Answer to question one
// create variables to store names, age and nationality and combined in sentence 

let myName = "Wale Adetokun";
let age = 27;
let myNationality = "Nigeria";

console.log(`I'm ${myName}, ${age} years of age and i am citizen of ${myNationality}`);


//Answer to question two
//a variable with my favorite quote and converted to both uppecase and lowercase

let favoriteQuote = "If i have seen further, it is by standing on the shoulders of giants";

favoriteQuote= favoriteQuote.toLocaleUpperCase();
console.log(favoriteQuote)

favoriteQuote= favoriteQuote.toLocaleLowerCase();
console.log(favoriteQuote)  


//Answer to question three
// Rearranged word in a reverse order in an array

let aWord = ["mesmerizing", "fruit", "Equal", 'Game']

aWord.reverse();
console.log(aWord)

//Answer to question four
//Prices of three items in different variables and their total to be displayed

let aBagOfRice = 95000;
let apackOfNoodles = 9500;
let aCrateOfEggs = 5500;

let totalSumOfItems = aBagOfRice + apackOfNoodles + aCrateOfEggs;
console.log(`The total amount of the items bought is #${totalSumOfItems}`);

//Answer to question five
// to show an average of five test score in variables

let studentScore1 = 78;
let studentScore2 = 68;
let studentScore3 = 98;
let studentScore4 = 85;
let studentScore5 = 50;

let averageScore = (studentScore1 + studentScore2 + studentScore3 + studentScore4 + studentScore5)/5;
console.log("The average score of the whole student is " + averageScore);


//Answer to question six
// Array of five favorite foods to be displayed

let favoriteFoods = ["Yam and Eggs", "Joloffrice", "pounded Yam and Egusi", "Bread and Tea", "Noodles"];
console.log('The first food is ' + favoriteFoods[0] + " and the second food is " + favoriteFoods[4]);




//Answer to question seven
// Two foods to be added to the Array of five favorite foods to be displayed

favoriteFoods.unshift("Poragbe");
favoriteFoods.push("Custard")
console.log("The new list has been updated. They are: " + favoriteFoods)


//Answer to question eight
// Students in Jss one

let jssOne = ["Chinedu Okafor", "Aisha Bello", "Tunde Adeyemi", "Ifeoma Nwankwo", "Sani Abdullahi",
    "Bisi Adebayo", "Ngozi Eze", "Musa Garba", "Yemi Alade", " Amarachi Obi",];


//Answer to question nine
// Students in Jss two

let jssTwo = ["Elijah Thomas", "Zainab Abdullahi", "Michael Chen", "Ifeanyi Uche", "Sarah Adams",
    "Ahmed Musa", "Linda Okon", "Henry George", "Bukola Salami", "Jason Lee"];


//Answer to question ten
// Students in Jss three

let jssThree = ["Amina Yusuf", "David Johnson", "Chinedu Okafor", "Grace Williams", "Tolu Adebayo",
    "Maria Gonzalez", "James Smith", "Ngozi Nwosu", "Liam Anderson", "Fatima Bello"];


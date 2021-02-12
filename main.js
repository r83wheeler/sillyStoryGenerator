//Three variables that store references to the "Enter custom name" txt field
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Takes an array, and returns one of the items stored inside the array at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//Strings that will act as input into our program
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertXarray = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertYarray = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZarray = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//Adds an event listener to the randomize variable, so when the button it represents is clicked, the (result) function is run.
randomize.addEventListener('click', result);

function result() {
  //Used to create a new random story each time the button is pressed and the function is run 
  let newStory = storyText; 
  
  //Call the function and get it to return one random string out of it's declared array
  let xItem = randomValueFromArray(insertXarray);
  let yItem = randomValueFromArray(insertYarray);
  let zItem = randomValueFromArray(insertZarray);
  
  //Replace the placeholders in newStory with the strings stored in (xItem,yItem, & zItem)
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

  
  if(customName.value !== '') {
    let name = customName.value;
    //String replacement method call to replace the string 'Bob' with the name variable
    newStory = newStory.replace('Bob', name);

  }
  //If the uk radio button is selected, convert the weight and temperature values
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' stones';
    let temperature =  Math.round(94-32/1.8) + ' centigrade';
  
    //String replacement lines that replace '94 fahrenheit' with the temperature variable, and '300 pounds' with the weight variable
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
  //Makes the textContent property of the story variable equal to newStory
  story.textContent = newStory;
  story.style.visibility = 'visible';
}


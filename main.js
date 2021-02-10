const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertXarray = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertYarray = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZarray = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', customName);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + 'stones';
    let temperature =  Math.round(94-32/1.8) + 'centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = story;
  story.style.visibility = 'visible';
}

let newStory = storyText; 

let xItem = randomValueFromArray(insertXarray);
let yItem = randomValueFromArray(insertYarray);
let zItem = randomValueFromArray(insertZarray);

newStory = newStory.replace(':insertx', xItem);
newStory = newStory.replace(':inserty', yItem);
newStory = newStory.replace('insertz', zItem);
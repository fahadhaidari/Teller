
const UPDATE_DELAY = 100;
var storyIndex = 0;
var storyWordIndex = 0;
var words = "";
var storyBoard = undefined;

window.onload = function () {
  console.log("Teller is loaded");
  storyBoard = Utility.getDOM("storyBoard");
  Story.createStories();
  timer = setInterval(update, UPDATE_DELAY);
}

function update () {
  if(!Story.areStoriesEnded(storyIndex)) {
    updateUI();
    storyWordIndex ++;
    if(Story.isStoryEnded(storyIndex, storyWordIndex)) {
      storyIndex ++;
      storyWordIndex = 0;
    }
  } else {
    // clearInterval(timer);
  }
}

function updateUI () {
  words += Story.getCurrentWordFromStory(storyIndex, storyWordIndex);
  // storyBoard.innerHTML += Story.stories[storyIndex][storyWordIndex]; // this is deffintely faster
  // because it does access the data directly without calling a function
  Utility.HTML(storyBoard, words);
}

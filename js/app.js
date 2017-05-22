const UPDATE_DELAY = 100;
var storyIndex = 0;
var storyWordIndex = 0;
var words = "";
var storyBoard = undefined;
var pageIndexDom = undefined;

window.onload = function() {
  console.log("Teller is loaded");
  storyBoard = Utility.getDOM("storyBoard");
  pageIndexDom = Utility.getDOM("pageIndex");
  $(storyBoard).fadeOut("fast").fadeIn("fast");
  Story.createStories(); // adding each story to the main story-list
  timer = setInterval(update, UPDATE_DELAY);
}

function update() {
  if (!Story.isStoryEnded(storyIndex, storyWordIndex)) {
    updateUI();
    storyWordIndex++;
  }

}

function updateUI() {
  words += Story.getCurrentWordFromStory(storyIndex, storyWordIndex);
  // storyBoard.innerHTML += Story.stories[storyIndex][storyWordIndex]; // this is deffintely faster
  // because it does access the data directly without calling a function
  Utility.HTML(storyBoard, words);
  Utility.HTML(pageIndexDom, storyIndex + 1 + ":" + Story.getNumberOfStories());
}

// remove everything from the storyBoard
function clearUI() {
  words = "";
}

function addNewStory() {

  storyWordIndex = 0;
  if (!Story.areStoriesEnded(storyIndex + 1)) {
    storyIndex++;
  } else {
    storyIndex = 0;
  }
  // or you can use the below code, but '%' needs extra performance
  // storyIndex = (storyIndex + 1) % (Story.getNumberOfStories());
}

$(document).click(function() {
  clearUI();
  $(storyBoard).fadeOut("fast").fadeIn("slow");
  addNewStory();
});

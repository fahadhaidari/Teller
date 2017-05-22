const Story = {

  story1  : "Hi there, this is the first story I want to talk about...",
  story2  : "Hi there, this is the second story I want to talk about...",
  story3  : "Hi there, this is the third story I want to talk about...",
  stories : [],

  createStories : function () {
    this.stories = [this.story1, this.story2, this.story3];
  },

  getCurrentWordFromStory : function (_storyIndex, _wordIndex) {
    return this.stories[_storyIndex][_wordIndex];
  },

  isStoryEnded : function (_storyIndex, _wordIndex) {
    return _wordIndex >= this.stories[_storyIndex].length;
  },

  areStoriesEnded : function (_storyIndex) {
    return _storyIndex >= this.stories.length;
  },

  getNumberOfStories : function () {
    return this.stories.length;
  }

}

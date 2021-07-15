/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {  
  this.history = [homepage];
  this.currentIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  //clear all the forward history by using length
  this.history.length = this.currentIndex + 1;
  this.history.push(url);
  this.currentIndex += 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {

  const newIndex = Math.max(0, this.currentIndex - steps);
  this.currentIndex = newIndex;
  return this.history[newIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {

  const newIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
  this.currentIndex = newIndex;
  return this.history[newIndex];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
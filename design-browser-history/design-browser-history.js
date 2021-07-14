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
  this.currentIndex+= 1;
  this.history = this.history.slice(0, this.currentIndex);
  this.history.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  let newI = Math.max(this.currentIndex - steps, 0)
    // console.log(this.currentIndex)
  this.currentIndex = newI;
  return this.history[newI];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  let newI = Math.min(this.currentIndex + steps, this.history.length - 1);
  this.currentIndex = newI;
  return this.history[newI];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
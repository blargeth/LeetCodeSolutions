/**
 * initialize your data structure here.
 */
var MinStack = function() {
  // data is a couplet of value and min value: [num, min value tracker]
  this.data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

  if (this.data.length === 0) { 
    this.data.push([x,x]);
    return;
  } else {
    this.data.push([x, Math.min(this.data[this.data.length - 1][1], x)]);
  }
  // console.log(this.data)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.data[this.data.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
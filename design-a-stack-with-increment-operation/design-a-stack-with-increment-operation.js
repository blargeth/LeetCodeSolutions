/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
  this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  this.size += 1;
  if (this.size === this.maxSize + 1) {
    this.size -= 1;
    return;
  } else {
    this.stack.push(x);
    // console.log(this.stack, 'stack')
  }
  
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  this.size -= 1;
  if (this.size < 0) {
    this.size = 0;
    return -1;
  } else {
    return this.stack.pop();
  }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  if (k > this.size) k = this.size;
  for (let i = 0; i < k; i++) {
    this.stack[i] += val;
  }
  // console.log(this.stack, 'stack')
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
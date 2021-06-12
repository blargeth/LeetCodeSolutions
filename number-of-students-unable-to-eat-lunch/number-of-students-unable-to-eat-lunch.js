/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
  let counter = 0;
  
  for (let i = 0; i < students.length; i++) {
    if (students[i] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      i = -1;
      counter = 0;
      // console.log('equals', students, sandwiches)
    } else {
      students.push(students[i]);
      students.shift();
      i = -1;
      counter++;
      // console.log('not equals', students, sandwiches)
      if (counter > students.length) {
        return students.length;
      }
    }
  }
  return students.length;
};
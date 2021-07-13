/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    
  // sort the products alphabetically
  // iterate thru each product
  // check if searchword[i] === products[i] --> use filter to create new arrays
  // get the top 3 words that match (since theyre sorted, theyll be in lexical order)
  
  let result = [];
  products.sort();
  
  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter( item => item[i] === searchWord[i])
    console.log(products)
    result.push(products.slice(0, (products > 3) ? products.length : 3))
  }
  
  return result;
  

  //////////////////////////////
  
  
    //wow, this solution is great. and easy to follow. 
    // let res = [];
    // products = products.sort();
    // for (let i = 0; i < searchWord.length; i++) { // for each letter in the search term
    //     products = products.filter(p => p[i] === searchWord[i]); // filter out the words that don't have the same letter
    //   console.log(products, 'products')
    //     res.push(products.slice(0, (products.length < 3) ? products.length : 3)); // and push the top 3 (or fewer if there are fewer) into the suggestions
    // }
    // return res;
};
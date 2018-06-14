var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1]
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === num) {
        // console.log(i);
        return i;
      }
    }
    return -1; 
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, num) {
    for (var i=arr.length-1; i>=0; i--) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1;

  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArr = [];
    for (var i=0; i<arr.length-1; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    return arr.filter(Boolean);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, num1, num2) {
    return arr.slice(num1, num2);
  },

  // returns a slice of array with n elements dropped from the beginning
  drop: function(arr, n){
    if (typeof n == "number") {
      for (var i=0; i<n; i++) {
        // newArr.push(arr[i]);
        arr.shift();
      }
      console.log(arr, n);
      console.log(typeof n);
      return arr;
    }
    arr.shift();
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};

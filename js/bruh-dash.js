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
      // console.log(arr, n);
      // console.log(typeof n);
      return arr;
    }
    arr.shift();
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (typeof n == "number") {
      for (var i=0; i<n; i++) {
        arr.pop();
      }
      return arr;
    }
    arr.pop();
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    // console.log(arr)
    // console.log(n);
    var newArr = [];
    if (typeof n == "number") {
      for (var i=0; i<n; i++) {
        if (n > arr.length) {
          return arr;
        } else {
          newArr.push(arr[i])
        }
      }
    return newArr;
    }
    return arr.slice(0,1);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    // console.log(arr);
    // console.log(n);
    var newArr = [];
    if (typeof n == "number") {
      if (n == 0) {
        return newArr;
      } else if (n > arr.length) {
        return arr;
      } else {
        for (var i=arr.length-1; i>=n-1; i--) {
          // console.log(arr[i]);
          newArr.unshift(arr[i]);
        }
        return newArr;
      }
    }
    newArr.push(arr[arr.length-1]);
    return newArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function hello(arr, num, start, end) {
      // if one of the numbers are not there,
      if(start === undefined || end === undefined){
        var origLength = arr.length;
      // let origLength = original length of arr and delete the characters in arr
      // and replace with one num
        arr.splice(0, arr.length, num);
      //fill the rest of orig length with num
        for (var i=0;i<origLength-1;i++){
          arr.splice(0, 0, num)
        }
        return arr;
      }else{
        arr.splice(start, end-1, num);
        for (var i=0;i<end-start-1;i++){
          arr.splice(start, 0, num)
        }
        return arr;
    }
  },

  // removes all given values from an array
  pull: function (arr, val1, val2) {
    // console.log(arr);
    // console.log(val1);
    // console.log(val2);
    var newArr = []
    for (var i=0; i<arr.length; i++) {
      if (arr[i] != val1 && arr[i] != val2) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr1, arr2) {
    // console.log(arr1, arr2);
    var newArr = []
    for (var i=0; i<arr1.length; i++) {
      for (var j=0; j<arr2.length; j++) {
        // console.log(arr2[j]);
        if (arr2[j] == i) {
          newArr.push(arr1[i])
        }
      }
    }
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function(arr, a, b) {
    // console.log(arr,a,b);
    var newArr = []
    for (var i=0; i<arr.length; i++) {
      if (arr[i] != a && arr[i] != b) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    // 
    var newArr = arr1.filter(num => !arr2.includes(num));
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    // console.log(arr1, arr2);
    var newArr = [];
    var innerArr = [];
    for (var i=0; i<arr1.length; i++) {
      innerArr.push(arr1[i]);
      innerArr.push(arr2[i]);
      newArr.push(innerArr);
      innerArr = [];
    }
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    // console.log(arr);
    //cry
    // var newArr = [];
    // var innerArr1 = [];
    // var innerArr2 = [];
    // for (var i=0; i<arr.length; i++) {
    //   innerArr1.push(arr[i][0]);
    //   innerArr2.push(arr[i][1]);
    // }
    // newArr.push(innerArr1);
    // newArr.push(innerArr2);
    // return newArr;
    // // console.log(newArr);
    // // works on only this test instance
    // OR
    var originalArr = [];
    var resultArr = [];
    for(var i=0;i<arr.length;i++){
      originalArr.push(arr[i]);
    }
    while((originalArr[0].length)>0){
      var testArr = [];
      //console.log(originalArr);
      for(var i=0;i<originalArr.length;i++){
        var toPush = originalArr[i].shift();
        //console.log(toPush);
        testArr.push(toPush);
        //console.log(testArr);
      }
      resultArr.push(testArr);
    }
    //console.log(originalArr.length);
    return resultArr;
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

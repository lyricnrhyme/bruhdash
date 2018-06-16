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
    // var newArr = [];
    // for (var i=0; i<arr.length-1; i++) {
    //   newArr.push(arr[i]);
    // }
    // return newArr;
    // OR (NO ARRAY METHOD)
    var newArr = [];
    for (var i=0; i<arr.length-1; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    // return arr.filter(Boolean);
    // OR (NO ARRAY METHOD)
    var newArr = [];
    // console.log(arr); //confirms what's in the array
    for (var i=0; i<arr.length; i++) {
      if ((arr[i])) {
        // console.log(arr[i]); //checks for truthys
        if (newArr.length === 0) {
          newArr[0] = arr[i]
        } else {
          newArr[newArr.length] = arr[i];
        }
      }
    }
    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, num1, num2) {
    // return arr.slice(num1, num2);
    // OR (NO ARRAY METHOD)
    console.log (arr, num1, num2) //confirms parameters
    newArr = [];
    for (var i=num1; i<arr[num2-1]; i++) {
      if (newArr.length === 0) {
        newArr[0] = arr[i];
      } else {
        newArr[newArr.length] = arr[i];
      }
    }
    return newArr
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
  chunk: function(arr, num){
    // console.log(arr, num);
    var newArr = [];
    var innerArr = [];
    if (arr.length > num) {
      if (num > 0) {
        for (var i=0; i<arr.length; i++) {
          if (typeof arr[i] == "number") {
            for (var j=0; j<num; j++) {
              innerArr = arr.splice(0,num);
              newArr.push(innerArr);
              innerArr = [];
            }
          }
        }
        if (arr.length%2 == 1) {
          innerArr.push(arr[arr.length-1]);
          newArr.push(innerArr);
        }
        // console.log(newArr);
        return newArr;
      } else {
        return newArr;
      }
    } else if (arr.length == num) {
      newArr.push(arr);
      return newArr;
    } else if (arr.length < num && arr.length != 0) {
      newArr.push(arr);
      return newArr;
    } else {
      return arr;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(arrObj, funk) {
    // console.log(arr, funk);
    if (Array.isArray(arrObj) === true) {
      for (var i=0; i<arrObj.length; i++) {
        var result = funk(arrObj[i],1);
      }
      return result;
    } else {
      for (var i in arrObj) {
        var result = funk(arrObj[i],1);
      }
    } 
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(arrObj, funk) {
    // console.log(arr, funk);
    if (Array.isArray(arrObj) === true) {
      resultArr = [];
      for (var i=0; i<arrObj.length; i++) {
        var result = funk(arrObj[i],1);
        resultArr.push(result);
      }
      return resultArr;
    } else {
      resultArr = [];
      for (var i in arrObj) {
        var result = funk(arrObj[i],1);
        resultArr.push(result);
      }
      return resultArr;
    } 
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(arrObj,funk) {
    // console.log(arrObj,funk);
    if (Array.isArray(arrObj) === true) {
      resultArr = [];
      for (var i=0; i<arrObj.length; i++) {
        if (funk(arrObj[i]) == true) {
          var result = arrObj[i];
          resultArr.push(result);
        }
      }
      return resultArr;
    } else {
      resultArr = [];
      for (var i in arrObj) {
        if (funk(arrObj[i]) == true) {
          var result = arrObj[i];
          resultArr.push(result);
        }
      }
      return resultArr;
    } 
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(arrObj, funk) {
    // console.log(arrObj, funk);
    if (Array.isArray(arrObj) === true) {
      var sum = 0;
      for (var i=0; i<arrObj.length; i++) {
        sum += arrObj[i];
        var result = funk(sum,0);
      }
      return result;
    } else {
      var sum = 0;
      for (var i in arrObj) {
        sum += arrObj[i]
        var result = funk(sum,0);
      }
      return result;
    } 
  }
};

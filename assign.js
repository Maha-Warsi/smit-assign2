
// Question no:1
function addNumClosure(num) {
    return function(numToAdd) {
      return num + numToAdd;
    }
  }
  
let addFive = addNumClosure(5);
console.log(addFive(10)); 
console.log(addFive(20)); 

// Question no:2
function search(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === value) {
      return true;
    } else {
      return search(arr.slice(1), value);
    }
  }
  let myArray = [1, 2, 3, 4, 5, 6];
console.log(search(myArray, 3));
console.log(search(myArray, 8)); 


// Question no:3
function addPara(text) {
    let newPara = document.createElement('p');
    newPara.textContent = text; 
    let body = document.querySelector('body')
    body.appendChild(newPara);
  }

  // Question no:4
  function addListItem(text) {
    let newListItem = document.createElement('li');
    newListItem.textContent = text; 
    let unorderedList = document.querySelector('ul'); 
    unorderedList.appendChild(newListItem); 
  }

    // Question no:5
   
    function changeBackgroundColor(element, clr) {
        element.style.backgroundColor = clr; 
      }
      console.log(changeBackgroundColor);
  // Question no:6
  function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  let myObj = { name: "Maha", age: 22 };
  saveToLocalStorage("myObj", myObj);
  const storedObj = JSON.parse(localStorage.getItem("myObj"));
  console.log(storedObj); 

// Question no:7
function retrieveFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
}


// Question no:8
          
function saveToLocalStorage(obj) {
   Object.keys(obj).forEach(key => {
    const value = obj[key];
    localStorage.setItem(key, JSON.stringify(value));
  });
  const newObj = {};
  Object.keys(obj).forEach(key => {
    const item = localStorage.getItem(key);
    if (item) {
      newObj[key] = JSON.parse(item);
    }
  });
  return newObj;
}
      

  

  
  
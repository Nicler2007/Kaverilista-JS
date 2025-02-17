



//  let liElements = document.getElementsByClassName('list-item');

//  for(let i=0; i < liElements.length; i++){
//    liElements[i].style.cssText = 'background-color: yellow; padding: 5px'
// }

//  let liElements2 = document.getElementsByTagName('li');

//  for (let i=0; i < liElements2.length; i++){
//     liElements2[i].style.fontFamily = 'Arial';
//     iElements2[i].style.fontWeight = 'bold';
// }

//   let odd = document.querySelectorAll('li:nth-child(odd)')
//   let even = document.querySelectorAll('li:nth-child(even)')

//   for (let i=0; i<odd.length; i++){
//      odd[i].style.backgroundColor = "#f4f4f4";  
// }

//   for (let i=0; i<even.length; i++){
//       even[i].style.backgroundColor = "#cccccc";
// }

let itemList = document.querySelector('#main ul');
console.log(itemList);

// Parent

// parentnode
itemList.parentNode.style.backgroundColor = "#f4f4f4";

// parentElement
itemList.parentElement.style.backgroundColor = "yellow";


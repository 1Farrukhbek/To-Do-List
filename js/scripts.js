var shopList = [];

var elItemForm = document.querySelector('.item__form');
var elItemInput = elItemForm.querySelector('.item__input');
var elShoppingList = document.querySelector('.shopping__list');
var elSwich = document.querySelector('.swith__custom');

// FIRST WAY

// elItemForm.addEventListener('submit', function (evt) {
//   evt.preventDefault();
  
//   var inputResult = elItemInput.value.trim();
  
//   if (elSwich.checked) {
//     shopList.unshift(inputResult);
//   } else {
//     shopList.push(inputResult);
//   };
  
//   elShoppingList.innerHTML = '';
  
//   for (task of shopList) {
//     var newLi = document.createElement('li');
//     elShoppingList.appendChild(newLi);
//     newLi.classList.add('list-group-item', 'text-capitalize');
//     newLi.textContent = task;
//   };
  
//   console.log(shopList);
  
//   elItemInput.value = '';
// });

elItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var inputResult = elItemInput.value.trim();
  
  var newLi = document.createElement('li');
  newLi.classList.add('list-group-item', 'text-capitalize', 'text-white', 'h4', 'm-0');
  newLi.textContent = inputResult;

  if (elSwich.checked) {
    shopList.unshift(inputResult);
    elShoppingList.prepend(newLi);
    newLi.classList.add('bg-warning');
    
  } else {
    shopList.push(inputResult);
    elShoppingList.appendChild(newLi);
    newLi.classList.add('bg-primary');
  }
  
  console.log(shopList);
  
  elItemInput.value = '';
});


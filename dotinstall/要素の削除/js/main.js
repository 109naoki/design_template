'use strict';

{
 document.querySelector('button').addEventListener('click',() => {
  const item1 = document.querySelectorAll('li')[1];

  // removeは古いブラウザでは使えない
  // item1.remove();

  // 親Node.removeChild(削除するNode)
  document.querySelector('ul').removeChild(item1);


 })
}

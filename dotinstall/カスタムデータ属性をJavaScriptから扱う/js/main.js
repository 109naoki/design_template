'use strict';
// querySelectorAll()を使って複数の要素を取得する方法について見ていきます。
{
 document.querySelector('button').addEventListener('click',() => {
  const targetNode = document.getElementById('target');

  targetNode.textContent = targetNode.dataset.translation;
 })
}

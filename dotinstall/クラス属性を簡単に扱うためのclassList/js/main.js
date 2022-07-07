'use strict';
// querySelectorAll()を使って複数の要素を取得する方法について見ていきます。
{
 document.querySelector('button').addEventListener('click',() => {
  const targetNode = document.getElementById('target')

  // 既存のクラスに追加をする
  // targetNode.classList.add('my-color');

  // 条件分岐
    // if(targetNode.classList.contains('my-color') === true){
    //   targetNode.classList.remove('my-color');
    // }else{
    //   targetNode.classList.add('my-color');
    // };

    // 省略記法
    targetNode.classList.toggle('my-color');
 })
}

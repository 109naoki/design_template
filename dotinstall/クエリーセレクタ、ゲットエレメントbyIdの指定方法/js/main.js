'use strict';
// クエリーセレクタ、ゲットエレメントbyIdの指定方法
{
  function update(){
     document.getElementById('target').textContent = "Changed";
    //  document.querySelector('#target').textContent = "Changed";
    //  document.querySelector('h1').textContent = "Changed";
  }
    setTimeout(update,1000);
}

'use strict';
// querySelectorAll()を使って複数の要素を取得する方法について見ていきます。
{
  function update(){
    // document.querySelector('p').textContent = 'Changed';
        // document.querySelectorAll('p')[1].textContent = 'Changed';
                document.querySelectorAll('p').forEach((p,index) => {
                  p.textContent = `${index}番目のpです！`;
                })
  }
  setTimeout(update,1000);
}

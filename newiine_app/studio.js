// DOMの読み込み完了後に実行
window.addEventListener('DOMContentLoaded', () => {
 const params = new URLSearchParams(window.location.search);
 const iineName = params.get('data-iinename');

 if (iineName) {
   const button = document.querySelector('.newiine_btn');
   if (button) {
     button.setAttribute('data-iinename', iineName);
   } else {
     console.error('buttonが見つかりませんでした。');
   }
 }
});

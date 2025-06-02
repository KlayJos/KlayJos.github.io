// index.html

//location.reload();  //刷新頁面

//菜單欄高度適配:
window.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
});


window.addEventListener('DOMContentLoaded', () => { //加載監聽
  const bleeding_true = document.querySelector('.bleeding_true');  //大出血_是 按鈕被點擊
  if (bleeding_true){
    bleeding_true.addEventListener('click', function(e) {
      window.alert("請立即使用止血帶或加壓止血!\n如果情況嚴重或無法止血, 請嘗試止血並同時送醫!");
    }, false);
  }else{
    console.error('元素 not found');
  }

  const bleeding_false = document.querySelector('.bleeding_false');  //大出血_否 按鈕被點擊
  if (bleeding_false){
    bleeding_false.addEventListener('click', function(e) {
      window.alert("請繼續評估傷患: 意識、呼吸、脈搏。");
    }, false);
  }else{
    console.error('元素 not found');
  }


});
// index.html

//location.reload();  //刷新頁面
window.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
});
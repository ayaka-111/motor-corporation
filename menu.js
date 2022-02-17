//ハンバーガーメニュー
function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-menu');
    var blackBg = document.getElementById('js-white-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();
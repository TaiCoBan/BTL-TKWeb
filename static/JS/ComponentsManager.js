function loadComponent(id, htmlContent) {
  document.getElementById(id).innerHTML = htmlContent;
}

const headerHTML = `
  <header class="header-style">
    <h1>Welcome to My Website</h1>
    <nav>
      <a href="#">Home</a> | 
      <a href="#">About</a> | 
      <a href="#">Contact</a>
    </nav>
  </header>
`;

const footerHTML = `
  <footer class="footer-style">
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
`;

const sideBarAP = `
  <div class="side-bar-ap">
    <img src="../static/image/logo/user.png">
    <a href="#">Đơn hàng</a>
    <a href="#">Thống kê</a>
    <a href="#">Thông báo</a>
    <a href="#">Cài đặt</a>
    <a href="#">Thoát</a>
  </div>
`;
const backToTop =`
    <div class="backtotop">
        <img src="../static/image/right-arrow.png" alt="icon_arrow">
    </div>
`;
const userButton =`
    <div class="buttonUser">
        <div class="account">
            <img src="../static/image/user.png" alt="iconUser">
            <span>Tài Khoản</span>
            <div class="dropdown">
                <a href="./log-in-page.html" class="btn">Đăng nhập</a>
                <a href="./sign-up-page.html" class="btn">Đăng ký</a>
                <a href="#" class="btn">Setting</a>
            </div>
        </div>
    </div>
`;
loadComponent('user-button', userButton);
loadComponent('back-to-top',backToTop);
loadComponent('header', headerHTML);
loadComponent('footer', footerHTML);

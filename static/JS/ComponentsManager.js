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

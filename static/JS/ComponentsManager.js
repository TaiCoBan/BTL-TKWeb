// Hàm tạo phần tử HTML chung
function loadComponent(id, htmlContent) {
    document.getElementById(id).innerHTML = htmlContent;
  }

  // Tái sử dụng header và footer
  const headerHTML = `
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="#">Home</a> | 
        <a href="#">About</a> | 
        <a href="#">Contact</a>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  `;

  // Chèn HTML vào các phần tử
  loadComponent('header', headerHTML);
  loadComponent('footer', footerHTML);
function loadComponent(id, htmlContent) {
  document.getElementById(id).innerHTML = htmlContent;
}

const headerHTML = `
  <header class="header">
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

loadComponent('header', headerHTML);
loadComponent('footer', footerHTML);

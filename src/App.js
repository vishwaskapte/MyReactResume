import Left from "./Components/Left";

function App() {
  return (
    <div className="App">
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="d-none d-lg-block">GITHUB RESUME</span>
          </a>
        </div>
        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle " href="#">
                <i class="bi bi-search"></i>
              </a>
            </li>
            <li class="nav-item dropdown pe-3">
              <a class="nav-link nav-profile d-flex align-items-center pe-0">
                <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" />
                <span class="d-none d-md-block dropdown-toggle ps-2">Vishwas Kapte</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main" class="main">
          <Left />
      </main>
      <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

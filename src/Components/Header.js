import React from 'react'

export default function Header() {
  return (
      <>
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
                          <img src="./assets/img/0001.jpg" alt="Profile" class="rounded-circle" />
                          <span class="d-none d-md-block dropdown-toggle ps-2">Vishwas Kapte</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </>
  )
}

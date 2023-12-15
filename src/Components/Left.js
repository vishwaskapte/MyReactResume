import React from 'react'

export default function Left() {
  return (
      <>
          <div class="col-xl-4">
              <div class="card">
                  <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

                      <img src="./assets/img/0001.jpg" alt="Profile" class="rounded-circle" />
                      <h2>Vishwas Kapte</h2>
                      <h3>Full Stack Developer</h3>
                      <div class="social-links mt-2">
                          <a href="https://github.com/vishwaskapte" class="twitter"><i class="bi bi-github"></i></a>
                          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                          <a href="https://www.linkedin.com/in/vishwas-kapte-47535621/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

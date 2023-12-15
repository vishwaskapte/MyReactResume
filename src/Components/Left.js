import React from 'react'

export default function Left() {
  return (
      <div>
          <div class="pagetitle">
              <h1>Profile</h1>
              <nav>
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item">Home</li>
                      <li class="breadcrumb-item">Users</li>
                      <li class="breadcrumb-item">Profile</li>
                  </ol>
              </nav>
          </div>
          <section class="section profile">
              <div class="row">
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

                  {/* comment here */}

                  <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
             
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 class="card-title">About</h5>
                  <p class="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                  <h5 class="card-title">Profile Details</h5>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Full Name</div>
                    <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Company</div>
                    <div class="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Job</div>
                    <div class="col-lg-9 col-md-8">Web Designer</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Country</div>
                    <div class="col-lg-9 col-md-8">USA</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Address</div>
                    <div class="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Phone</div>
                    <div class="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">k.anderson@example.com</div>
                  </div>

                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                </div>

                <div class="tab-pane fade pt-3" id="profile-settings">

                </div>

                <div class="tab-pane fade pt-3" id="profile-change-password">
                 

				</div>

            </div>
          </div>
        	</div>
</div>
              </div>
          </section>
      </div>
  )
}

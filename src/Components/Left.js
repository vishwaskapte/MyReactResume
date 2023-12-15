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
                                      <h5 class="card-title">Summary</h5>
                                      <p class="small fst-italic">
                                        I am looking for an opportunity to join an organization where I can use my skills and knowledge to contribute as a team member towards the company's growth. I am seeking challenging assignments in the Information Technology industry with a reputable organization that matches my analytical and technical abilities and provides opportunities for personal and professional growth.
                                      </p>
                                      <p class="small fst-italic">
                                        Currently working as a Consultant in ATOS-SYNTEL with 12+ years of experience in technical analysis, application and product development and maintenance.Good working knowledge on Application development life cycle. Good Knowledge and experience in <b> OOP concepts,SOLID, Design Pattern, TDDGood Knowledge and experience in ReactJs, NodeJs, C#.Net, ASP. NET,ADO.NET, LINQ, MVC, NET CORE, SQL, SQL Server,JavaScript, jQuery, CSS, and HTML.Other technical stack includes Web Service and Web API.</b> Experience developing within an Agile development. Excellent trouble shooting techniques.  Good at interpreting the functional – technical relationship & charting the requirements.An upbeat individual with a logical approach to challenges, performing effectively within a highly pressurized working environment. 
                                      </p>

                                      <h5 class="card-title">Profile Details</h5>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                          <div class="col-lg-9 col-md-8">Vishwas Kapte</div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label">Company</div>
                                          <div class="col-lg-9 col-md-8">Eviden (Atos-Syntel)</div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label">Job</div>
                                          <div class="col-lg-9 col-md-8">Consultant (Full Stack Developer / Team Lead)</div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label">Country</div>
                                          <div class="col-lg-9 col-md-8">India</div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label">Address</div>
                                          <div class="col-lg-9 col-md-8">Pune, India</div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label">Phone</div>
                                          <div class="col-lg-9 col-md-8">(+91) 956-1533-97</div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-3 col-md-4 label">Email</div>
                                          <div class="col-lg-9 col-md-8">vishwaskapte@gmail.com</div>
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

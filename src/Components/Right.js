import React from 'react'
import MenuLink from './MenuLink'

export default function Right() {
  return (
    <div class="col-xl-8">

    <div class="card">
        <div class="card-body pt-3">
            <ul class="nav nav-tabs nav-tabs-bordered">
                <MenuLink />
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
                      Edit
                </div>

                <div class="tab-pane fade pt-3" id="profile-settings">
                      Setting
                </div>

                <div class="tab-pane fade pt-3" id="profile-change-password">
                      Change Password

                </div>

            </div>
        </div>
    </div>
</div>
  )
}

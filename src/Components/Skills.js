import React from 'react'
import ChildSkills from './ChildSkills'

export default function Skills() {
  return (
    <div class="tab-pane fade profile-edit pt-3" id="profile-skills">
      <section class="section">
        <div class="row">
          <div class="col-lg-4">
            <ChildSkills skillsName='ReactJs / NodeJs' skillsWidth='78%' />
            <ChildSkills skillsName='MicroServices' skillsWidth='50%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='C# language' skillsWidth='88%' />
            <ChildSkills skillsName='ASP.Net Core MVC / ASP.Net MVC / ASP.Net Web Forms' skillsWidth='78%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='Web API / WCF' skillsWidth='75%' />
            <ChildSkills skillsName='HTML / CSS' skillsWidth='65%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='SQL Server' skillsWidth='87%' />
            <ChildSkills skillsName='GIT / GitHub' skillsWidth='85%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='TeamCity / Octopus Deployment' skillsWidth='70%' />
            <ChildSkills skillsName='Jquery' skillsWidth='69%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='Unit Testing' skillsWidth='70%' />
            <ChildSkills skillsName='Azure DevOps' skillsWidth='82%' />
          </div>
        </div>
      </section>
    </div >
  )
}

import React from 'react'
import ChildSkills from './ChildSkills'

export default function Skills() {
  return (
    <div class="tab-pane fade profile-edit pt-3" id="profile-skills">
      <section class="section">
        <div class="row">
          <div class="col-lg-4">
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
          </div>
          <div class="col-lg-4">
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
            <ChildSkills skillsName='NodeJs' skillsWidth='65%' />
          </div>
        </div>
      </section>
    </div >
  )
}

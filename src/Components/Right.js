import React from 'react'
import MenuLink from './MenuLink'
import ProfileOverview from './ProfileOverview'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Strength from './Strength'
import Awards from './Awards'

export default function Right() {
  return (
    <div class="col-xl-8">

    <div class="card">
        <div class="card-body pt-3">
            <ul class="nav nav-tabs nav-tabs-bordered">
                <MenuLink />
            </ul>
            <div class="tab-content pt-2">
                <ProfileOverview />
                <Skills />
                <Strength />
                <Awards />
                <Education />
                <Experience />
            </div>
        </div>
    </div>
</div>
  )
}

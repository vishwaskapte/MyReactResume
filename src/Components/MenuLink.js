import React from 'react'

export default function MenuLink() {
  return (
       <>
          <li class="nav-item">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
          </li>

          <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-skills">Skills</button>
          </li>
          <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-strength">Strengths</button>
          </li>
          <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-awards">Awards</button>
          </li>

          <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-education">Education</button>
          </li>

          <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-experience">Experience</button>
          </li>
       </>
  )
}

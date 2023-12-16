import React from 'react'

export default function ChildSkills(props) {
  return (
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">{props.skillsName}</h5>
              <div class="progress mt-6">
                  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" 
                       style={{ width: props.skillsWidth}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.skillsWidth}</div>
              </div>
          </div>
      </div>
  )
}

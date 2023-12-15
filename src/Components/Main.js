import React from 'react'
import Left from './Left'
import Right from './Right'

export default function Main() {
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
                <Left />
                <Right />
            </div>
          </section>
    </div>
  )
}


import React from 'react'
import './userDetails.scss'
// import userImg from ''

const userDetails = () => {
  return (
    <section className="userinfo-wrapper">
      {/* <img src="" alt="user avatar" /> */}
      <i className="fas fa-user-tie"></i>
      <span className="name">Devinder Kumar</span>
      <span className="role">Cheif officer</span>
      <button>Update Profile</button>
    </section>
  )
}

export default userDetails;
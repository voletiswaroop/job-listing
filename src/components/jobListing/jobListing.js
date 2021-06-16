import React from 'react'
import './jobListing.scss'
import Header from '../header/header'
import jobListData from '../../assests/json/joblist.json';

const jobListing = () => {

  const subnavigation = (e) => {
    e.currentTarget.previousSibling.classList.toggle('show-nav')
    e.currentTarget.classList.toggle('show-nav')
  }

  const finalJobsList = jobListData.jobs && jobListData.jobs ? [...jobListData.jobs, ...jobListData.jobs] : {}
  const jobsList = finalJobsList.map((item, index) => {
    return (
      <li key={index}>
        <span className="job-title">
          {item['job-title'] && item['job-title'] ? item['job-title'] : '--'}
          <span className="job-role" dangerouslySetInnerHTML={{ __html: item && item.role ? item.role : '--' }}></span>
        </span>
        <span className={`status ${item.status}`}><i className="fas fa-circle"></i>{item && item.status ? item.status : '--'}</span>
        <span className="posted">{item && item.posted ? item.posted : '--'}</span>
        <span className="applicants">{
          item && item.applicants.length ?
            <div><i className="far fa-user-circle"></i><i className="far fa-user-circle"></i><i className="far fa-user-circle"></i>
              <span>+{+item.applicants.length - 3}</span> </div>
            : '--'}</span>
        <span className="options">
          <i className="fas fa-ellipsis-h"></i>
          <div className="options-subset">
            <span><i className="far fa-edit"></i>Edit</span>
            <span><i className="fas fa-redo"></i>Re-Post</span>
            <span><i className="far fa-trash-alt"></i>Delete</span>
            <span><i className="far fa-eye-slash"></i>Hide</span>
          </div>
        </span>
      </li>
    )
  })

  return (
    <section className="jobs-listing-wrapper">
      <Header />
      <div className="navlines" onClick={(e) => subnavigation(e)}> <span></span><span></span><span></span></div>
      <section className="jobs-listing-container">
        <span className="title">Jobs</span>
        <button className="add-new">Add new job</button>
        <ul>
          <li className="table-title">
            <span className="job-title">JOB TITLE</span>
            <span className={`status`}>STATUS</span>
            <span className="posted">POSTED</span>
            <span className="applicants">APPLICANTS</span>
            <span className="options">OPTIONS</span></li>
          {jobsList}
        </ul>
      </section>
    </section>
  )
}

export default jobListing;
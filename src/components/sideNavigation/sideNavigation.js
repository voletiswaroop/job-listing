import React from 'react'
import './sideNavigation.scss'
import UserDetails from '../userDetails/userDetails'

const sideNavigation = () => {
  return (
    <aside className="side-navigation-wrapper">
      <UserDetails />
      <div className="navigation-extras">
        <div data-set-id="dashboard"><i className="fas fa-laptop"></i>Dashboard</div>
        <div data-set-id="jobs" className="active"><i className="far fa-file-alt"></i>Jobs</div>
        <div data-set-id="docs"><i className="far fa-file-alt"></i>Sea Docs</div>
        <div data-set-id="connections"><i className="fas fa-user-friends"></i>Connections</div>
      </div>
    </aside>
  );
}

export default sideNavigation;
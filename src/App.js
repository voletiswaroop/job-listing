import './App.scss';
import SideNavigation from './components/sideNavigation/sideNavigation'
import JobListing from './components/jobListing/jobListing'
function App() {
  return (
    <div className="app">
      <SideNavigation />
      <JobListing />
    </div>
  );
}

export default App;

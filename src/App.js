import './App.css';
import SidebarComp from './components/SidebarComponents/SidebarComp';
import MainComp from './components/MainComponents/MainComp';
function App() {
  return (
    <div className = "top-container">
      <div className='sidebar'> <SidebarComp/> </div>
      <div className='main-container'><MainComp/></div>
    </div>
  );
}

export default App;

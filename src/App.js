import './App.css';
import SidebarComp from './components/SidebarComponents/SidebarComp';

function App() {
  return (
    <div className = "top-container">
      <div className='sidebar'> <SidebarComp/> </div>
      <div className='main-container'>Main container</div>
    </div>
  );
}

export default App;

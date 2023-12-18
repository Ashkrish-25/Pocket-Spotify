import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import PlayerPlaylist from './Components/PlayerPlaylist';

function App() {
  return (
    <div>
      <Header/>

      <div className='player-container'>
        <div className='side-bar'>
         <SideBar/>
        </div>
        
        <div className='player-playlist'>
         <PlayerPlaylist/>
        </div>
      </div>

      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App;
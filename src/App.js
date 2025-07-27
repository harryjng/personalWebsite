import './App.css';
import profileImage from './assets/gradShot.jpg'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        Welcome to Harry's personal space!
        <img src={profileImage} alt="profile" className="profile-img"/>

      </header>
      
    </div>
  );
}

export default App;

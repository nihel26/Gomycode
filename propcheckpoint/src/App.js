
import './App.css';
import Profil from './profile/Profil';


function App() {
   const handleName = (name) => alert(name);
  return (
    <div className="App">
      <Profil
        name="Nihel"
        bio="I am 29 years old, i am from hammamet, and i am a fullstack JS developer"
        profesion="fullstack JS developer"
      />
    </div>
  );
}

export default App;

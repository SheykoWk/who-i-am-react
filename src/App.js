import './App.css';
import Profile from './components/Profile';
import Interests from './components/Interests';
import Learn from './components/Learn';
import Expectations from './components/Expectations';
import Hobbies from './components/Hobbies';
function App() {
  return (
    <div className='app'>
      <Profile/>
      <Interests/>
      <Learn/>
      <Expectations/>
      <Hobbies/>
    </div>
  );
}

export default App;

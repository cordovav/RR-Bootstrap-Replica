import './App.css';
import TopBar from './Components/TopBar'
import StoreListings from './Components/StoreListings'
import Background from './Components/Background.js'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;

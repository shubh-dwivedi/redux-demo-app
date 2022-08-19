// import './App.css';
import { NavBar } from './components/NavBar';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className='text-center my-4'>Welcome to QuickStore</h1>
      <Shop />
    </div>
  );
}

export default App;

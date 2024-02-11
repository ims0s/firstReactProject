import Navbar from './components/navbar/Navbar.component';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
import Home from './components/home/Home.component';
function App() {
  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <main className='min-vh-100 d-flex h-100 justify-content-center align-items-center bg-main'>
      <Home/>
      </main>

    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.component';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Home from './components/home/Home.component';
import MainLayout from './layout/mainLayout/mainLayout.layout';


function App() {

    const routes = createBrowserRouter([
        {
            path: "/", element: <MainLayout />, children: [
                { index: true, element: <Home /> }
            ]
        }
    ])

    return (
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;

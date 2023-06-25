import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalLayout from './Layout/GlobalLayout';
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import RequestForm from './Pages/RequestForm'
import Blogs from './Pages/Blogs'
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Financing from './Pages/Financing';


function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element:<GlobalLayout/>,
			children:[
				{
					path:"/",
					element: <HomePage />
				},
				{
					path: "/About",
					element: <About/>
				},
				{
					path: "/Gallery",
					element: <Gallery/>
				},
				{
					path: "/RequestForm",
					element: <RequestForm/>
				},
				{
					path: "/Blogs",
					element: <Blogs/>
				},
				{
					path: "/Login",
					element: <Login/>
				},
				{
					path: "/Register",
					element: <Register/>
				},
				{
					path: "/Financing",
					element: <Financing/>
				},
			{
				path: "/Contact",
				element: <Contact/>
			}


			]
		}
	])

  return (
    <div className="App">
		<RouterProvider router={router}/>
		<Footer />
    </div>
  );
  }
export default App;

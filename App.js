
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalLayout from './layout/GlobalLayout';
import HomePage from './pages/Homepage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import RequestForm from './pages/RequestForm'
import RequestFormCustom from './pages/RequestFormCustom'
import RequestFormVirtual from './pages/RequestFormVirtual';
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Financing from './pages/Financing'
import Contest from './pages/Contest'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element:<GlobalLayout/>,
			children:[
				{
					path:"/Home",
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
          			path: "/RequestFormCustom",
          			element: <RequestFormCustom/>
        		},
        		{
          			path: "/RequestFormVirtual",
          			element: <RequestFormVirtual/>
        		},
				{
					path: "/Contact",
					element: <Contact/>
				},
				{
					path: "/contest",
					element: <Contest/>
				}


			]
		}
	])

  return (
    <div className="App">
		<RouterProvider router={router}/>
    </div>
  );
  }


export default App;


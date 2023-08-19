
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalLayout from './Layout/GlobalLayout'
import HomePage from './Pages/Homepage'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import RequestForm from './Pages/RequestForm'
import RequestFormCustom from './Pages/RequestFormCustom'
import RequestFormVirtual from './Pages/RequestFormVirtual'
import Floors from './Pages/Floors'
import Countertops from './Pages/Countertops'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'
import Financing from './Pages/Financing'
import Contest from './Pages/Contest'
import Individual from './Pages/Individual'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'
import Security from './Pages/Security'
import Cookie from './Pages/Cookie'
import 'bootstrap/dist/css/bootstrap.min.css'

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
					element: <About />
				},
				{
					path: "/Gallery",
					element: <Gallery />
				},
				{
					path: "/RequestForm",
					element: <RequestForm />
				},
				{
					path: "/Floors",
					element: <Floors />
				},
				{
					path: "/Countertops",
					element: <Countertops />
				},
				{
					path: "/Login",
					element: <Login />
				},
				{
					path: "/Register",
					element: <Register />
				},
				{
					path: "/Financing",
					element: <Financing />
				},
        		{
          			path: "/RequestFormCustom",
          			element: <RequestFormCustom />
        		},
        		{
          			path: "/RequestFormVirtual",
          			element: <RequestFormVirtual />
        		},
				{
					path: "/Contact",
					element: <Contact />
				},
				{
					path: "/contest",
					element: <Contest />
				},
				{
					path: "/individual",
					element: <Individual />
				},
				{
					path: "/Terms",
					element: <Terms />
				},
				{
					path: "/Privacy",
					element: <Privacy />
				},
				{
					path: "/Security",
					element: <Security />
				},
				{
					path:"/Cookie",
					element: <Cookie />
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


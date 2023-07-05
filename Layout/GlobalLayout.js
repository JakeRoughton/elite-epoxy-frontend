import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; 

const GlobalLayout = () => {
	return (
		<div>
		<route>
			<NavBar/>
			<Outlet/>
			<Footer/>
		</route>
		</div>
	)
}

export default GlobalLayout
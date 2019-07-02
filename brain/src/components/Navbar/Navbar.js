import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js'
import '../Bootstrap/bootstrap.css'
import './Navbar.css'

class Navbar extends React.Component {

	constructor() {
		super();

		this.state = {
			sidebarToggled: false,
		};
	}

	componentDidMount(){
		var wrapper = document.getElementById("wrapper");
		if(wrapper.classList.contains("toggled")) {
			this.setState({sidebarToggled:true});
		}
	}
	

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand navbar-dark bg-primary"> 
					<button id="menu-toggle" onClick={ ()=>{
						this.state.sidebarToggled = !this.state.sidebarToggled;
						this.setState({});
						var wrapper = document.getElementById("wrapper");
						if(this.state.sidebarToggled) {
	  						wrapper.classList.add("toggled");
						}
						else {
							wrapper.classList.remove("toggled");
						}
					}
					}>
						<span className="navbar-toggler-icon navbar-dark bg-primary"></span>
					</button>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggle" aria-controls="navBarToggle" aria-expanded="false" aria-label="Toggle navigation"> 
						<span className="navbar-toggler-icon  "></span>
					</button>
					<Sidebar/>
					<div className="collapse navbar-collapse" id="navBarToggle">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item title-text">Tufts BCI Team</li>
						</ul>
					</div>
				</nav>
			</div>
			);
	}
}

export default Navbar; 
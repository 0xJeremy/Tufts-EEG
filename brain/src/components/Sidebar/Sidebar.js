import React from 'react';
import '../Bootstrap/bootstrap.css'
import './Sidebar.css';

class SidebarItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isVisible: false	}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(state => ({
			isVisible: !this.state.isVisible
		}));
	}
	render() {
		return <div></div>
	}
}

class SidebarGeneralInfo extends SidebarItem {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li>
				<a href="#" className="dropdown-toggle" onClick={this.handleClick}>
					General Info
				</a>
				{this.state.isVisible &&
					<div className="general-info">
						<table className="table table-dark">
							<thead>
								<tr>
									<th scope="col">
									Welcome to the Tufts BCI Team's EEG Visualizer!<br/><br/>
									This website displays, in realtime, data from our EEG headset.
									</th>
								</tr>
							</thead>
						</table>
					</div>
				}
			</li>
	)};
}

class SidebarDataStream extends SidebarItem {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li>
				<a href="#" className="dropdown-toggle" onClick={this.handleClick}>
					View Live Data Feed
				</a>
				{this.state.isVisible &&
					<table className="table table-dark">
						<thead>
							<tr>
								<th scope="col">Raw Electrode Values</th>
							</tr>
						</thead>
						<tbody id="probeTable" className="electrode-data">
						</tbody>
					</table>
				}
			</li>
	)};
}

class SidebarDisplayOptions extends SidebarItem {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li>
				<a href="#" className="dropdown-toggle" onClick={this.handleClick}>
					Display Options & Settings
				</a>
				{this.state.isVisible &&
					<table class="table table-dark">
						<thead class="view-options">
							<tr>
								<th scope="col">Options</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th><button type="button" class="btn btn-primary">Toggle Brain Rotation</button></th>
							</tr>
							<tr>
								<th><button type="button" class="btn btn-success">Toggle 2D - 3D View</button></th>
							</tr>
						</tbody>
					</table>
				}
			</li>
	)};
}

class SidebarLink extends SidebarItem {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li>
			<a href={this.props.link} target="_blank">
				{this.props.item}
			</a>
		</li>
	)};
}

class SidebarModal extends SidebarItem {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li>
				<div className="dropright">
					<a href="#" className="dropdown-toggle" onClick={this.handleClick}>
						Team Information
					</a>
				</div>
				{this.state.isVisible &&
					<div className="modal fade direction-left">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Team Information</h5>
								<button type="button" className="close" onClick={this.handleClick}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body text-center">
								We are a group of undergraduate students at Tufts University interested in Brain-Computer interfaces, and biomedical technology.
								This project was funded by the Tufts MAKE club, and made possible by the hard work put in by the team.
							</div>
							<div className="modal-footer">
								<a  href="https://github.com/0xJeremy/Tufts-EEG" target="_blank">
									<button type="button" className="btn btn-primary">See More About the Project</button>
								</a>
								<button type="button" className="btn btn-secondary" onClick={this.handleClick}>Close</button>
							</div>
						</div>
					</div>
				</div>
				}
			</li>
	)};
}

class Sidebar extends React.Component {
	render() {
		return (
			<div id="wrapper" className="toggled">
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<li className="sidebar-brand">EEG Toolbox</li>
						<SidebarGeneralInfo />
						<SidebarDataStream />
						<SidebarDisplayOptions />
						<SidebarModal />
						<SidebarLink item="See Project On GitHub" link="https://github.com/0xJeremy/Tufts-EEG" />
					</ul>
					<div className="attribution">Made with ❤️ by the Tufts BCI Team</div>
				</div>
				}
			</div>	
	)};
}

export default Sidebar;

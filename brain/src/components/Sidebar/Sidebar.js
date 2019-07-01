import React from 'react';
import './Sidebar.css';

class SidebarItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = { infoVisible: false	}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(state => ({
			infoVisible: !this.state.infoVisible
		}));
	}
	render() {
		return (
			<li>
				<a href="#" className="dropdown-toggle" onClick={this.handleClick}>
					{this.props.item}
				</a>
				{this.state.infoVisible && 
					<div className="general-info">
						{this.props.info}
					</div>
				}
			</li>
	)};
}

class Sidebar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isVisible: true }
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(state => ({
			isVisible: !this.state.isVisible
		}))
	}
	render() {
		return (
			<div id="wrapper" className="toggled">
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<SidebarItem item="General Info" info="This is a test!" />
						<SidebarItem item="View Live Data" info="This is a test! (but 2)" />
					</ul>
				</div>
			</div>	
	)};
}

export default Sidebar;

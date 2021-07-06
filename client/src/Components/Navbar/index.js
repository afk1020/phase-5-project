import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = (props) => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_35646554_a-coffee-cup-and-the-word-coffee-written-with-coffee-beans.html&psig=AOvVaw0wCi21jr-C1fttYDiLv_SS&ust=1625672425351000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCODvnO7jzvECFQAAAAAdAAAAABAH" alt="Company logo" style={{width: "100px", height: "50px"}}/>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/about" activestyle>
						About
					</NavLink>
					<NavLink to="/coffee" activestyle>
						Coffee
					</NavLink>
					<NavLink to="/cart" activestyle>
						cart
					</NavLink>
					<NavLink to="/sign-up" activestyle>
						Sign Up
					</NavLink>
				</NavMenu>
				<NavBtn>
					{props.loggedIn ? `Welcome ${props.name}` : <NavBtnLink to="/LoginForm">Login</NavBtnLink>}
				</NavBtn>
				<NavBtn>
					{props.loggedIn ? <NavBtnLink onClick={props.Logout} to="/log-out">Log out</NavBtnLink> : ""}
				</NavBtn>
			</Nav>
		</>
	)
}

export default Navbar

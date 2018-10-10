import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const HEADER_LINKS = [
  {
    name:'home',
    visual: 'Home',
    link:'/',
  },
  {
    name:'questions',
    visual: 'Questions',
    link:'/questions',
  },
  {
    name:'user',
    visual: 'User',
    link:'/user',
  },
];
const NavButton = ({name, })

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {activeItem: HEADER_LINKS[0].name};
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name})
  }

  createNavButton = ({ name, visual, link }) => (
    <NavLink to={link}>
      <Menu.Item
        name={name}
        active={this.state.activeItem === name}
        onClick={this.handleItemClick}
      >
        {visual}
      </Menu.Item>
    </NavLink>
  )

  render() {
    const { activeItem } = this.state
    return (
      <Menu inverted>
       {HEADER_LINKS.map(this.createNavButton)}
      </Menu>
    );
  }
}

export default Header;
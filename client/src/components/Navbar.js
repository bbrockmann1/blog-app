import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link  } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}
            to={'/'}
          />
          <Menu.Item
            name='blogs'
            active={activeItem === 'blogs'}
            onClick={this.handleItemClick}
            as={Link}
            to={'/blogs'}
          />
          <Menu.Item
            name='make a new blog'
            active={activeItem === 'make a new blog'}
            onClick={this.handleItemClick}
            as={Link}
            to={'/create'}
          />
          <Menu.Item
            position='right'
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            as={Link}
            to={'/login'}
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
            as={Link}
            to={'/'}
          />
        </Menu>
      </Segment>
    )
  }
}
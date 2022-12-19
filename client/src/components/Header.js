import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Header extends Component {
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
          />
          <Menu.Item
            name='blogs'
            active={activeItem === 'blogs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='make a new blog'
            active={activeItem === 'make a new blog'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            position='right'
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
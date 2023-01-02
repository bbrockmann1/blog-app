import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUserAtom, errorsAtom } from './atoms'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)
  const [errors, setErrors] = useRecoilState(errorsAtom);
  
  function handleLogout(e) {
    setActiveItem(e.target.name);
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(resp => {
      if(resp.ok){
        setCurrentUser([])
      }else{
        resp.json().then(json => {
          setErrors(json.errors)
          window.alert(errors)
        })
      }
    })
  };

  function handleItemClick(e) {
    setActiveItem(e.target.name);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to={'/'}
        />
        <Menu.Item
          name='blogs'
          active={activeItem === 'blogs'}
          onClick={handleItemClick}
          as={Link}
          to={'/blogs'}
        />
        <Menu.Item
          name='make a new blog'
          active={activeItem === 'make a new blog'}
          onClick={handleItemClick}
          as={Link}
          to={'/create'}
        />
        <Menu.Item
          position='right'
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to={'/login'}
        />
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleLogout}
          as={Link}
          to={'/'}
        />
      </Menu>
    </Segment>
  );
};

export default Navbar;

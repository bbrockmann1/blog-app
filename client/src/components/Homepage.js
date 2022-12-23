import { Card } from 'semantic-ui-react'
import { useEffect, useState } from 'react';

function Homepage() {
const [ blogs, setBlogs ] = useState([])

useEffect(() => {
  fetch('/blogs')
  .then(resp => resp.json())
  .then(blogsArray => {
    setBlogs(blogsArray)
  })
}, [])

    return (
  <Card.Group>
    <Card fluid color='red' header={'Option 1'} />
    <Card fluid color='red' header={'Option 2'} />
    <Card fluid color='red' header={'Option 3'} />
    <Card fluid color='red' header={'Option 4'} />
    <Card fluid color='red' header={'Option 5'} />
  </Card.Group>
    );
  }
  
  export default Homepage;
  
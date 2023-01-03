import { Card } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { blogsAtom } from './atoms.js';
import { dropdownValueAtom } from './atoms.js';

function Homepage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useRecoilState(blogsAtom);
  const value = useRecoilValue(dropdownValueAtom);
  

  useEffect(() => {
    fetch('/blogs')
    .then(resp => resp.json())
    .then(blogsArray => {
      setBlogs(blogsArray)
    })
  }, [setBlogs])

// eslint-disable-next-line
  const blogCards = blogs.map((blog) => {
    if (value === "All" || blog.tag.category === value) {
      return (
        <Card 
          key={blog.id}
          fluid color='black' 
          header={blog.title} 
          extra={`${blog.content.substring(0,300)}...`}
          description={`Written by: ${blog.user.first_name} ${blog.user.last_name}`}
          meta={`category: ${blog.tag.category}`}
          onClick={() => navigate(`/${blog.slug}`)}
        />
      );
    }
  });


  return (
    <Card.Group>
      {blogCards}
    </Card.Group>
  );
}

export default Homepage;
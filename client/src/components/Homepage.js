import { Card } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { blogsAtom } from './atoms.js';

function Homepage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useRecoilState(blogsAtom);
  

  useEffect(() => {
    fetch('/blogs')
    .then(resp => resp.json())
    .then(blogsArray => {
      setBlogs(blogsArray)
    })
  }, [setBlogs])


  const blogCards = blogs.map((blog) => {
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
  });


  return (
    <Card.Group>
      {blogCards}
    </Card.Group>
  );
}

export default Homepage;
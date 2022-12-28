import { Card } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function Homepage({ blogs }) {
  const navigate = useNavigate();

  const blogCards = blogs.map((blog) => {
    return (
      <Card 
        fluid color='black' 
        header={blog.title} 
        extra={`${blog.content.substring(0,300)}...`}
        description={`Written by: ${blog.user.first_name} ${blog.user.last_name}`}
        onClick={() => navigate(`/blogs/${blog.slug}`)}
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
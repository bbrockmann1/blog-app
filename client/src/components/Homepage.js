import { Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function Homepage({ blogs }) {

  const blogCards = blogs.map((blog) => {
     return <Card 
              fluid color='black' 
              header={blog.title} 
              extra={`${blog.content.substring(0,300)}...`}
              description={`Written by: ${blog.user.first_name} ${blog.user.last_name}`}
              onclick={null}
            />
  })

    return (
      <Link to={'/selectedblog'}>
        <Card.Group>
          {blogCards}
        </Card.Group>
      </Link >
    );
  }
  
  export default Homepage;
  
import { Card, Button } from 'semantic-ui-react';
import { useRecoilState } from 'recoil'
import { currentUserAtom } from './atoms.js';
import { useEffect } from 'react';


function UserBlogs() {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)
    
    useEffect(() => {
      fetch(`/users/${currentUser.id}`)
      .then(resp => resp.json())
      .then(blogsArray => {
        setCurrentUser(blogsArray)
      })
    }, [setCurrentUser, currentUser.id])

    const userBlogCards = currentUser.blogs.map((blog) => {
      return (
          <Card
          key={blog.id}
          fluid
          color='black'
          header={blog.title}
          description={`${blog.content.substring(0,300)}...`}
          extra={
            <div>
              <Button onClick={null}>Edit</Button>
              <Button color='red' onClick={null}>Delete</Button>
            </div>
          }
        />
      );
    });

    return (
      <Card.Group>
        {userBlogCards}
      </Card.Group>
    );
  }
  
  export default UserBlogs;
  
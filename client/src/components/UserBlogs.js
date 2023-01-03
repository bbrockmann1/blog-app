import { Card, Button, Header, Segment, Form} from 'semantic-ui-react';
import { useRecoilState } from 'recoil'
import { currentUserAtom } from './atoms.js';
import { useEffect, useState } from 'react';

function UserBlogs() {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)
    const [isEditing, setIsEditing] = useState(false)

    useEffect((e) => {
      fetch(`/users/${currentUser.id}`)
      .then(resp => resp.json())
      .then(blogsArray => {
        setCurrentUser(blogsArray)
      })
    }, [setCurrentUser, currentUser.id])

    async function handleDelete(id) {
      try {
        await fetch(`/blogs/${id}`, {
          method: 'DELETE'
        });
        setCurrentUser(prevUser => ({
          ...prevUser,
          blogs: prevUser.blogs.filter(blog => blog.id !== id)
        }))
      } catch (error) {
        // Handle error
      }
    }

    function handleSubmit() {
      console.log('Submitted!')
    };

    const userBlogCards = currentUser.blogs
    ? currentUser.blogs.map((blog) => {
        return (
          <Card
            key={blog.id}
            fluid
            color="black"
            header={blog.title}
            description={`${blog.content.substring(0, 300)}...`}
            extra={
              <div>
                <Button onClick={(e) => setIsEditing(!isEditing)}>Edit</Button>
                <Button color="red" onClick={() => handleDelete(blog.id)}>
                  Delete
                </Button>
              </div>
            }
          />
        );
      })
    : <Segment><Header as='h1' >Please log in to see your blogs</Header></Segment>;

    return (
      
      <Card.Group>
        {userBlogCards}
        {isEditing && (
          <Segment>
            <Form>
              {<Form.Field>
                <label>Title</label>
                <input
                  name="title"
                  value={null} //control form
                  onChange={null} //control form
                />
                <label>Content</label>
                <input
                  name="content"
                  value={null} //control form
                  onChange={null} //control form
                />
              </Form.Field>
            }
              <Button type="submit" 
                onClick={() => {
                handleSubmit();
                setIsEditing(false);                 
                }}>Save Changes</Button>
              <Button onClick={() =>setIsEditing(false)}>Cancel</Button>
            </Form>
          </Segment>
        )}
      </Card.Group>
      
    );
  }
  
  export default UserBlogs;
  
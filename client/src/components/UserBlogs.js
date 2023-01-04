import { Card, Button, Header, Segment, Form } from 'semantic-ui-react';
import { useRecoilState } from 'recoil'
import { currentUserAtom } from './atoms.js';
import { useEffect, useState } from 'react';

function UserBlogs() {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');
    const [blogObj, setBlogID] = useState('');
    

    useEffect((e) => {
      fetch(`/users/${currentUser.id}`)
      .then(resp => resp.json())
      .then(blogsArray => {
        setCurrentUser(blogsArray)
      })
    }, [setCurrentUser, currentUser.id, currentUser, editedTitle, editedContent])

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

    function handleSubmit(id) {
      const editedBlog = {
        title: editedTitle,
        content: editedContent
      };
  
      fetch(`/blogs/${id.id}`, {
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(editedBlog)
      })
      .then(response => response.json())
      .then(updatedBlog => {
        setCurrentUser(prevUser => ({
          ...prevUser,
          blogs: prevUser.blogs.map(blog => blog.id === id ? updatedBlog : blog)
        }))
      })
      .catch(error => {
        // Handle error
      });
    }
    
    

    const userBlogCards = currentUser.blogs
    ? currentUser.blogs.map((blog) => {
        return (
        <>
          <Card
            key={blog.id}
            fluid
            color="black"
            header={blog.title}
            description={`${blog.content.substring(0, 300)}...`}
            extra={
              <div>
                <Button onClick={(e) => {
                  setIsEditing(!isEditing)
                  setBlogID(blog)
                  setEditedTitle(blog.title)
                  setEditedContent(blog.content)
                  }}>Edit</Button>
                <Button color="red" onClick={() => handleDelete(blog.id)}>
                  Delete
                </Button>
              </div>
            }
          />
        </>
        );
      })
    : <Segment><Header as='h1' >Please log in to see your blogs</Header></Segment>;

    return (
      <Card.Group>
        {userBlogCards}
        {isEditing && (
          <Segment>
            <Form onSubmit={() => {
              handleSubmit(blogObj);
              setIsEditing(false);                 
              }}>
              {<Form.Field>
                <label>Title</label>
                <input
                  name="title"
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <label>Content</label>
                <input
                  name="content"
                  value={editedContent} 
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              </Form.Field>
              }
              <Button type="submit">Save Changes</Button>
              <Button onClick={() =>setIsEditing(false)}>Cancel</Button>
            </Form>
          </Segment>
    )}
      </Card.Group>
    );
  }
  
  export default UserBlogs;
  
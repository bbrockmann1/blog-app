import { Container, Header, Form, Button } from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { blogsAtom } from './atoms.js';
import { useState } from "react";
import { useRecoilState } from 'recoil';
import { currentUserAtom } from "./atoms.js";

function SelectedBlog() {
  const blogs = useRecoilValue(blogsAtom);
  const { slug } = useParams();
  const [commentField, setCommentField] = useState('');
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)


  const selectedBlog = blogs.find(blog => blog.slug === slug);

  const [allComments, setAllComments] = useState(selectedBlog.reviews.map(review => {
  return { comment: review.comment }
  }));

  function handleSubmit(e) {
    e.preventDefault()
    const newcomment = {
    comment: commentField,
    blog_id: selectedBlog.id,
    user_id: currentUser.id
    };

    const configObject = {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(newcomment)
    };

    fetch(`/reviews`, configObject)
    .then(resp => resp.json())
    .then((data) => {
      setAllComments([...allComments, { comment: commentField }])
    })  

  };
  
  return(
    <>
      <Container>
        <Header>{selectedBlog.title}</Header>
          <img alt={selectedBlog.user.first_name} src={selectedBlog.user.avatar} width={'200px'} height={'200px'}/>
          <h4>{`Written by: ${selectedBlog.user.first_name} ${selectedBlog.user.last_name}`}</h4>
          <p>{selectedBlog.content}</p>
          <p>{`Category: ${selectedBlog.tag.category}`}</p>
        <Header as='h1'>Reviews</Header>
          {allComments.map(comment => (
          <h4>{comment.comment}</h4>
          ))}
        <Header as='h1'>Leave A Review</Header>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Field>
            <label>Comment</label>
            <input
              name="comment"
              value={commentField}
              onChange={(e) => setCommentField(e.target.value)}
            />
          </Form.Field>
          <Button type="submit">Comment</Button>
        </Form>
      </Container>
    </>
    )
    };
    
    export default SelectedBlog
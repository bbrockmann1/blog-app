import { Form, FormField, Button } from "semantic-ui-react";
import { currentUserAtom } from './atoms';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogForm() {
  const currentUser = useRecoilValue(currentUserAtom);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newBlog = {
      title: title,
      content: content,
      tag_id: tag,
      user_id: currentUser.id
    };

    const configObject = {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(newBlog)
    };

    fetch('/blogs', configObject)
    .then(resp => {
      if(resp.ok){
        history('/posted')
      }
    })
  };

    return(
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Title</label>
          <input 
            name="title"  
            value={title}
            onChange={e => setTitle(e.target.value)} 
          />
        </FormField>
        <FormField>
          <label>Tell your story below...</label>
          <input 
            name="content" 
            value={content}
            onChange={e => setContent(e.target.value)} 
          />
        </FormField>
        
      <label>
          <strong>Add a tag...</strong>
          <select onChange={e => setTag(e.target.value)} >
            <option value="1">Fashion</option>
            <option value="2">Travel</option>
            <option value="3">Music</option>
            <option value="4">DIY</option>
            <option value="5">Sports</option>
            <option value="6">Lifestyle</option>
            <option value="7">Finance</option>
            <option value="8">Politics</option>
            <option value="9">Parenting</option>
            <option value="10">Movies</option>
            <option value="11">Tech</option>
            <option value="12">Development</option>
            <option value="13">Gaming</option>
            <option value="14">Auto</option>
          </select>
        </label>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
  
  export default BlogForm;
  
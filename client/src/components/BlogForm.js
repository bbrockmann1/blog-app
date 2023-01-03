import { Form } from "semantic-ui-react";
import { currentUserAtom } from './atoms';
import { useRecoilValue } from 'recoil';

function BlogForm() {
  const currentUser = useRecoilValue(currentUserAtom)
  
  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Tell your story below...</label>
        <input />
      </Form.Field>
    </Form>
  );
  }
  
  export default BlogForm;
  
import { Form } from "semantic-ui-react";

function BlogForm() {

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
  
import { Container, Header } from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { blogsAtom } from './atoms.js';

function SelectedBlog() {
  const blogs = useRecoilValue(blogsAtom);
  const { slug } = useParams(); // useParams is from the react-router-dom library

  // Find the selected blog using the slug
  const selectedBlog = blogs.find(blog => blog.slug === slug);

  return(
    <>
      <Container>
        <Header>{selectedBlog.title}</Header>
        <h2>{`Written by: ${selectedBlog.user.first_name} ${selectedBlog.user.last_name}`}</h2>
      </Container>
    </>
  )
};

export default SelectedBlog;
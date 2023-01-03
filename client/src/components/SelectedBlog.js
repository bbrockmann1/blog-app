import { Container, Header } from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { blogsAtom } from './atoms.js';

function SelectedBlog() {
  const blogs = useRecoilValue(blogsAtom);
  const { slug } = useParams(); 

  // Find the selected blog using the slug
  const selectedBlog = blogs.find(blog => blog.slug === slug);

  return(
    <>
      <Container>
        <Header>{selectedBlog.title}</Header>
        <img alt={selectedBlog.user.first_name} src={selectedBlog.user.avatar} width={'200px'} height={'200px'}/>
        <h4>{`Written by: ${selectedBlog.user.first_name} ${selectedBlog.user.last_name}`}</h4>
        <p>{selectedBlog.content}</p>
        <p>{`Category: ${selectedBlog.tag.category}`}</p>
      </Container>
    </>
  )
};

export default SelectedBlog;
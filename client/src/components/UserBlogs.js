import { Card } from 'semantic-ui-react';
import { useRecoilValue } from 'recoil'
import { currentUserAtom } from './atoms.js'

function UserBlogs() {
    const currentUser = useRecoilValue(currentUserAtom)

    return (
      <Card.Group>
        <h1>{currentUser.email}</h1>
        <h1>{currentUser.first_name}</h1>
      </Card.Group>
    );
  }
  
  export default UserBlogs;
  
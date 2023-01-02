import Confetti from 'react-confetti'
import { Message } from 'semantic-ui-react'

function Done() {
  return(
    <>
      <Confetti />
      <Message>
        <Message.Header>Thank you for signing up!</Message.Header>
          <Message.List>
            <Message.Item>Navigate though the navbar to create a blog!</Message.Item>
            <Message.Item>Or click the logout button to logout.</Message.Item>
          </Message.List>
      </Message>
    </>
  )
}
export default Done;
import Confetti from 'react-confetti'
import { Message } from 'semantic-ui-react'

function ThankYou() {
    return(
        <>
          <Confetti />
          <Message>
            <Message.Header>Your blog has been successfully posted!</Message.Header>
              <Message.List>
                <Message.Item>Navigate to your blogs to check it out!</Message.Item>
              </Message.List>
          </Message>
        </>
    )

};
  export default ThankYou;
  
import React, {Fragment} from 'react'
import { Container,Card, Icon, Image } from 'semantic-ui-react'
import Football from  '../../assets/football.jpg'
import basketball from  '../../assets/basketball.jpg'
import icehockey from  '../../assets/icehockey.jpg'
import "./index.css";





const Sport = () => (
  <Fragment style={{ display: 'inline-block'}}>

  <Card>

    <Container style={{ display: 'inline-block'}}>
      <Image src={basketball} />
    </Container>
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Meta>
        <span className='basketball'></span>
      </Card.Meta>
      <Card.Description>basketball</Card.Description>
    </Card.Content>
    <Card.Content extra>
    
    </Card.Content>


  </Card>
  <Card>
  <Container style={{ display: 'inline-block'}}>
    <Image src={icehockey} />
  </Container>
  <Card.Content>
    <Card.Header></Card.Header>
    <Card.Meta>
      <span className='icehockey'></span>
    </Card.Meta>
    <Card.Description>icehockey</Card.Description>
  </Card.Content>
  <Card.Content extra>
  
  </Card.Content>
</Card>


<Card>
    <Container >
      <Image src={Football} />
    </Container>
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Meta>
        <span className='football'></span>
      </Card.Meta>
      <Card.Description>Football</Card.Description>
    </Card.Content>
    <Card.Content extra>
    
    </Card.Content>
  </Card>
  </Fragment>

)

export default Sport

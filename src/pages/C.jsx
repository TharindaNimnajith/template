import React from 'react'
import {Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap'

const C = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardImg alt='Card image cap'
                   src='https://picsum.photos/318/180'
                   top
                   width='100%'/>
          <CardBody>
            <CardTitle tag='h5'>
              Card title
            </CardTitle>
            <CardSubtitle className='mb-2 text-muted'
                          tag='h6'>
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  )
}

export default C

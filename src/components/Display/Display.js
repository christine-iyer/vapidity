import Card from 'react-bootstrap/Card'
import { useRef, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Display ({blogEntry}) {

  return (
    <Card className='SubCard'>
      <Card.Header className='SubCardHeader'>About Community</Card.Header>
      <Card.Body className='SubCardContainer'>
        <Card.Text className='AboutBlurb'>
          {/* {blogEntry.title} */}
        </Card.Text>
        <br />
        <Card.Text className='SubCardDate'>
          {`Created By: `}
          <br />
          {`Date Created:`}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
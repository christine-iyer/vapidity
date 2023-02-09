import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import  Image  from 'react-bootstrap/Image';
import { useState } from 'react';
import styles from './Form.module.scss'

function Create() {
  const [date,setDate]= useState('')
  const [title,setTitle]= useState('')
  const [mood,setMood]= useState('')
  const [image,setImage]= useState('')
  const [body,setBody]= useState('')
  const [check, setCheck] =useState('')
  const handleSubmit =(e)=> {
    e.preventDefault()
    const blog = { date, title, body,mood, image, check}
    console.log(blog)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
<Col>
      <Form.Group className="mb-3" controlId="formBasicDate">
        
        <Form.Label>Date</Form.Label>
        <Form.Control  placeholder="Blog Date" 
        type='date'
        required
        value = {date}
        onChange={(e)=> setDate(e.target.value)}/>
        <Form.Text className="text-muted"
        >
        </Form.Text>
      </Form.Group>
      </Col>
<Col>
      <Form.Group className="mb-3" controlId="formBasicATitle">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Blog Title"
        type='text'
        required
        value = {title}
        onChange={(e)=> setTitle(e.target.value)} />
        <Form.Text className="text-muted"
        >
          Something Catchy
        </Form.Text>
      </Form.Group>
      </Col>

<Col>
      <Form.Group controlId="formBasicMood">
        <Form.Label>Select Mood</Form.Label>
        <Form.Control
          as="select"
          value={mood}
          onChange={e => {
            console.log("e.target.value", e.target.value);
            setMood(e.target.value);
          }}
        >
          <option value="DICTUM">Dictamen</option>
          <option value="CONSTANCY">Constancia</option>
          <option value="COMPLEMENT">Complemento</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group className="mb-3" controlId="formBasicImage">
        
        <Form.Label>Image Link</Form.Label>
        <Form.Control  placeholder="Blog Image" 
        type='text'
        required
        value = {image}
        onChange={(e)=> setImage(e.target.value)}/>
        <Form.Text className="text-muted"
        >
        </Form.Text>
      </Form.Group>
      </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Blog Body</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Blog Entry" type='text'
        required
        onChange={(e)=> setBody(e.target.value)}
        value = {body}/>
        <Form.Text className="text-muted"
        >
          Today's Blog is about...
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>

      <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {body}
    </Card.Text>
    
  </Card.Body>
</Card>
      <p></p>





    </Form>
  );
}

export default Create;

import styles from './Form.module.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
function FormIntake({
  createBlog,
  blog,
  handleChange
}) {
  return (
    <div className={styles.div}>
      <Form className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
            createBlog()
          }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control className={styles.title}
            type='text' 
            value={blog.title} 
            name='title' 
            onChange={handleChange} 
            placeholder='Title'  />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" value={blog.date} 
             />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className={styles.one}>Mood</Form.Label>
            <Form.Select size="lg" defaultValue="Pick me a color">
              <option>Red...</option>
              <option>White</option>
              <option>Blue</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Blog Entry</Form.Label>
          <Form.Control  size="lg"  placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check className={styles.checkbox} type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className={styles.button} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormIntake;
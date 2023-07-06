import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
 return (
  <div className=' py-5'>
   <Container className='d-flex justify-content-center'>
    <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
     <h1 className='text-center mb-4'>MERN Authentication</h1>
     <p className='text-center mb-4'>
      This serves as a template for MERN authentication that saves a JSON Web Token (JWT) in a cookie with HTTP-Only attribute. Additionally, it utilizes Redux Toolkit and the React Bootstrap framework.
     </p>
     <div className='d-flex'>
      <Button variant='success' className='me-3'> Sign In </Button>
      <Button variant='warning'> Sign Up </Button>
     </div>
    </Card>
   </Container>
  </div>
 );
};
export default Hero;
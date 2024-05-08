
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function BasicExample(props){
const SlikaSrc = props.SlikaSrc
const Naslov = props.Naslov
const Text = props.Text

  return (
    <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={SlikaSrc} width={450} height={250}/>
      <Card.Body>
        <Card.Title>{Naslov}</Card.Title>
        <Card.Text>
         {Text}
        </Card.Text>
        <Button variant="primary">Poglej</Button>
      </Card.Body>
    </Card>
    
  );
}

export default BasicExample;
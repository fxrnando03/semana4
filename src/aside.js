import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Aside = () => {
    return <aside>
        <Form>
            <Form.Group className="mb-3" controlId="formularioBasico">
            <Form.Label>correo electronico</Form.Label>
            <Form.Control type="email" placeholder="ingresar correo" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formulrioBasico">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      
      <Button variant="primary" type="Ingresar">
        Ingresar
      </Button>

    </Form>
    </aside>;
}

export default Aside;
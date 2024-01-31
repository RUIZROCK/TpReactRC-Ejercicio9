import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Agenda = ({lista, borrar}) => {
  return (
    <div className="row d-flex justify-content-around">
      {
        lista.map((card, position)=>(

          <Card key={position}
        style={{ width: "18rem" }}
        className="col-12 col-sm-12 col-md-3 col-lg-3 py-2 m-3"
      >
        <Card.Body>
          <div className="row d-flex justify-content-around">
            <div className="circulo col-1 col-sm-1 col-md-1 col-lg-1" />
            <div className="col-10 col-sm-10 col-md-10 col-lg-10">
              <Card.Title>Mascota: {card.mascota}</Card.Title>
              <Card.Title>Dueño: {card.duenio}</Card.Title>
            </div>
          </div>
          <Card.Text>
            Fecha: {card.fecha}
            <br />
            Hora: {card.hora}
            <br />
            Razon: {card.razon}
          </Card.Text>
          <div className="row d-flex justify-content-end">
            <Button className="col-12 col-sm-12 col-md-5 col-lg-5" variant="danger" onClick={()=>borrar(card.posicion)}>Borrar</Button>
          </div>
        </Card.Body>
      </Card>

        ))
      }
    </div>
  );
};

export default Agenda;

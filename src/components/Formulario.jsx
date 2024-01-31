import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Agenda from "./Agenda";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = () => {
  const [An, setAnimal] = useState("");
  const [Du, setDuenio] = useState("");
  const [Fe, setFecha] = useState("");
  const [Ho, setHora] = useState("");
  const [Ra, setRazon] = useState("");
  
  const datosLocalStorage = JSON.parse(localStorage.getItem("listaDatos"))||[];

  const [listaAnimales, setListaAnimal] = useState(datosLocalStorage);

  useEffect(()=>{
    localStorage.setItem("listaDatos",JSON.stringify(listaAnimales));
  },[listaAnimales]);

  let mascota = document.getElementById("mascota");
  let duenio = document.getElementById("duenio");
  let fecha = document.getElementById("fecha");
  let hora = document.getElementById("hora");
  let razon = document.getElementById("razon");

 

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(mascota.value)
    console.log(duenio.value)
    console.log(fecha.value)
    console.log(hora.value)
    console.log(razon.value)

    if (
      validarTexto(mascota.value, 2, 50) &&
      validarTexto(duenio.value, 2, 50) &&
      validarFyH(hora.value,fecha.value)&&
      validarTexto(razon.value,2,50)
    ) {

      const fechaObtenida = new Date(fecha.value);
      const fechaFormateada = fechaObtenida.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });

      const uuid = uuidv4();

      const user = {
        posicion:uuid,
        mascota: mascota.value,
        duenio: duenio.value,
        fecha: fechaFormateada,
        hora: hora.value,
        razon: razon.value
      };

      setListaAnimal([...listaAnimales,user]);

      alert("datos ingresados correctamente");
    } else {
      alert("dato/s ingresado/s erroneo/s");
    }

    setAnimal("");
    setDuenio("");
    setFecha("");
    setHora("");
    setRazon("");
  };

  const validarTexto = (texto, min, max) => {
    if (texto.length < min && texto.length > max) {
      return false;
    } else {
      return true;
    }
  };

  const validarFyH = (hora,fecha) => {
    const regexFecha = /^(\d{4})-([01]\d|1[0-2])-((0[1-9]|[12]\d|3[01]))$/;
    const regexHora = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (hora.length===null || fecha.length===null) {
      return false;
      
    } else {
      if (regexFecha.test(fecha)) {
        if(regexHora.test(hora)){
        return true;
        }
      } else {
        return false;
      }
    }
  };

  const borrarCard = (posicion) => {
    const arrayFilter = listaAnimales.filter(
      (pos) => pos.posicion !== posicion
    );
    console.log(arrayFilter)
    setListaAnimal(arrayFilter);
  };

  return (
    <div className="py-3  row d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="pb-4 col-12 col-sm-12 col-md-8 col-lg-8">
        <Form.Group className="mb-3">
          <Form.Label>Mascota</Form.Label>
          <Form.Control id="mascota" type="text" placeholder="Ej: El pichi pichi" 
              value={An}
              onChange={(e) => setAnimal(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dueño</Form.Label>
          <Form.Control id="duenio" type="text" placeholder="Ej: Sergio" 
              value={Du}
              onChange={(e) => setDuenio(e.target.value)}/>
        </Form.Group>

        <div className="row d-flex justify-content-between">
          <Form.Group className="mb-3 col-12 col-sm-12 col-md-5 col-lg-5">
            <Form.Label>Fecha</Form.Label>
            <Form.Control id="fecha" type="date" 
              value={Fe}
              onChange={(e) => setFecha(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3 col-12 col-sm-12 col-md-5 col-lg-5">
            <Form.Label>Hora</Form.Label>
            <Form.Control id="hora" type="time" 
              value={Ho}
              onChange={(e) => setHora(e.target.value)}/>
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Razon</Form.Label>
          <Form.Control  id="razon"
            type="text"
            placeholder="Ej: se hace el loco con los perros de la mili pili"
            value={Ra}
            onChange={(e) => setRazon(e.target.value)}
          />
        </Form.Group>
        <div className="row d-flex  justify-content-center">
          <Button
            variant="primary"
            className="col-9 col-sm-9 col-md-4 col-lg-4"
            type="submit"
          >
            Cargar cita
          </Button>
        </div>
      </Form>
      <hr />
      <Agenda className="py-3  row d-flex justify-content-center" lista={listaAnimales} borrar={borrarCard}></Agenda>
    </div>
  );
};

export default Formulario;

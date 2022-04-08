import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola!, Soy <span className="purple">Federico Canesa </span>
            vivo <span className="purple"> Ciudad Autonoma de Buenos Aires, Argentina.</span>
            <br /> <br />Soy Frontend Developer con 1 año de experiencia y me gusta desarrollar sitios o aplicaciones web dando especial importancia al usuario final, y con el objetivo de que cada interfaz sea atractiva y funcional, cumpliendo con los requerimientos solicitados. Para eso me mantengo actualizado y en constante capacitación.
            <br />
            <br />
            Además de programar, algunas otras actividades que me encantan hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ver pelicuas y series
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer libros
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender cosas nuevas
            </li>
          </ul>
          {/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

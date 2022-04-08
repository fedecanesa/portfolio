import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onetech from "../../Assets/Projects/onetech.jpg";
import solucionarte from "../../Assets/Projects/solucionarte.png";
import brillo from "../../Assets/Projects/brillo.png";
import cardiz from "../../Assets/Projects/cardiz.png";


function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Mis últimos <strong className="purple">trabajos </strong>
                </h1>


                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={onetech}
                            title="Onetech"
                            description="Emprendimiento de desarrollo de Software"
                            link="https://www.onetech.ar"
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={solucionarte}
                            title="Solucionarte"
                            description="Plataforma que conecta profesionales de varios rubros con usuarios."
                            link="https://www.solucionarte.ar"
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={brillo}
                            title="Brillo"
                            description="Agencia de marketing digital."
                            link="https://brilloproducciones.com/"
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={cardiz}
                            title="Cardiz"
                            description="Empresa de mudanzas."
                            link="http://cardizmudanzas.com.ar/"
                        />
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default Projects;

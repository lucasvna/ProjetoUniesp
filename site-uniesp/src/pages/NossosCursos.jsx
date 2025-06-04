import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'


const NossosCursos = () => 
    {
  return (
    <div>

  <Container className="py-4">
            <h2 className="mb-4"> Nossos cursos </h2>

             <Row className="g-4">
            
                            <Col md={4}>
                            {/* Card 1 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5"
                                        alt="Medicina Veterinária"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Medicina Veterinária
                                        </Card.Title>
                                        <Card.Text>
                                        O UNIESP agora oferece o curso de Medicina Veterinária. A qualidade você já sabe! É conceito máximo no MEC.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
            
                            <Col md={4}>
                            {/* Card 2 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                                        alt="Sistemas para internet"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Sistemas Para internet 
                                        </Card.Title>
                                        <Card.Text>
                                        O tecnólogo em Sistemas para Internet ocupa-se do desenvolvimento de sistemas coorporativos, aplicativos web e mobile, etc.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
            
                            <Col md={4}>
                            {/* Card 3 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                                        alt="Arquitetura e Urbanismo"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Arquitetura e urbanismo
                                        </Card.Title>
                                        <Card.Text>
                                        Quer se tornar um profissional capacitado para projetar e planejar desde pequenas construções até uma cidade inteira? Este é o seu curso.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                            {/* Card 4 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022"
                                        alt="Ciências contábeis"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Ciências contábeis
                                        </Card.Title>
                                        <Card.Text>
                                        Quer se tornar um profissional especializado no campo contábil? O Bacharelado em Ciências Contábeis do UNIESP é o seu curso.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col md={4}>
                            {/* Card 5 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "https://images.unsplash.com/photo-1715163794292-c6e4d64e3c83?q=80&w=2070"
                                        alt="Design de Interiores"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Design de interiores
                                        </Card.Title>
                                        <Card.Text>
                                        Quer se tornar um especialista no planejamento de ambientes? O curso de Tecnologia em Design de Interiores é sua graduação superior.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                            {/* Card 6 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?q=80&w=1974"
                                        alt="Biomedicina"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Biomedicina
                                        </Card.Title>
                                        <Card.Text>
                                        O curso de Bacharelado em Biomedicina do UNIESP é atual e inovador desenvolvido com a visão de projetar o profissional Biomédico
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
        </Container>

    </div>
  )
}

export default NossosCursos
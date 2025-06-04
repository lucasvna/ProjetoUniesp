import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center" fluid="md">
        <p className="mb-1">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <small>Desenvolvido por Lucas Viana</small>
      </Container>
    </footer>
  )
}

export default Footer
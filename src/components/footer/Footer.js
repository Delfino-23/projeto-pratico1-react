import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Footer = () => {
  return (
    <footer>
      <div className="container-rodape">
        <div className="content-rodape">
          <div className="sec aboutus">
            <h2>Sobre Nós</h2>
            <p>
              Bem-vindo ao nosso universo cinematográfico, onde paixão e cinema se 
              entrelaçam para criar uma experiência única. Somos uma equipe dedicada 
              de entusiastas do cinema, apaixonados por contar histórias fascinantes 
              que ganham vida na tela grande.
            </p>
          </div>

          <div className="sec links">
            <h2>Telas</h2>

            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/contato'>Contato</Link></li>
              <li><Link to='/fotos'>Fotos</Link></li>
              <li><Link to='/comentarios'>Comentários</Link></li>
            </ul>
          </div>
        </div>

        <div className="direitos">
          <p>All rights reserved by: Carlos Eduardo &copy;</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
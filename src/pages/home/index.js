import React from 'react'
import Header from '../../components/header/header';
import './styles.css'
import video from '../../assets/trailer.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <Header/> 
      <div id='banner'></div>
      <div id='trailer-container'>
        <div className='content-trailer'>
          <video controls className='trailer'>
            <source src={video}/>
            Seu navegador não possui suporte para vídeos
          </video>
          <div id="sinopse">
            <p className="description">
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se
              encontra nas profundezas mais sombrias de Gotham City. Com poucos
              aliados confiáveis, o vigilante solitário se estabelece como a
              personificação da vingança para a população.
            </p>
            <button className="btn">Comprar Ingresso</button>
          </div>
        </div>
      </div>
      <Cards />
      <Footer/>
    </>
    
  )
}

export default Home;
import React from 'react'
import Header from '../../components/header/header';
import './styles.css'
import Footer from '../../components/footer/Footer';

const Comentarios = () => {
  return (
    <div>
      <Header />

      <div className="section-comentarios">
        <div className="text">
          <h1>Comentários</h1>
          <p>Aqui estão alguns comentários sobre o filme do Batman</p>
        </div>

        <div className="content">
          <div className="comentario">
            <div id="container">

              <div id="image">
                {/* <img src="https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-close-up-of-person-smiling-like-a-man-has-a-beard-image_2889966.jpg" alt="" /> */}
              </div>
            
              <div id="info">
                <div id="nome">
                  <h1>Sebas Tião</h1>
                </div>

                <div id="texto">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut dolorem, 
                    quod culpa et velit corporis accusamus accusantium hic autem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMENTARIO 2 */}
        <div className="content">
          <div className="comentario">
            <div id="container">

              <div id="image2">
                {/* <img src="https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-close-up-of-person-smiling-like-a-man-has-a-beard-image_2889966.jpg" alt="" /> */}
              </div>
            
              <div id="info">
                <div id="nome">
                  <h1>Camile Souza</h1>
                </div>

                <div id="texto">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut dolorem, 
                    quod culpa et velit corporis accusamus accusantium hic autem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMENTARIO 3 */}
        <div className="content">
          <div className="comentario">
            <div id="container">

              <div id="image3">
                {/* <img src="https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-close-up-of-person-smiling-like-a-man-has-a-beard-image_2889966.jpg" alt="" /> */}
              </div>
            
              <div id="info">
                <div id="nome">
                  <h1>Sara Beatriz</h1>
                </div>

                <div id="texto">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut dolorem, 
                    quod culpa et velit corporis accusamus accusantium hic autem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMENTARIO 4 */}
        <div className="content">
          <div className="comentario">
            <div id="container">

              <div id="image4">
                {/* <img src="https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-close-up-of-person-smiling-like-a-man-has-a-beard-image_2889966.jpg" alt="" /> */}
              </div>
            
              <div id="info">
                <div id="nome">
                  <h1>Antônia</h1>
                </div>

                <div id="texto">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut dolorem, 
                    quod culpa et velit corporis accusamus accusantium hic autem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Comentarios
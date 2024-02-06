import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

function Fotos() {
  return (
    <div>
        <Header />
        <div class="fotos">
            <div id="texto">
                <h1>Fotos</h1>
            </div>

              <div class="cards">
                <Link href="#">
                    <img src="https://images4.alphacoders.com/113/thumb-440-1137512.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images.alphacoders.com/120/thumb-440-1207356.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images3.alphacoders.com/127/thumb-440-1274989.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images2.alphacoders.com/133/thumb-440-1331228.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images6.alphacoders.com/121/thumb-440-1210774.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images.alphacoders.com/119/thumb-440-1199262.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images8.alphacoders.com/132/thumb-440-1329247.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images3.alphacoders.com/132/thumb-440-1327828.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images3.alphacoders.com/133/thumb-440-1330515.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images8.alphacoders.com/131/thumb-440-1318215.webp" alt=""/>
                </Link>

                <Link href="#">
                    <img src="https://images.alphacoders.com/131/thumb-440-1318214.webp" alt=""/>
                </Link>
              </div>
          </div>

          <Footer />
    </div>
  )
}

export default Fotos;
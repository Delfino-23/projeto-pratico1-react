import React from 'react'
import Header from '../../components/header/header'
import './styles.css'
import Footer from '../../components/footer/Footer';

function Contato() {
  return (
    <div>
        <Header />
        
        <div className="contato-form">
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name='acesskey' value={"739e6701-0dfb-489e-a614-3f9aa1a9533c"} />
            <input type="hidden" name='redirectTo' value={"contato.js"} />

            {/* <!-- NOME -->
            <!-- <label for="inputNome">Nome</label> --> */}
            <input type="text" name="name" class="inputBox" placeholder="Nome" required />

            {/* <!-- EMAIL -->
            <!-- <label for="inputEmail">Email</label> --> */}
            <input type="email" name="email" class="inputBox" placeholder="Email" required />

            {/* <!-- MENSAGEM -->
            <!-- <label for="inputMensagem">Mensagem</label> --> */}
            <textarea name="message" id="textareaMensagem" cols="30" rows="10" required 
            placeholder="Mensagem..."></textarea>

            <button class="button">Enviar Mensagem</button>
          </form>
        </div>

        <Footer />
    </div>
  )
}

export default Contato;
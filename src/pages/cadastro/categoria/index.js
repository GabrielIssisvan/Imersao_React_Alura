import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';
import '../../../styles/settings/colors.css';
import '../../../styles/reset.css';

function CadastroCategoria () {
    return(
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>



    <Link to="/">
        <h1>Voltar para home</h1>
    </Link>
    </PageDefault>

    );

};

export default CadastroCategoria
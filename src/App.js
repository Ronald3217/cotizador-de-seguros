import { useState } from 'react'
import styled from '@emotion/styled';

import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen'
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: '',
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  const [cargando, guardarCargando] = useState(false)

  const { cotizacion, datos } = resumen

  return (
    <Contenedor>
      <Header titulo='Cotizador de Seguros' />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando && (
          <Spinner />
        )}

        {!cargando && (
          <>
            <Resumen
              datos={datos}
            />
            <Resultado
              cotizacion={cotizacion}
            />
          </>
        )}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;
const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion.trim() === '' ? 
            <Mensaje>Elige Marca, Año y Tipo de seguro</Mensaje> 
            :(
            <ResultadoCotizacion>
                <TransitionGroup
                    component='span'
                    className='resultado'
                >
                    <CSSTransition
                        classNames='resultado'
                        key={cotizacion}
                        timeout={{enter:500,exit:500}}
                    >
                        <TextoCotizacion>El total es: $ <span>{cotizacion}</span></TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
            )
        )
     );
}
 
export default Resultado;
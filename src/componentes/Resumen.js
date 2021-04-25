import styled from '@emotion/styled';
import { primerMayuscula } from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
    border-radius: 2.5%;
`;
const Resumen = ({datos}) => {
    const { marca, plan, year } = datos
    //evaluar si hay datos
    if ( marca === '') return null
    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;
import styled from 'styled-components';

export const ContainerErrorStyled = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: auto auto auto;

@media (max-width: 768px){
    grid-template-columns: 1fr;
    justify-items: center;
}
`;

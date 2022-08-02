import styled from 'styled-components';

export const PContainer = styled.div`
max-width: 16.931rem;
margin-bottom: 3.906rem;
@media (max-width: 768px) {
max-width:18rem;
}
@media (max-width: 400px) {
    max-width: 18rem;
margin-bottom: 2.5rem;
}
`;

export const ParagraphErrorStyled = styled.p`
 font-family: 'Space Mono', monospace !important;
    font-style: normal;
    font-weight: 400;
    font-size: 1.063rem;
    line-height: 1.6rem;
    letter-spacing: -0.035em;    
    margin: 0;
`;
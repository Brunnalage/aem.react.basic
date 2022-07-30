import styled from 'styled-components';

export const TitleContainer = styled.div`
max-width: 26rem;
margin-bottom: 1.594rem;
`;

export const TitleErrorStyled = styled.h2`
font-family: 'Space Mono', monospace !important;
font-style: normal;
font-weight: 700;
font-size: 2.844rem;
line-height: 4.219rem;
letter-spacing: -0.035em;
color: #333333;
text-align:left;
margin: 0;
@media (max-width: 768px){
    max-width:20rem;
}

@media (max-width: 400px){
    font-size: 2.25rem;
    line-height: 3.5rem;
    max-width:18.75rem;
}
`;
import styled from "styled-components";

export const FooterErrorContainer = styled.div`
margin-top: 17.813rem;
align-items: center;
display: flex;
justify-content: center;
gap: 0.313rem;
@media (max-width: 768px){
margin-top:10rem;
}
@media (max-width: 420px){
margin-top:5.5rem;
}
@media (max-height: 740px){
 margin-top:2.4rem;  
} 
`;

export const TextFooter = styled.span`
font-family: 'Montserrat', sans-serif !important;
font-style: normal;
font-weight: 500;
font-size: 0.875rem;
line-height: 1.063rem;
text-align: center;

&.username{
font-weight: 700;
text-decoration: underline;
}
`;

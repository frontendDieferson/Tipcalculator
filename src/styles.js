import styled from 'styled-components';

export const Image = styled.img`
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: auto;
    align-self: center;
    width: 200px;
    height: 200px;

    @media (max-width: 414px) {
    flex-direction: column;
   
    margin: auto;

    }
`;

export const Container = styled.div`
    
    display: grid;
    
    justify-content: center;
    align-items: center;
    align-content: center;

    align-self: center;
    
    background: #151A6A;
    margin: 1%;
    padding: 3%;
    
    @media (max-width: 414px) {
    flex-direction: column;
    

    }
    
    
`;

export const Footer = styled.p`

    display: grid;
    
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;

    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-top: 50px;

  
`;

export const footer = styled.a`
    text-decoration: none;

`;

export const ImageFooter = styled.img`

    right: 10px;
    
   

`;
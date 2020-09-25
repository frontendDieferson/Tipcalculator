import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Image, Footer } from './styles';



const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #FFF;
  margin: auto;

  @media (max-width: 414px) {
    flex-direction: column;
    

    }
  

`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #FFF;
  margin: auto;

  @media (max-width: 414px) {
    flex-direction: column;
   

    }
  
  

`;

const Result = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #FFF;
  margin: auto;

  @media (max-width: 414px) {
    flex-direction: column;
   

    }
  
`;

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #151A6A;
  border-radius: 8px;
  color: #151A6A;
  font-family: 'Roboto', sans-serif;
  margin: 8px;
  
  @media (max-width: 414px) {
    flex-direction: column;
    width:280px;

    }

`;

export const A = styled.a`
  text-decoration:none;
  color: #FFF;
  margin: 4px;
  font-weight:bold;
  
`;




function App() {

  const [pct, setPct] = useState(10);
  const [conta, setConta] = useState();

  

  return (
    
    <Container>
    
      <Image src="./assets/dinheiro.svg" />
  
      <Title>Calculadora de Gorjeta</Title>

      <Paragraph>Quanto deu a conta?</Paragraph>
      <Input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))} />
      
      <Paragraph>Qual a porcentagem de gorjeta?</Paragraph>
      <Input type="number" value={pct} onChange={(e)=>setPct(parseFloat(e.target.value))} />
      
      <hr/>

      {conta > 0 &&
        <Container>
          <Paragraph>Sub-total: R$ {conta}</Paragraph>
          <Paragraph>Gorjeta ({pct}%): R$ {(pct/100) * conta}</Paragraph>
          <Result>Total: R$ {conta + ((pct/100) * conta)}</Result>
        </Container>
      }
      
      <Footer>
        <p>Desenvolvido por | <A href="https://github.com/frontendDieferson" 
        target="_blank">Dieferson Soares</A></p>
      </Footer>
    </Container>

    
  );
}

export default App;
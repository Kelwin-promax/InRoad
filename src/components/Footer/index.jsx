import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  padding: 40px 5%;
  text-align: center;
  margin-top: 50px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2026 ESCORTinRoad Transporte e Logística. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

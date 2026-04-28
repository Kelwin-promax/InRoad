import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const TopBar = styled.div`
  background: #E64A19;
  color: white;
  padding: 8px 8%;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 500;
  .item { display: flex; align-items: center; gap: 5px; }
  @media (max-width: 768px) { display: none; }
`;

const NavBar = styled.nav`
  background: white;
  padding: 15px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  @media (max-width: 768px) {
    padding: 10px 5%;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .icon { background: #E64A19; color: white; padding: 8px; border-radius: 8px; }
  .text { 
    line-height: 1;
    strong { display: block; font-size: 1.2rem; color: #0B0B2A; }
    span { font-size: 0.7rem; color: #E64A19; font-weight: bold; }
  }
  @media (max-width: 480px) {
    .icon { padding: 5px; }
    .text strong { font-size: 1rem; }
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 25px;
  a { 
    text-decoration: none; 
    color: #333; 
    font-weight: 700; 
    font-size: 0.9rem;
    transition: color 0.3s ease;
    &:hover { color: #E64A19; }
  }
  .active { color: #E64A19; }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    order: 2; /* Posiciona o menu abaixo do logo e antes do botão no mobile */
  }
  @media (max-width: 480px) {
    gap: 15px;
    flex-wrap: wrap;
    a { font-size: 0.8rem; }
  }
`;

const NavButton = styled.button`
  background: #E64A19;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 768px) { 
    width: 100%; 
    order: 3; /* Garante que o botão fique abaixo no mobile se necessário */
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <TopBar>
        <div className="item"><Icon name="phone" size="14px"/> 0800 777 1234</div>
        <div className="item">Atendimento 24h - 7 dias por semana</div>
      </TopBar>
      <NavBar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoBox>
            <div className="icon"><Icon name="local_shipping" size="24px"/></div>
            <div className="text"><strong>ESCORTinRoad</strong><span>transporte e logística</span></div>
          </LogoBox>
        </Link>
        <Menu>
          <Link to="/">Início</Link>
          <a href="/#servicos">Serviços</a>
          <Link to="/tracking">Rastreamento</Link>
          <a href="/#contato">Contato</a>
        </Menu>
        <Link to="/quote" style={{ textDecoration: 'none' }}>
          <NavButton>Solicitar Cotação</NavButton>
        </Link>
      </NavBar>
    </HeaderWrapper>
  );
}
import styled from 'styled-components';
import Icon from '../../components/Icon';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  padding: 160px 8% 80px;
  background: linear-gradient(135deg, #0B0B2A 0%, #1a1a3a 100%);
  color: white;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 120px;
  }
  @media (max-width: 480px) { padding: 100px 5% 40px; gap: 30px; }
`;

const HeroText = styled.div`
  .tag { background: rgba(230, 74, 25, 0.2); color: #E64A19; padding: 8px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; }
  h1 { 
    font-size: 3.5rem; margin: 20px 0; line-height: 1.1; font-weight: 900; 
    @media (max-width: 768px) { font-size: 2.8rem; }
    @media (max-width: 480px) { font-size: 2.2rem; }
  }
  .orange { color: #E64A19; }
  .yellow { color: #FFD700; }
  p { color: #b0b0b0; margin-bottom: 35px; line-height: 1.6; font-size: 1.1rem; }
  .hero-checks {
    display: flex; gap: 20px; margin-top: 30px;
    span { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; font-weight: 600; }
    @media (max-width: 480px) { flex-direction: column; }
  }
  .hero-btns {
    display: flex; gap: 15px;
    @media (max-width: 968px) { justify-content: center; }
    @media (max-width: 480px) { flex-direction: column; }
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  @media (max-width: 480px) { height: 300px; }
`;

const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #E64A19;
  color: white;
  padding: 40px 8%;
  text-align: center;
  h3 { font-size: 2.2rem; font-weight: 800; }
  p { font-size: 0.75rem; text-transform: uppercase; opacity: 0.9; margin-top: 5px; }
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); gap: 30px; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const SectionHeader = styled.div`
  text-align: center;
  padding: 80px 8% 40px;
  h2 { 
    font-size: 2.5rem; color: #111; font-weight: 800;
    @media (max-width: 480px) { font-size: 1.8rem; }
  }
  p { color: #666; margin-top: 10px; font-size: 1.1rem; }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 0 8%;
  @media (max-width: 968px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 580px) { grid-template-columns: 1fr; }
`;

const WhyCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  h3 { margin: 15px 0; color: #0B0B2A; }
  p { color: #777; font-size: 0.9rem; line-height: 1.6; }
  .icon-circle { background: #E64A19; color: white; padding: 15px; border-radius: 50%; display: inline-block; }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 8%;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  border-top: 5px solid ${props => props.topColor};
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  h3 { margin: 15px 0; color: #0B0B2A; }
  p { color: #777; font-size: 0.9rem; line-height: 1.6; }
  .icon-box { color: ${props => props.topColor}; margin-bottom: 20px; }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 8% 100px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  .stars { color: #FFD700; margin-bottom: 15px; }
  p { font-style: italic; color: #555; line-height: 1.6; margin-bottom: 20px; }
  .author { font-weight: 700; color: #0B0B2A; }
  .role { font-size: 0.8rem; color: #888; }
`;

const CtaSection = styled.section`
  background: #0B0B2A;
  color: white;
  padding: 80px 8%;
  text-align: center;
  h2 { 
    font-size: 2.5rem; font-weight: 800; 
    @media (max-width: 480px) { font-size: 1.8rem; }
  }
  .btns { display: flex; justify-content: center; gap: 20px; margin-top: 40px; }
  @media (max-width: 600px) { .btns { flex-direction: column; align-items: center; } }
`;

const FooterMain = styled.footer`
  background: #0B0B2A;
  color: white;
  padding: 80px 8% 40px;
  scroll-margin-top: 100px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  h4 { font-size: 1.2rem; margin-bottom: 25px; position: relative; }
  ul { list-style: none; }
  li { color: #ccc; margin-bottom: 12px; font-size: 0.9rem; }
  .social-grid { display: flex; gap: 15px; margin-top: 20px; }
  .social-item { background: #1a1a3a; padding: 10px; border-radius: 8px; }
  @media (max-width: 968px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 580px) { 
    grid-template-columns: 1fr; 
    text-align: center;
    .social-grid { justify-content: center; }
  }
`;

const FooterLogoWrapper = styled.div`
  display: flex; gap: 10px; align-items: center; margin-bottom: 20px;
  @media (max-width: 580px) { justify-content: center; }
`;

export default function Home() {
  return (
    <main>
      <HeroSection>
        <HeroText>
          <span className="tag">Frete de Logística Nacional</span>
          <h1>Logística que Move o <span className="orange">Brasil</span></h1>
          <p>A ESCORTinRoad oferece soluções completas em transporte rodoviário com tecnologia e eficiência para sua empresa crescer.</p>
          <div className="hero-btns">
            <Link to="/quote">
              <button style={{background:'#E64A19', color:'white', border:'none', padding:'16px 32px', borderRadius:'8px', fontWeight:'800'}}>Solicitar Cotação Grátis</button>
            </Link>
            <button style={{background:'transparent', color:'white', border:'2px solid white', padding:'16px 32px', borderRadius:'8px', fontWeight:'800'}}>Registrar agora</button>
          </div>
          <div className="hero-checks">
            <span><Icon name="check_circle" color="#4CAF50" size="20px"/> Atendimento 24h</span>
            <span><Icon name="check_circle" color="#4CAF50" size="20px"/> Cobertura Nacional</span>
          </div>
        </HeroText>
        <HeroImageContainer>
          <HeroCarousel />
        </HeroImageContainer>
      </HeroSection>

      <StatsBar>
        <div><h3>15+</h3><p>Anos de Experiência</p></div>
        <div><h3>800+</h3><p>Cargas Mensais</p></div>
        <div><h3>100k</h3><p>KM Rodados/Mês</p></div>
        <div><h3>99%</h3><p>Satisfação de Clientes</p></div>
      </StatsBar>

      <SectionHeader>
        <h2>Por que Escolher a Escort?</h2>
        <p>Somos referência em transporte rodoviário com diferenciais que fazem a diferença</p>
      </SectionHeader>

      <WhyGrid>
        <WhyCard>
          <Icon name="schedule" className="icon-circle" size="35px"/>
          <h3>Agilidade nas Entregas</h3>
          <p>Prazos garantidos e cumpridos com pontualidade em todas as rotas do Brasil.</p>
        </WhyCard>
        <WhyCard>
          <Icon name="shield" className="icon-circle" size="35px"/>
          <h3>Segurança Garantida</h3>
          <p>Monitoramento 24h, seguros completos e equipe especializada.</p>
        </WhyCard>
        <WhyCard>
          <Icon name="bolt" className="icon-circle" size="35px"/>
          <h3>Tecnologia Avançada</h3>
          <p>Plataforma digital para gestão completa da sua carga.</p>
        </WhyCard>
        <WhyCard>
          <Icon name="groups" className="icon-circle" size="35px"/>
          <h3>Atendimento Personalizado</h3>
          <p>Equipe dedicada para atender suas necessidades específicas.</p>
        </WhyCard>
      </WhyGrid>

      <div id="servicos" style={{background: '#eee', paddingBottom: '80px', scrollMarginTop: '100px'}}>
        <SectionHeader>
          <h2>Nossos Serviços</h2>
          <p>Soluções completas e personalizadas para cada tipo de necessidade</p>
        </SectionHeader>
        <ServicesGrid>
          <ServiceCard topColor="#00A8FF">
            <Icon name="view_in_ar" className="icon-box" size="60px"/>
            <h3>Carga Fracionada</h3>
            <p>Ideal para pequenos volumes que não ocupam um caminhão inteiro.</p>
          </ServiceCard>
          <ServiceCard topColor="#E64A19">
            <Icon name="local_shipping" className="icon-box" size="60px"/>
            <h3>Carga Completa (FTL)</h3>
            <p>Transporte dedicado para grandes volumes com exclusividade total.</p>
          </ServiceCard>
          <ServiceCard topColor="#4CAF50">
            <Icon name="warehouse" className="icon-box" size="60px"/>
            <h3>Armazenagem</h3>
            <p>Gestão de estoque e infraestrutura para guarda de mercadorias.</p>
          </ServiceCard>
        </ServicesGrid>
      </div>

      <SectionHeader>
        <h2>O que Nossos Clientes Dizem</h2>
        <p>Confiança conquistada através de resultados</p>
      </SectionHeader>

      <TestimonialGrid>
        <TestimonialCard>
          <div className="stars">
            <Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/>
          </div>
          <p>"Parceiro de anos! A ESCORTinRoad sempre cumpre os prazos e tem um excelente custo-benefício."</p>
          <div className="author">Mário Silva</div>
          <div className="role">Indústria XYZ</div>
        </TestimonialCard>
        <TestimonialCard>
          <div className="stars">
            <Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/>
          </div>
          <p>"Profissionalismo e comprometimento em todas as entregas. Recomendo!"</p>
          <div className="author">João Santos</div>
          <div className="role">Comércio ABC</div>
        </TestimonialCard>
        <TestimonialCard>
          <div className="stars">
            <Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/><Icon name="star" size="18px"/>
          </div>
          <p>"Sistema de rastreamento impecável. Sempre sabemos onde está nossa carga."</p>
          <div className="author">Ana Costa</div>
          <div className="role">E-commerce Tech</div>
        </TestimonialCard>
      </TestimonialGrid>

      <CtaSection>
        <h2>Pronto para Começar?</h2>
        <p>Faça uma cotação gratuita e descubra como podemos otimizar sua logística</p>
        <div className="btns">
          <Link to="/quote">
            <button style={{background:'white', color:'#E64A19', border:'none', padding:'16px 40px', borderRadius:'8px', fontWeight:'800'}}>Solicitar Cotação Grátis &rarr;</button>
          </Link>
          <button style={{background:'transparent', color:'white', border:'2px solid white', padding:'16px 40px', borderRadius:'8px', fontWeight:'800'}}>Ligar: 0800 777 1234</button>
        </div>
      </CtaSection>

      <FooterMain id="contato">
        <div>
          <FooterLogoWrapper>
            <Icon name="local_shipping" color="#E64A19" size="30px"/>
            <strong style={{fontSize:'1.4rem'}}>ESCORTinRoad</strong>
          </FooterLogoWrapper>
          <p style={{fontSize:'0.85rem', color:'#ccc', lineHeight:'1.6'}}>Referência em soluções logísticas com excelência em transporte rodoviário de cargas.</p>
          <div className="social-grid">
            <div className="social-item"><Icon name="facebook" size="18px"/></div>
            <div className="social-item"><Icon name="camera_alt" size="18px"/></div>
          </div>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul><li>Início</li><li>Serviços</li><li>Rastreamento</li><li>Contato</li></ul>
        </div>
        <div>
          <h4>Serviços</h4>
          <ul><li>Carga Fracionada</li><li>Carga Completa</li><li>Armazenagem</li><li>Entrega Expressa</li></ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><Icon name="phone" size="16px"/> 0800 777 1234</li>
            <li><Icon name="mail" size="16px"/> cotacao@inroad.com.br</li>
            <li><Icon name="place" size="16px"/> Av. Logística, 1000 - SP</li>
          </ul>
        </div>
      </FooterMain>
    </main>
  );
}
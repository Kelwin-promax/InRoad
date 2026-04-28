import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const QuoteContainer = styled.div`
  padding: 140px 8% 80px;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 180px;
  }
`;

const QuoteHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  max-width: 600px;

  h1 { font-size: 2.5rem; color: #0B0B2A; margin-bottom: 15px; font-weight: 800; }
  p { color: #666; font-size: 1.1rem; }
`;

const FormCard = styled.form`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 25px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label { font-weight: 700; font-size: 0.9rem; color: #333; }
  input, select, textarea {
    padding: 12px 15px;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
    &:focus { border-color: #E64A19; }
  }
  textarea { grid-column: span 2; height: 100px; resize: none; }
  @media (max-width: 600px) { textarea { grid-column: span 1; } }
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  background: #E64A19;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 1.1rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.2s;

  &:hover { transform: translateY(-2px); background: #d34316; }
  @media (max-width: 600px) { grid-column: span 1; }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  width: 100%;
  max-width: 800px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const BenefitItem = styled.div`
  text-align: center;
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  h4 { margin: 15px 0 10px; color: #0B0B2A; font-weight: 700; }
  p { font-size: 0.85rem; color: #777; line-height: 1.4; }
  .icon-wrap { 
    color: #E64A19; 
    background: #fff3f0; 
    padding: 15px; 
    border-radius: 50%; 
    display: inline-block;
  }
`;

export default function Quote() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.");
  };

  return (
    <QuoteContainer>
      <QuoteHeader>
        <h1>Solicitar Cotação</h1>
        <p>Preencha os dados abaixo e receba uma proposta personalizada para sua necessidade logística.</p>
      </QuoteHeader>

      <FormCard onSubmit={handleSubmit}>
        <FormGroup>
          <label>Nome Completo</label>
          <input type="text" placeholder="Seu nome ou nome da empresa" required />
        </FormGroup>
        <FormGroup>
          <label>E-mail Corporativo</label>
          <input type="email" placeholder="email@empresa.com.br" required />
        </FormGroup>
        <FormGroup>
          <label>Cidade de Origem</label>
          <input type="text" placeholder="Ex: São Paulo - SP" required />
        </FormGroup>
        <FormGroup>
          <label>Cidade de Destino</label>
          <input type="text" placeholder="Ex: Rio de Janeiro - RJ" required />
        </FormGroup>
        <FormGroup style={{gridColumn: 'span 2'}}>
          <label>Descrição da Carga</label>
          <textarea placeholder="Fale um pouco sobre o peso, dimensões ou tipo de mercadoria..." required />
        </FormGroup>
        <SubmitButton type="submit">
          Enviar Solicitação <Icon name="send" size="20px" />
        </SubmitButton>
      </FormCard>

      <BenefitsGrid>
        <BenefitItem>
          <div className="icon-wrap"><Icon name="timer" size="30px" /></div>
          <h4>Resposta Rápida</h4>
          <p>Nossa equipe comercial analisa sua demanda e responde em até 2 horas úteis.</p>
        </BenefitItem>
        <BenefitItem>
          <div className="icon-wrap"><Icon name="verified_user" size="30px" /></div>
          <h4>Segurança Total</h4>
          <p>Seus dados estão protegidos e sua carga estará 100% segurada conosco.</p>
        </BenefitItem>
        <BenefitItem>
          <div className="icon-wrap"><Icon name="support_agent" size="30px" /></div>
          <h4>Consultoria Grátis</h4>
          <p>Dúvidas sobre o melhor modal? Nossos especialistas ajudam você a economizar.</p>
        </BenefitItem>
      </BenefitsGrid>
    </QuoteContainer>
  );
}
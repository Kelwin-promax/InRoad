import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div` 
  padding: 140px 5% 60px;
  @media (max-width: 768px) { padding-top: 200px; }
`;
const StatusCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-left: 5px solid ${props => props.theme.colors.primary};
  max-width: 800px;
  margin-top: 20px;
`;

export default function Tracking() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando consumo de API de rastreio
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Não foi possível carregar os dados do rastreamento. Tente novamente mais tarde.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Container><h2>Buscando informações da carga...</h2></Container>;
  
  if (error) return (
    <Container>
      <h2 style={{color: 'red'}}>Erro:</h2>
      <p>{error}</p>
    </Container>
  );

  return (
    <Container>
      <h1>Rastreamento de Carga</h1>
      <p>Confira o status atual da sua mercadoria:</p>
      <br />
      <StatusCard>
        <h3>ID do Pedido: #{data.id}</h3>
        <p><strong>Status:</strong> Em trânsito para São Paulo</p>
        <p><strong>Última atualização:</strong> {data.title}</p>
      </StatusCard>
    </Container>
  );
}

import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadContainer = styled.div` padding: 10px 5%; background: #eee; font-size: 0.9rem; `;

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <BreadContainer>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => (
        <span key={index}> / {name}</span>
      ))}
    </BreadContainer>
  );
}

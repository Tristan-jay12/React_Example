import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

function App() {
  return (
    <>
      <MyHeader>Welcome!</MyHeader>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
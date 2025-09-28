import { createRoot } from 'react-dom/client';
import './MyStyle.scss';

function MyHeader() {
  return (
    <div>
    <h1>My Header 1</h1>
    <h2>My Header 2</h2>
    <h3>My Header 3</h3>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyHeader />
);
import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}</h1>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);
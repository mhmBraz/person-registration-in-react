import ReactDOM from 'react-dom/client';
import { ApplicationContextProvider } from './Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApplicationContextProvider/>
);
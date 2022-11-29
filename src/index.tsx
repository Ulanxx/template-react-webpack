import { createRoot } from 'react-dom/client';

import { Hello } from './components/Hello';

function App() {
  return <Hello name="world" />;
}

const container = document.getElementById('react-mount-point');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
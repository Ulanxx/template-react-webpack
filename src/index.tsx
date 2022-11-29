import { render } from 'react-dom';

import { Hello } from './components/Hello';

function App() {
  return <Hello name="world" />;
}

render(<App />, document.getElementById('react-mount-point'));

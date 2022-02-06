import './app.scss';

import Shifter from './components/common/shifter/Shifter';
import Nav from './components/nav/Nav';
import Routing from './components/routes/Routing';

function App() {
  return (
    <div className='app'>
      <Shifter />
      <Nav />
      <Routing />
    </div>
  );
}

export default App;

import './app.scss';

import ScrollToTop from './components/common/scrollTop/ScrollToTop';
import ScrollTopBehavior from './components/common/scrollTopBehavior/ScrollTopBehavior';
import Shifter from './components/common/shifter/Shifter';
import Nav from './components/nav/Nav';
import Routing from './components/routes/Routing';

function App() {
  return (
    <div className='app'>
      <ScrollToTop />
      <ScrollTopBehavior />
      <Shifter />
      <Nav />
      <Routing />
    </div>
  );
}

export default App;

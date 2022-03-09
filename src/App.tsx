import './app.scss';

import ScrollToTop from './components/common/scrollTop/ScrollToTop';
import Shifter from './components/common/shifter/Shifter';
import Nav from './components/nav/Nav';
import Routing from './components/routes/Routing';
import useAnimScroll from './hooks/useAnimScroll/AnimScroll';

function App() {
  useAnimScroll();
  return (
    <div className='app'>
      <ScrollToTop />
      <Shifter />
      <Nav />
      <Routing />
    </div>
  );
}

export default App;

import './home.scss';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import CustomButton from '../../components/common/button/CustomButton';
// type HomeType = {
//   data: string;
// };

const Home = () => {
  const iconArrowRight = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <main className='home'>
      <div className='home--container'>
        <div className='color-block'></div>
        <div className='home--wrapper'>
          <div className='home--content'>
            <h1 className='title title-orange home--title'>
              I’M VLADIMIR LIANKEVICH.
              <br /> <span>FRONT-END DEVELOPER</span>
            </h1>
            <p className='home--description'>
              I`m a Front-end Developer with experience creating landing page,
              SPA with React/Redux (JS/TS). I`m from Minsk. I like work with new
              people. New people new Experiences.
            </p>
            <CustomButton element={iconArrowRight} value='more about me' />
          </div>
          <TransitionGroup>
            <CSSTransition classNames='option' timeout={200}>
              <div className='home--photo'></div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </main>
  );
};

export default Home;

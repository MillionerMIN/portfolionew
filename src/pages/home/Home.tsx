import './home.scss';

// type HomeType = {
//   data: string;
// };

export const Home = () => {
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
          </div>
          <div className='home--photo'></div>
        </div>
      </div>
    </main>
  );
};

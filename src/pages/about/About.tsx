import './about.scss';

import Title from '../../components/common/title/Title';

const About = () => {
  return (
    <>
      <Title title='about' span='me' bg='resume' />
      <section className='about about-mr'></section>;
    </>
  );
};

export default About;

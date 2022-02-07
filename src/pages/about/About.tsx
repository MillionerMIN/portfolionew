import './about.scss';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BoxStat from '../../components/common/box-stat/BoxStat';
import CustomButton from '../../components/common/button/CustomButton';
import ProgressBar from '../../components/common/progress-bar/ProgressBar';
import ResumeBox from '../../components/common/resume-box/ResumeBox';
import Siparator from '../../components/common/siparator/Siparator';
import Title from '../../components/common/title/Title';

const personalData = [
  { title: 'First Name', value: 'Vladimir' },
  { title: 'Last Name', value: 'Liankevich' },
  { title: 'Age', value: '34' },
  { title: 'Nationality', value: 'Belarusian' },
  { title: 'Freelance', value: 'Available' },
  { title: 'Address', value: 'Minsk' },
  { title: 'Phone', value: '+375447766214' },
  { title: 'Email', value: 'vladimirlyn@gmail.com' },
  { title: 'LinkedIn', value: 'vladimirliankevich' },
  { title: 'Langues', value: 'Russian, English' },
];

const boxData = [
  { years: '1', desc: 'years of', pref: 'experience' },
  { years: '2', desc: 'completed', pref: 'projects' },
  { years: '2', desc: 'happy', pref: 'customers' },
  { years: '0', desc: 'awards', pref: 'won' },
];

const skillsData = [
  { skill: 'React', percent: 55 },
  { skill: 'Redux', percent: 35 },
  { skill: 'JavaScript', percent: 66 },
  { skill: 'TypeScript', percent: 45 },
  { skill: 'HTML', percent: 74 },
  { skill: 'CSS', percent: 55 },
  { skill: 'Bootstrap', percent: 63 },
  { skill: 'Git', percent: 60 },
];

const About = () => {
  const listItems = personalData.map((item, index) => {
    return (
      <li key={index}>
        <span className='about--name'>{item.title}: </span>
        <span className='about--value'>{item.value}</span>
      </li>
    );
  });

  const boxStats = boxData.map((item, index) => (
    <BoxStat key={index} years={item.years} desc={item.desc} pref={item.pref} />
  ));

  const progressSkills = skillsData.map((item, index) => {
    return (
      <div className='skill .skill-pd' key={index}>
        <ProgressBar percentage={item.percent} />
        <h6 className='skill--text'>{item.skill}</h6>
      </div>
    );
  });

  const iconDownload = <FontAwesomeIcon icon={faDownload} />;
  return (
    <>
      <Title title='about' span='me' bg='resume' />
      <section className='about about-mr'>
        <div className='about--container'>
          <div className='about--wrapper'>
            <div className='about--person'>
              <h3 className='about--title'>personal infos</h3>
              <ul className='about--list'>{listItems}</ul>
              <CustomButton element={iconDownload} value='download cv' />
            </div>
            <div className='about--box-stats'>{boxStats}</div>
          </div>
          <Siparator />
          <div className='about--skills'>
            <h3 className='about--title about--title-pd about--title-center'>
              my skills
            </h3>
            <div className='about--progress'>{progressSkills}</div>
          </div>
          <Siparator />
          <div className='about--experience'>
            <h3 className='about--title about--title-pd about--title-center'>
              Experience & Education
            </h3>
            <div className='about--resume'>
              <ResumeBox
                time='gghg'
                specialty='fhft'
                place='hfjg'
                desc='fhfjggf'
              />
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default About;

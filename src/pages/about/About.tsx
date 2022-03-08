import './about.scss';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BoxStat from '../../components/common/box-stat/BoxStat';
import CustomButton from '../../components/common/button/CustomButton';
import ProgressBar from '../../components/common/progress-bar/ProgressBar';
import ResumeBox from '../../components/common/resume-box/ResumeBox';
import Separator from '../../components/common/separator/Separator';
import Title from '../../components/common/title/Title';
import useAnimScroll from '../../hooks/useAnimScroll/AnimScroll';

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

const experienceData = [
  {
    time: 'May 2021 - Present',
    specialty: 'Front-end developer',
    place: 'Freelance',
    desc: 'React development using redux, react-redux, react-routerdom, redux-thunk, axios, formik, ant-design libraries. Work with Hooks, TypeScript. Reusable components development experience in cross-browser, adaptive, responsive development, CSS-preprocessors. Implemented flowauthorization, notification, forms (Formik and Redux-form)',
  },
  {
    time: 'Feb 2012 - Aug 2021',
    specialty: 'Work manager (foreman)',
    place: 'UM-70 OJSC Trest 15 Spetsstroy',
    desc: 'Organization of construction production.Communication and reporting to the customer. Quality control and timing of work. Paperwork for putting objects into operation',
  },
  {
    time: 'Aug 2007 - Jan 2012',
    specialty: 'Work manager (foreman)',
    place: 'OJSC Stroymaztrest',
    desc: 'Distribution of production tasks. Distribution of wages among employees. Communication with the customer',
  },
];

const educationData = [
  {
    time: '2021',
    specialty: 'Front-end Developer',
    place: 'IT-Incubator',
    desc: 'React, Redux, JavaScript, TypeScript',
  },
  {
    time: '2020',
    specialty: 'Front-end Developer',
    place: 'Udemy',
    desc: 'React, Redux, JavaScript, HTML, CSS, SASS, Gulp, Git, GitHub',
  },
  {
    time: '2019 - 2023 (extramural)',
    specialty: 'Civil Engineering',
    place: 'Belarusian National Technical University',
    desc: 'Industrial and civil construction',
  },
  {
    time: '2003 - 2007',
    specialty: 'Civil Engineering',
    place:
      'branch BNTU «Minsk State College of Architecture and Civil Engineering»',
    desc: 'Industrial and civil construction',
  },
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

  const experience = experienceData.map((item, index) => (
    <ResumeBox
      key={index}
      time={item.time}
      specialty={item.specialty}
      place={item.place}
      desc={item.desc}
    />
  ));

  const education = educationData.map((item, index) => (
    <ResumeBox
      key={index}
      time={item.time}
      specialty={item.specialty}
      place={item.place}
      desc={item.desc}
    />
  ));

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
          <Separator />
          <div className='about--skills'>
            <h3 className='about--title about--title-pd about--title-center'>
              my skills
            </h3>
            <div className='about--progress'>{progressSkills}</div>
          </div>
          <Separator />
          <div className='about--experience'>
            <h3 className='about--title about--title-pd about--title-center'>
              Experience & Education
            </h3>
            <div className='about--resume'>
              <div className='about--left'>{experience}</div>
              <div className='about--right'>{education}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

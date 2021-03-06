import './resumeBox.scss';

import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ResumeBoxType = {
  time: string;
  specialty: string;
  place: string;
  desc: string;
};

const ResumeBox = (props: ResumeBoxType) => {
  const { time, specialty, place, desc } = props;
  return (
    <div className='resume-box resume-box-mr resume-box-pd'>
      <div className='resume-box--icon'>
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <span className='resume-box--time'>{time}</span>
      <h5 className='resume-box--title'>
        {specialty}
        <span className='resume-box--place'>{place}</span>
      </h5>
      <p className='resume-box--desc'>{desc}</p>
    </div>
  );
};

export default ResumeBox;

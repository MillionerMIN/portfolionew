import 'react-circular-progressbar/dist/styles.css';
import './progressBar.scss';

import { CircularProgressbar } from 'react-circular-progressbar';

type ProgressBarPropsType = {
  percentage: number;
};

const ProgressBar = (props: ProgressBarPropsType) => {
  const { percentage } = props;
  return (
    <div className='progress-bar progress-bar-mr'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          // Customize the text
          text: {
            // Text color
            fill: 'var(--color-text)',
            // Text size
            fontSize: '1.25rem',
            fontWeight: '600',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: 'var(--color-box)',
          },
          path: {
            // Path color
            stroke: `var(--color-block)`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
        }}
      />
    </div>
  );
};

export default ProgressBar;

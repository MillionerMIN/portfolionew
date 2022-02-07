import './boxState.scss';

type BoxStatPropsType = {
  years: string;
  desc: string;
  pref: string;
};

const BoxStat = (props: BoxStatPropsType) => {
  const { years, desc, pref } = props;
  return (
    <div className='box-stat box-stat-pd'>
      <h3 className='box-stat--number'>{years}</h3>
      <p className='box-stat--desc'>
        {desc} <span>{pref}</span>
      </p>
    </div>
  );
};

export default BoxStat;

import './title.scss';

type TitlePropsType = {
  title: string;
  span: string;
  bg: string;
};

const Title = (props: TitlePropsType) => {
  const { title, span, bg } = props;
  return (
    <div className='title-section title-section-mr title-section-pd'>
      <h1 className='title-section__title'>
        {title} <span>{span}</span>
      </h1>
      <span className='title-section--bg'>{bg}</span>
    </div>
  );
};

export default Title;

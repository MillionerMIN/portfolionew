import './title.scss';

import useAnimScroll from '../../../hooks/useAnimScroll/AnimScroll';

type TitlePropsType = {
  title: string;
  span: string;
  bg: string;
};

const Title = (props: TitlePropsType) => {
  const { title, span, bg } = props;

  useAnimScroll();

  console.log('title', useAnimScroll());
  return (
    <div className='title-section title-section-mr title-section-pd'>
      <h1 className='title-section__title anim-no-hide anim-item'>
        {title} <span>{span}</span>
      </h1>
      <span className='title-section--bg anim-no-hide anim-item'>{bg}</span>
    </div>
  );
};

export default Title;

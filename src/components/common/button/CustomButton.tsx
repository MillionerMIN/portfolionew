import './customButton.scss';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type CustomButtonPropsType = DefaultButtonPropsType & {
  element: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonPropsType> = ({
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `custom-button-pd custom-button`;

  return (
    <button
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    >
      <span className='custom-button--text'>{restProps.value}</span>
      <span className='custom-button--icon'>{restProps.element}</span>
    </button>
  );
};

export default CustomButton;

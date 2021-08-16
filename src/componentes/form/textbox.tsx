import React from 'react';
import Icon from '../../icons/Icon';
export default ({
  type,
  label,
  placeholder,
}: {
  type: string;
  label: string;
  placeholder: string;
}) => {
  const [isError, setisError] = React.useState(false);
  return (
    <div className='text-input-m'>
      <label>{label}</label>
      <div className={`text-input-p ${isError == true ? 'border-warn' : ''}`}>
        <input placeholder={placeholder} type={type} />
        {type == 'password' ? <Icon name='eye' /> : <></>}
      </div>
      <p>{isError == true ? 'Invalid name. Please try again.' : ''}</p>
    </div>
  );
};

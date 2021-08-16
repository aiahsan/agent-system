import React from 'react';
import Icon from '../icons/Icon';
export default ({ title }: { title: string }) => {
  return (
    <div className='status-bar'>
      <div>
        <div className='d-flex'>
          <div className='st-left'>
            <Icon name='ar' />
          </div>
          <div className='st-right'>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div>
        <button className='btn'>
          <Icon name='re-fresh' />
        </button>
      </div>
    </div>
  );
};

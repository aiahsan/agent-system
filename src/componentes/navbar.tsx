import React from 'react';
import Icon from '../icons/Icon';
export default () => {
  return (
    <div className='W-100 nav-cst d-flex justify-content-between'>
      <div>
        <a>
          user:<span>P8</span>
        </a>
        <a>
          Currency:<span>USD</span>
        </a>
        <a>
          Timezone:<span>GMT+8</span>
        </a>
        <a>
          Language:
          <span>
            <Icon name='uk' />
          </span>
        </a>
      </div>
      <div className='nav-right-sec'>
        <a>
          <span>Balance</span>
        </a>
        <a>
          <span>transfer</span>
        </a>
        <a>
          <span>password</span>
        </a>
        <a>
          <span>log out</span>
        </a>
      </div>
    </div>
  );
};

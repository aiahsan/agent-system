import React from 'react';
import Dropdown from '../../componentes/form/dropdown';
import Textbox from '../../componentes/form/textbox';
export default () => {
  return (
    <div className='d-flex'>
      <div className='auth-sidebar'>
        <div>
          {' '}
          <div className=''>
            <h1 className='fw-bold fst-italic'>Agent System</h1>
            <div className='d-flex justify-content-end toplogo-c align-items-center'>
              <p className='fw-bold fst-italic text-sm'>Platform </p>
              <img src='/images/logo.png' />
              <p className='fst-italic fw-bold text-sm'>Technologies</p>
            </div>
          </div>
        </div>
      </div>

      <div className='login-box'>
        <Textbox placeholder='D12' type='text' label='Name' />
        <Textbox placeholder='Dana124' type='password' label='password' />
        <Dropdown />
      </div>
    </div>
  );
};

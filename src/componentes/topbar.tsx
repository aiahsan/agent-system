import React from 'react';
import Nav from './navbar';
export default () => {
  return (
    <>
      <div className='w-100 toplogo-p d-flex'>
        <div className='cl-bg toplogo'>
          <div className=''>
            <h1 className='fw-bold fst-italic'>Agent System</h1>
            <div className='d-flex justify-content-end toplogo-c align-items-center'>
              <p className='fw-bold fst-italic text-sm'>Platform </p>
              <img src='/images/logo.png' />
              <p className='fst-italic fw-bold text-sm'>Technologies</p>
            </div>
          </div>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </>
  );
};

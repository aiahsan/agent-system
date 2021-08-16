import React from 'react';
import StatusBar from './statusBar';
import Topbar from './topbar';
type Props = {
  children: JSX.Element;
  title: string;
};

export default ({ children, title }: Props) => {
  return (
    <div>
      <Topbar />
      <div className='d-flex'>
        <div className='side-bar mt-2'></div>
        <div className='content-box mt-2 w-100'>
          <StatusBar title={title} />

          {children}
        </div>
      </div>
    </div>
  );
};

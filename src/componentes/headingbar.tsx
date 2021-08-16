import React from 'react';
export default ({ title }: { title: string }) => {
  return (
    <div className='heading-bar'>
      <p>{title}</p>
    </div>
  );
};

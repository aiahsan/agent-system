import React from 'react';
import Icon from '../../icons/Icon';
import { Dropdown } from 'react-bootstrap';
export default () => {
  const [isError, setisError] = React.useState(false);
  return (
    <Dropdown className='dpd'>
      <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

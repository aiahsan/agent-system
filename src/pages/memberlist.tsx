import React from 'react';
import Headingbar from '../componentes/headingbar';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
export default () => {
  return (
    <>
      <RootComponent title='member List'>
        <div className='d-flex flex-column'>
          <Headingbar title='3 Member found, displayed all 3.' />
          <div className='summary-box mt-2'>
            <div className='summary-box-inner'>
              <div className='summarybar'>
                <p>Alias list 2021/04/21 12:23:45</p>
              </div>
              <table className='summaryTable memberlistTable'>
                <tr>
                  <th className=''>
                    <div>
                      <input type='checkbox' />
                    </div>
                  </th>
                  <th>
                    <div>User name</div>
                  </th>
                  <th>
                    <div>First name</div>
                  </th>
                  <th>
                    <div>Last name</div>
                  </th>
                  <th>
                    <div>Joined</div>
                  </th>
                  <th>
                    <div>Status</div>
                  </th>
                  <th>
                    <div>Min position</div>
                  </th>
                  <th>
                    <div>Message</div>
                  </th>

                  <th>
                    <div>Credit limit</div>
                  </th>
                  <th>
                    <div>Credit used</div>
                  </th>
                  <th>
                    <div>T</div>
                  </th>
                  <th>
                    <div>O</div>
                  </th>
                  <th>
                    <div>S</div>
                  </th>
                  <th>
                    <div>C</div>
                  </th>

                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe'>
                      <div className='m-0'>
                        <p className='sm-text-credit'>cREDIT (USD)</p>
                      </div>
                      <div className='w-100 credit-box m-0 '>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>tOTAL</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>rEmaining</p>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className='active-row'>
                  <td className='frrow1'>
                    <div className='p-div '>
                      <input type='checkbox' />
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>E3R_232323</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>John</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Doe</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>2021/03/21</div>
                  </td>

                  <td>
                    <div className='c-div p-div'>Open</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Edit</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Message</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1,000.00</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1,000.00</div>
                  </td>

                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>

                  <td>
                    <div className='b-div p-div p-2px '>
                      <div>
                        <p className='bvasdkjfu color-white'>
                          2021/03/21 12:45:45
                        </p>
                      </div>
                      <div>
                        <p className='bvasdkjfu color-white'>
                          2021/03/21 12:45:45
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='even-row'>
                  <td className='frrow1'>
                    <div className='p-div '>
                      <input type='checkbox' />
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>E3R_232323</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>John</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Doe</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>2021/03/21</div>
                  </td>

                  <td>
                    <div className='c-div p-div'>Open</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Edit</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Message</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1,000.00</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1,000.00</div>
                  </td>

                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>

                  <td>
                    <div className='b-div p-div p-2px '>
                      <div>
                        <p className='bvasdkjfu '>2021/03/21 12:45:45</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu '>2021/03/21 12:45:45</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='active-row'>
                  <td className='frrow1'>
                    <div className='p-div '>
                      <input type='checkbox' />
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>E3R_232323</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>John</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Doe</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>2021/03/21</div>
                  </td>

                  <td>
                    <div className='c-div p-div'>Open</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Edit</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Message</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1,000.00</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1,000.00</div>
                  </td>

                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>1</div>
                  </td>

                  <td>
                    <div className='b-div p-div p-2px '>
                      <div>
                        <p className='bvasdkjfu color-white'>
                          2021/03/21 12:45:45
                        </p>
                      </div>
                      <div>
                        <p className='bvasdkjfu color-white'>
                          2021/03/21 12:45:45
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </RootComponent>
    </>
  );
};

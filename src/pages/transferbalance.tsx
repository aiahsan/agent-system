import React from 'react';
import Headingbar from '../componentes/headingbar';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
import Icon from '../icons/Icon';
export default () => {
  return (
    <>
      <RootComponent title='Transfer Balances'>
        <div className='d-flex flex-column'>
          <Headingbar title='2 items found,displaying all 2.' />
          <div className='summary-box mt-2'>
            <div className='summary-box-inner'>
              <div className='summarybar'>
                <p>TRANSFER BALANCES2021/04/21 12:23:45</p>
              </div>
              <table className='summaryTable transferbalance'>
                <tr className='heading-table-cst '>
                  <th className=''>
                    <div>User name</div>
                  </th>
                  <th>
                    <div>first name</div>
                  </th>
                  <th>
                    <div>last name</div>
                  </th>

                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe '>
                      <div className='m-0 '>
                        <p className='sm-text-credit'>credit</p>
                      </div>
                      <div className='w-100 credit-box m-0 td-p p'>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>total</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>used</p>
                        </div>
                      </div>
                    </div>
                  </th>

                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe '>
                      <div className='m-0 '>
                        <p className='sm-text-credit'>Balance</p>
                      </div>
                      <div className='w-100 credit-box m-0 td-p p'>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>settled</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>pending</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>total</p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className=''>
                    <div>owing</div>
                  </th>
                  <th>
                    <div>Transfer amount</div>
                  </th>
                  <th>
                    <div>Transfer</div>
                  </th>
                </tr>
                <tr className=''>
                  <td className='frrow1'>
                    <div className='c-div p-div'>E3R_232323</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>JOE</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>LOND</div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <div className='c-div p-div'>4,343.00</div>
                  </td>
                  <td>
                    <div className='c-div cst-tabn'>
                      <div className='cst-tabn-c'>1223</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>
                      <input type='checkbox' />
                    </div>
                  </td>
                </tr>
                <tr className='even-row'>
                  <td className='frrow1'>
                    <div className='c-div p-div'>E3R_232323</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>JOE</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>LOND</div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>4,343.00</p>
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <div className='c-div p-div'>4,343.00</div>
                  </td>
                  <td>
                    <div className='c-div cst-tabn'>
                      <div className='cst-tabn-c'>1223</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>
                      <input type='checkbox' />
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

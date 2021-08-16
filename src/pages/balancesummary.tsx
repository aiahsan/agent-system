import React from 'react';
import Headingbar from '../componentes/headingbar';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
import Icon from '../icons/Icon';
export default () => {
  return (
    <>
      <RootComponent title='Member commission'>
        <div className='d-flex flex-column'>
          <Headingbar title='2 items found,displaying all 2.' />
          <div className='summary-box mt-2'>
            <div className='summary-box-inner'>
              <div className='summarybar'>
                <p>Alias list 2021/04/21 12:23:45</p>
              </div>
              <table className='summaryTable balanceSummary '>
                <tr className='heading-table-cst'>
                  <th className=''>
                    <div></div>
                  </th>
                  <th>
                    <div>SUPER AGENT</div>
                  </th>
                  <th>
                    <div>STATUS</div>
                  </th>
                  <th>
                    <div>FIRST name</div>
                  </th>
                  <th>
                    <div>last name</div>
                  </th>
                  <th>
                    <div>credit limit</div>
                  </th>
                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe '>
                      <div className='m-0 '>
                        <p className='sm-text-credit'>balance</p>
                      </div>
                      <div className='w-100 credit-box m-0 td-p p'>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>setted</p>
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
                  <th>
                    <div>lAST LIGIN</div>
                  </th>
                  <th>
                    <div>lAST LIGIN IP</div>
                  </th>
                </tr>
                <tr className=''>
                  <td className='frrow1'>
                    <div className='p-div main-head'>
                      <Icon name='ard' />
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div bg-even-cst'>
                      <p> mA1@E3R_232323</p>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div bg-even-cst'>
                      <p>Open</p>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>mA1E3R</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>mA1E3R</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>8.000.000,00</div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>8.000.000,00</p>{' '}
                      </div>
                      <div>
                        <p className='bvasdkjfu'>8.000.000,00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>8.000.000,00</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>2021/03/21 17:13:32</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>123.133.133.32</div>
                  </td>
                </tr>

                <tr className='active-row'>
                  <td className='frrow1'>
                    <div className='p-div main-head'>
                      <Icon name='ard' />
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div bg-even-cst'>
                      <p> mA1@E3R_232323</p>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div bg-even-cst'>
                      <p>Open</p>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>mA1E3R</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>mA1E3R</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>8.000.000,00</div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>8.000.000,00</p>{' '}
                      </div>
                      <div>
                        <p className='bvasdkjfu'>8.000.000,00</p>
                      </div>
                      <div>
                        <p className='bvasdkjfu'>8.000.000,00</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>2021/03/21 17:13:32</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>123.133.133.32</div>
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

import React from 'react';
import Headingbar from '../componentes/headingbar';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
export default () => {
  return (
    <>
      <RootComponent title='Super Agent may_042201 Financial Summary'>
        <div className='d-flex flex-column'>
          <Headingbar title='One Item found.' />
          <div className='summary-box'>
            <div className='summary-box-inner'>
              <table className='summaryTable financial-table'>
                <tr>
                  <th className=''>
                    <div className='main-head'>First name</div>
                  </th>
                  <th>
                    <div className='main-head'>Last name</div>
                  </th>
                  <th>
                    <div className='main-head'>Joined</div>
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

                  <th>
                    <div className='main-head'>Currency</div>
                  </th>
                  <th>
                    <div className='main-head'>Status</div>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className='c-div p-div'>Nana</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>Dou</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>2021/04/21</div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div className=''>2021/04/28 14:43:32</div>
                      <div className=''>192.168.101.8</div>
                    </div>
                  </td>

                  <td>
                    <div className='c-div p-div'>US Dollar</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>OPEN</div>
                  </td>
                </tr>
              </table>
              <table className='summaryTable financial-table1 mt-2'>
                <tr>
                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe'>
                      <div className='m-0'>
                        <p className='sm-text-credit'>cREDIT (USD)</p>
                      </div>
                      <div className='w-100 credit-box m-0 '>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Total</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Used</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Remaining</p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe'>
                      <div className='m-0'>
                        <p className='sm-text-credit'>Credit (usd)</p>
                      </div>
                      <div className='w-100 credit-box m-0 '>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Settlid</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Pending</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Total</p>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td className=''>
                    <div className='b-div p-div p-0 bg-trans'>
                      <div className='t3-tab'>20.000,00</div>
                      <div className='t3-tab ml-left-5'>20.000,00</div>
                      <div className='t3-tab ml-left-5'>20.000,00</div>
                    </div>
                  </td>
                  <td className=''>
                    <div className='b-div p-div p-0 bg-trans'>
                      <div className='t3-tab'>20.000,00</div>
                      <div className='t3-tab ml-left-5'>20.000,00</div>
                      <div className='t3-tab ml-left-5'>20.000,00</div>
                    </div>
                  </td>
                </tr>
              </table>

              <div className='mt-3'>
                <Headingbar title='2 Items found, displaying all 2.' />
              </div>
              <div className='summarybar mt-2'>
                <p>
                  Sub-account Summary <span>2021/04/28 13:45:41</span>
                </p>
              </div>
              <table className='summaryTable financial-table2'>
                <tr>
                  <th className=''>
                    <div>ACCOUNT TYPE</div>
                  </th>
                  <th>
                    <div>Total</div>
                  </th>
                  <th>
                    <div>Open</div>
                  </th>
                  <th>
                    <div>Suspended</div>
                  </th>
                  <th>
                    <div>Closed</div>
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
                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe'>
                      <div className='m-0'>
                        <p className='sm-text-credit'>bALANCE (USD)</p>
                      </div>
                      <div className='w-100 credit-box m-0 '>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Settled</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>Pending</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>total</p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe'>
                      <div className='m-0'>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit'>Owing (usd)</p>{' '}
                        </div>
                      </div>
                      <div className='w-100 credit-box m-0 '>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'></p>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td className='frrow1'>
                    <div className='main-head p-div pl-0'>SUPER aGENTS</div>
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
                    <div className='b-div p-div'>
                      <div>0.0</div>
                      <div>0.00</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>20.000,00</div>
                      <div>20.000,00</div>
                      <div>20.000,00</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>20.000,00</div>
                  </td>
                </tr>
                <tr className='even-row'>
                  <td className='frrow2'>
                    <div className='p-div main-head main-head'>Agents</div>
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
                    <div className='b-div p-div'>
                      <div>0.00</div>
                      <div>0.00</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>20.000,00</div>
                      <div>20.000,00</div>
                      <div>20.000,00</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>20.000,00</div>
                  </td>
                </tr>
                <tr className=''>
                  <td className='frrow3'>
                    <div className='p-div main-head'>members</div>
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
                    <div className='b-div p-div'>
                      <div>0.00</div>
                      <div>0.00</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>20.000,00</div>
                      <div>20.000,00</div>
                      <div>20.000,00</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>20.000,00</div>
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

import React from 'react';
import Headingbar from '../componentes/headingbar';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
import Icon from '../icons/Icon';
export default () => {
  return (
    <>
      <RootComponent title='Pending balances'>
        <div className='d-flex flex-column'>
          <Headingbar title='2 Items found, displaying all 2.' />
          <div className='summary-box mt-2'>
            <div className='summary-box-inner'>
              <div className='summarybar'>
                <p>pending balances 2021/04/23 06:35:34</p>
              </div>
              <table className='summaryTable pendingbalance2'>
                <tr className='heading-table-cst '>
                  <th className=''>
                    <div>SUPER AGENT</div>
                  </th>
                  <th>
                    <div>bets</div>
                  </th>

                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe '>
                      <div className='m-0 '>
                        <p className='sm-text-credit'>members</p>
                      </div>
                      <div className='w-100 credit-box m-0 td-p p'>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>total stakes</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>potential win</p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className='d-flex flex-column text-align-center cst-box-akwe '>
                      <div className='m-0 '>
                        <p className='sm-text-credit'>Bookmaker Position</p>
                      </div>
                      <div className='w-100 credit-box m-0 td-p p'>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>members lose</p>
                        </div>
                        <div className='w-50 m-0 h-100'>
                          <p className='sm-text-credit-1'>members win</p>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className=''>
                  <td className='frrow1'>
                    <div className='c-div p-div'>Nana</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>7</div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>{' '}
                      </div>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>{' '}
                      </div>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='even-row'>
                  <td className='frrow1'>
                    <div className='c-div p-div'>Nana</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>7</div>
                  </td>
                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>{' '}
                      </div>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className='b-div p-div '>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>{' '}
                      </div>
                      <div>
                        <p className='bvasdkjfu'>1,000</p>
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

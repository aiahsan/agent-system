import React from 'react';
import Headingbar from '../componentes/headingbar';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
export default () => {
  return (
    <>
      <RootComponent title='Agent Network Financial Summary'>
        <div className='d-flex flex-column'>
          <Headingbar title='4 items found, displaying all 4.' />
          <div className='summary-box'>
            <div className='summary-box-inner'>
              <div className='summarybar'>
                <p>Sub-Account summaty 2021/04/21 12:23:45</p>
              </div>
              <table className='summaryTable summaryTable1'>
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
                        <p className='sm-text-credit'>Owing (usd)</p>
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
                    <div className='p-div'>SUPER aGENTS</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>—</div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>8.455.237,63</div>
                      <div>8.455.237,63</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>56,45</div>
                      <div>56,45</div>
                      <div>56,45</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>56,45</div>
                  </td>
                </tr>
                <tr className='even-row'>
                  <td className='frrow2'>
                    <div className='p-div'>SUPER aGENTS</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>—</div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>8.455.237,63</div>
                      <div>8.455.237,63</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>56,45</div>
                      <div>56,45</div>
                      <div>56,45</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>56,45</div>
                  </td>
                </tr>
                <tr className='active-row'>
                  <td className='frrow3'>
                    <div className='p-div'>SUPER aGENTS</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>—</div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>8.455.237,63</div>
                      <div>8.455.237,63</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>56,45</div>
                      <div>56,45</div>
                      <div>56,45</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>56,45</div>
                  </td>
                </tr>

                <tr className='even-row'>
                  <td className='frrow4'>
                    <div className='p-div'>SUPER aGENTS</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>5</div>
                  </td>
                  <td>
                    <div className='c-div p-div'>—</div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>8.455.237,63</div>
                      <div>8.455.237,63</div>
                    </div>
                  </td>
                  <td>
                    <div className='b-div p-div'>
                      <div>56,45</div>
                      <div>56,45</div>
                      <div>56,45</div>
                    </div>
                  </td>
                  <td>
                    <div className='c-div p-div'>56,45</div>
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

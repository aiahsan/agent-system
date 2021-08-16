import React from 'react';
import RootComponent from '../componentes/rootComponent';
import Topbar from '../componentes/topbar';
export default () => {
  return (
    <>
      <RootComponent title='Money line'>
        <div className='d-flex'>
          <div className='money-line moneyline-table'>
            <div className='table-top'>
              <div>
                <p>#</p>
              </div>
              <div>
                <p>time</p>
              </div>
              <div>
                <p>event</p>
              </div>
            </div>
            <div className='table-center'>
              <p>build 344 league</p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p>1</p>
              </div>
              <div>
                <p>2020/05/14</p>
                <p>11:30</p>
              </div>
              <div>
                <p>ABANDA, FRANCOISE vs CDIYAS, ZARINA</p>
              </div>
            </div>

            <div className='table-center'>
              <p>Ctest league</p>
            </div>
            {Array.from({ length: 4 }, (x: number, i: number) => (
              <div
                className={`table-row td-p ${
                  (i + 1) % 2 == 0 ? 'bg-even' : ''
                }`}
              >
                <div>
                  <p>{i + 2}</p>
                </div>
                <div>
                  <p>2020/05/14</p>
                  <p>11:30</p>
                </div>
                <div>
                  <p>ABANDA, FRANCOISE vs CDIYAS, ZARINA</p>
                </div>
              </div>
            ))}
            <div className='table-center'>
              <p>Ctest league</p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p>6</p>
              </div>
              <div>
                <p>2020/05/14</p>
                <p>11:30</p>
              </div>
              <div>
                <p>ABANDA, FRANCOISE vs CDIYAS, ZARINA</p>
              </div>
            </div>
            <div className='table-center'>
              <p>Ctest league</p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p>7</p>
              </div>
              <div>
                <p>2020/05/14</p>
                <p>11:30</p>
              </div>
              <div>
                <p>ABANDA, FRANCOISE vs CDIYAS, ZARINA</p>
              </div>
            </div>
          </div>

          <div className='money-line moneyline-table1 '>
            <div className='moneyline-table1-head'>
              <h2>2nd qUARTER</h2>
              <div className='table-top'>
                <div>
                  <p>total home</p>
                </div>
                <div>
                  <p>total away</p>
                </div>
                <div>
                  <p>forecast home</p>
                </div>
                <div>
                  <p>forecast away</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div className='active-tab'>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                  <p>343</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                  <p>343</p>
                </div>
              </div>
            </div>

            <div className='table-center'>
              <p></p>
            </div>
            {Array.from({ length: 4 }, (x: number, i: number) => (
              <div
                className={`table-row td-p ${
                  (i + 1) % 2 == 0 ? 'bg-even' : ''
                }`}
              >
                <div>
                  <p className='color-red'>243</p>
                </div>
                <div>
                  <p>150</p>
                </div>
                <div>
                  <div>
                    <p>150</p>
                    <p>343</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>153</p>
                    <p>343</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                  <p>343</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                  <p>343</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                  <p>343</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                  <p>343</p>
                </div>
              </div>
            </div>
          </div>

          <div className='money-line moneyline-table1 '>
            <div className='moneyline-table1-head'>
              <h2>90 MIN</h2>
              <div className='table-top'>
                <div>
                  <p>total home</p>
                </div>
                <div>
                  <p>total away</p>
                </div>
                <div>
                  <p>forecast home</p>
                </div>
                <div>
                  <p>forecast away</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>

            <div className='table-center'>
              <p></p>
            </div>
            {Array.from({ length: 4 }, (x: number, i: number) => (
              <div
                className={`table-row td-p ${
                  (i + 1) % 2 == 0 ? 'bg-even' : ''
                }`}
              >
                <div>
                  <p className='color-red'>243</p>
                </div>
                <div>
                  <p>150</p>
                </div>
                <div>
                  <div>
                    <p>150</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>153</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>
          </div>

          <div className='money-line moneyline-table1 '>
            <div className='moneyline-table1-head'>
              <h2>REGULATION TIME</h2>
              <div className='table-top'>
                <div>
                  <p>total home</p>
                </div>
                <div>
                  <p>total away</p>
                </div>
                <div>
                  <p>forecast home</p>
                </div>
                <div>
                  <p>forecast away</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>

            <div className='table-center'>
              <p></p>
            </div>
            {Array.from({ length: 4 }, (x: number, i: number) => (
              <div
                className={`table-row td-p ${
                  (i + 1) % 2 == 0 ? 'bg-even' : ''
                }`}
              >
                <div>
                  <p className='color-red'>243</p>
                </div>
                <div>
                  <p>150</p>
                </div>
                <div>
                  <div>
                    <p>150</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>153</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>
          </div>

          <div className='money-line moneyline-table1 '>
            <div className='moneyline-table1-head'>
              <h2>SECOND HALF</h2>
              <div className='table-top'>
                <div>
                  <p>total home</p>
                </div>
                <div>
                  <p>total away</p>
                </div>
                <div>
                  <p>forecast home</p>
                </div>
                <div>
                  <p>forecast away</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>

            <div className='table-center'>
              <p></p>
            </div>
            {Array.from({ length: 4 }, (x: number, i: number) => (
              <div
                className={`table-row td-p ${
                  (i + 1) % 2 == 0 ? 'bg-even' : ''
                }`}
              >
                <div>
                  <p className='color-red'>243</p>
                </div>
                <div>
                  <p>150</p>
                </div>
                <div>
                  <div>
                    <p>150</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>153</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>
            <div className='table-center'>
              <p></p>
            </div>
            <div className={`table-row td-p`}>
              <div>
                <p className='color-red'>243</p>
              </div>
              <div>
                <p>150</p>
              </div>
              <div>
                <div>
                  <p>150</p>
                </div>
              </div>
              <div>
                <div>
                  <p>153</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootComponent>
    </>
  );
};

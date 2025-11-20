import React, { useEffect, useState } from 'react'
import Countup from 'react-countup';
import ScrollTriger from 'react-scroll-trigger';
// import {Navbar} from './Navbar';

function Counter() {
    const [counter, setCounter] = useState(false);
  return (
      
      <ScrollTriger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
        {/* <Navbar></Navbar> */}
        <div style={{marginTop: '50px'}}>
            <div style={{width: '100%', height: '180px', backgroundColor: 'rgba(128, 153, 194)'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-4' style={{color: 'white'}}>
                            <div style={{textAlign: 'center' , marginTop: '55px'}}>
                                <h1 >
                                    {counter &&  <Countup  start={0} end={1000} duration={1} delay={0}/>}
                                    +
                                </h1>
                                <p>Project Completed</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-4' style={{color: 'white'}}>
                            <div style={{textAlign: 'center' , marginTop: '55px'}}>
                                <h1 >
                                    {counter &&  <Countup  start={0} end={2000} duration={1} delay={0}/>}
                                    +
                                </h1>
                                <p>Happy Client</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-4' style={{color: 'white'}}>
                            <div style={{textAlign: 'center' , marginTop: '55px'}}>
                                <h1 >
                                    {counter &&  <Countup  start={0} end={3000} duration={1} delay={0}/>}
                                    +
                                </h1>
                                <p>Cup Of Coffee</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-4' style={{color: 'white'}}>
                            <div style={{textAlign: 'center' , marginTop: '55px'}}>
                                <h1 >
                                    {counter &&  <Countup  start={0} end={4000} duration={1} delay={0}/>}
                                    +
                                </h1>
                                <p>Real Professional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </ScrollTriger>
  )
}

export default Counter
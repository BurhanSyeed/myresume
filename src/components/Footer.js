import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation,  faPhone } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    const margin = {
        marginTop : '125px',
        backgroundColor: 'rgba(128, 153, 194)',
        height: '400px',
      };
  return (
   <>
        <div style= {margin}>
               <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <p style={{color: 'white', marginTop: '50px'}}>About</p>
                            <p style={{color: 'white', }}>We have tested a number of registery fix and clean utlities
                                and present our top 3 list on out site for your convenience.
                                Hope you it.
                            </p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 '>
                            <p style={{color: 'white', marginTop: '50px'}}>Links</p>
                            <p style={{color: 'white', }}>-> HOme
                            </p>
                            <p style={{color: 'white', }}>-> HOme
                            </p>
                            <p style={{color: 'white', }}>-> HOme
                            </p>
                            <p style={{color: 'white', }}>-> HOme
                            </p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <p style={{color: 'white', marginTop: '50px'}}>Service</p>
                            <p style={{color: 'white', }}>We have tested a number of registery fix and clean utlities
                                and present our top 3 list on out site for your convenience.
                                Hope you it.
                            </p>
                            
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <p style={{color: 'white', marginTop: '50px'}}>HAve a Question</p>
                               {/* and present our top 3 list on out site for your convenience.
                                H  <p style={{color: 'white', }}>We have tested a number of registery fix and clean utlities
                           ope you it.
                            </p> */}
                            <p style={{color: 'white'}}><span><FontAwesomeIcon icon={faLocation} /></span> Multan,Punjab Pakistan</p>
                            <p style={{color: 'white'}}><span><FontAwesomeIcon icon={faPhone} /></span> +92 3136177353</p>
                            <p style={{color: 'white'}}><span><FontAwesomeIcon icon={faEnvelope} /></span>  syedburhanali25@gmail.com</p>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-4 col-md-4 col-sm-12' >
                        <SocialIcon url="https://facebook.com"  />
                        <SocialIcon url="https://instagram.com"  />
                        <SocialIcon url="https://youtube.com"  />
                        </div>
                      
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-6 col-md-4 col-sm-12 justify-content-md-center mt-3'>
                                <p style={{color: 'white'}}>Copyright @2023 All rights | This template is made with by Syed Burhan Ali</p>
                        </div>
                    </div>
               </div>
        </div>
   </>
  )
}

export default Footer
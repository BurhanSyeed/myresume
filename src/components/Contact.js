import React from 'react'
function Contact() {
    const margin = {
        marginTop : '150px'
      };
  return (
    <>
    <div className='container overflow-hidden'>
        <div className='row' style={margin}>
             <div className='col-lg-4 col-md-3'>
                        <h2>Contact Us</h2>
                        <span><hr style={{width: '60%'}}/></span>
                    </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                        <form>
                            <div className='row'>
                                <div className='col-lg-6 col-md-3 col-sm-12'>
                                    <input type="type" class="form-control" id="name" name='name' placeholder='Name'  />
                                </div>
                                <div className='col-lg-6 col-md-3 col-sm-12'>
                                    <input type="email" class="form-control" id="email" name='email' placeholder='Email' />
                                </div>
                                <div className='col-lg-12 col-md-3 col-sm-12 mt-3'>
                                    <input type="text" class="form-control" id="subject" name='subject' placeholder='Subject' />
                                </div>
                                <div className='col-lg-12 col-md-3 col-sm-12 mt-3'>
                                    <textarea type="text" class="form-control" rows="6" cols="50"  id="message" name='message' placeholder='Message' />
                                </div>
                            </div>
                        </form>
                        <div className='col-lg-2 col-md-3 col-sm-12 mt-3'>
                        <button className='btn btn-sm' style={{ color: 'white', marginRight:'10px', backgroundColor: 'rgba(128, 153, 194)' }}>SUBMIT</button>
                        </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Contact
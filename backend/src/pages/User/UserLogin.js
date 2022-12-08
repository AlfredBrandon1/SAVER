import React from 'react'

const UserLogin = () => {
  return (
    <section className='user-login-page'>
            <form 
                // onSubmit={(e)=>loginAuthentication(e)}
                className='user-login-form-container'
            >

                {/* <img className='loginpage-logo' src={require('../images/landingpagelogo.png')}></img> */}

                <label htmlFor='email'>EMAIL:</label>
                    <input 
                        // onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter email'
                        required
                        type='text'/>
                        
                <label htmlFor='password'>Password:</label>
                    <input 
                        // onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        autoComplete='on'
                        required
                        type='password'/>
                <button
                    className='login-link'
                    type='submit'
                >Login</button>
            </form>
        </section>
  )
}

export default UserLogin

import React from 'react'

const UserRegister = () => {
  return (
    <section className = 'user-register-page'>
        <form className = 'user-register-form-container'>
            <label htmlFor='first-name'>FIRST NAME:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter first name...'
                            required
                            type='text'/>
            <label htmlFor='last-name'>LAST NAME:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter last name...'
                            required
                            type='text'/>
            <label htmlFor='contact-number'>CONTACT NUMBER:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter contact number...'
                            required
                            type='tel'/>
            <label htmlFor='address'>ADDRESS:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter address...'
                            required
                            type='text'/>
            <label htmlFor='sex'>SEX:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter sex...'
                            required
                            type='text'/>
            <label htmlFor='email'>EMAIL:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter email...'
                            required
                            type='text'/>
            <label htmlFor='password'>PASSWORD:</label>
                    <input 
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter password...'
                            required
                            type='text'/>
            <button
                    className='register-button'
                    type='submit'
                >REGISTER</button>
        </form>
        
    </section>
  )
}

export default UserRegister

import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const RequestPage = () => {
    const navigate = new useNavigate()

    return (
        <div className=''>
            <h3> Request </h3> 
            {/* sample */}
            <div> emergency type: {/* emergency type */} </div>
            <div>MAP {/* map frame */} </div>
            <div> name of requestor: {/*  */} </div>
            <div> situation: </div>
            <button onClick={() => { navigate('/responding')}}> Responding </button>
        </div>
    )
}

export default RequestPage
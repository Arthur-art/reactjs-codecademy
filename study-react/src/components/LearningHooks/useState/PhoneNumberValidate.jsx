import React, { useState } from 'react'

const validPhoneNumber = /^\d{1,10}$/;

export const PhoneNumberValidate = ()=>{

    const [phone, setPhone] = useState('');

    const handleChange=({target})=>{
        const newNumber = target.value;
        const checkNumber = validPhoneNumber.test(newNumber);
        if(checkNumber){
            setPhone(newNumber)
        }

    };

    return (
        <div className='phone'>
          <label for='phone-input'>Phone: </label>
          <input value={phone} onChange={handleChange} id='phone-input' />
        </div>
      );
}
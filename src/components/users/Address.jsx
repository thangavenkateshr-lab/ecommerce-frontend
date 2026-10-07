import React, { useState } from 'react'

const Address = () => {
  const [form, setForm] = useState({
    address : "",
    country : "",
    state : "",
    city : "",
    postal : "",
    phno : ""
  });
  const submitHandler = (e) => {
    e.preventDefault();
    return {
      ...form,
      setForm
    }
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
            <form className='flex flex-col gap-2'>
                <input type="text" name='address' value={form.address} className='p-2 w-full' placeholder='Address'/>
                <input type="text" name='country' value={form.country} className='p-2 w-full' placeholder='Country'/>
                <input type="text" name='state' value={form.state} className='p-2 w-full' placeholder='State'/>
                <input type="text" name='city' value={form.city} className='p-2 w-full' placeholder='City'/>
                <input type="number" name='postal' value={form.postal} className='p-2 w-full' placeholder='Postal Code'/>
                <input type="number" name='phno' value={form.phno} className='p-2 w-full' placeholder='Phone Number'/>
                <button className='py-2 rounded-xl font-semibold text-white bg-black/80'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Address
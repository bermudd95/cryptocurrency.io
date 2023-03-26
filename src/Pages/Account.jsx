import React from 'react'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'


const Account = () => {
  return (
    <div className='bg-black text-white'>
      <div className='flex flex-col h-screen justify-center items-center'>
        <h2 className='text-3xl pb-9 font-bold underline'>
          Log In
        </h2>
        <h3 className='pb-5 text-lg'>
          Sign In To Access Your Account.
        </h3>
        <div className='border-2 border-white rounded-lg flex justify-center items-center w-[60%] h-[60%]'>
          <form>
            <h2 className='text-center pb-10 text-lg'>
              Please Fill Out The Form Completely.
            </h2>
            <div className='flex flex-row justify-evenly pb-5'>
              <h2 className='text-xl pt-4'>
                Name: 
              </h2>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" className='bg-white rounded-lg'/>
            </div>
            <div className='flex flex-row justify-evenly pb-5'>
              <h2 className='text-xl pt-4'>
                Password:
              </h2>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" className='bg-white rounded-lg'/>
            </div>
            <div className='pb-5'>
              <h2>
                Don't Have An Account? You Can Create One Here.
              </h2>
            </div>
            <div className='flex justify-center w-full'>
              <Button variant="contained">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Account
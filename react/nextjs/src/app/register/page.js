import React from 'react'
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import CustomNavbar from '@/component/navbar/page';
CustomNavbar                                

const page = () => {
  return (
    <div>
      <CustomNavbar/>
       <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div> <br/>
        <input type="password" placeholder='Enter password'></input> <br/>
        <input placeholder='Enter Your Address'></input> <br/>
        <input placeholder='Enter Your Email'></input> <br/>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Button
    </Button>
      
    </div>
  )
}

export default page

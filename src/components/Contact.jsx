import { Label, FloatingLabel, Textarea, Button } from 'flowbite-react';
import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
 return (
  <>
   <div
    className='w-full px-4 py-10 lg:px-28 lg:py-20 bg-[#F9F7F7] rounded-xl'
    id='contact'>
    <div className='grid lg:grid lg:grid-cols-2 lg:gap-10'>
     <div>
      <h1 className='font-bold md:text-center text-center lg:text-left text-5xl text-[#112D4E]'>
       <span className='text-[#3F72AF] text-2xl'>Hubungi Kami</span>
       <br />
       Konsultasikan kebutuhan Anda Sekarang
      </h1>
      <div className='lg:grid lg:grid-cols-2'>
       <div className='mt-10 mb-10 px-4 w-64 py-1 backdrop-blur-sm bg-[#DBE2EF] rounded-xl flex gap-4 mx-auto lg:mx-0'>
        <Icon
         className='text-3xl mt-3'
         icon='skill-icons:gmail-light'
        />
        <div className='my-1'>
         <p className='text-black'>Mail me at:</p>
         <a href='mailto:fiorezarn@gmail.com'>asthabrata@gmail.com</a>
        </div>
       </div>
       <div className='mt-10 mb-10 px-4 w-64 py-1 backdrop-blur-sm bg-[#DBE2EF] rounded-xl flex gap-4 mx-auto lg:mx-0'>
        <Icon
         className='text-3xl mt-3'
         icon='logos:whatsapp-icon'
        />
        <div className='my-1'>
         <p className='text-black'>Call me at:</p>
         <a
          href='https://wa.me/+62895632980009?text=Hai%2C+saya+ingin+konsultasi+andalalin'
          target='_blank'>
          0895632980009
         </a>
        </div>
       </div>
      </div>
     </div>
     <div className='bg-white lg:w-full lg:h-full rounded-xl shadow-2xl opacity-95 py-10'>
      <h1 className='font-bold text-2xl lg:text-3xl px-10 font-serif text-[#3F72AF]'>
       Dapatkan informasi dan penawaran dari kami
      </h1>
      <div className='py-10 px-10'>
       <form>
        <div className='lg:flex lg:flex-row lg:gap-4 lg:justify-between'>
         <FloatingLabel
          className='mr-20 mb-4 lg:mb-0'
          variant='outlined'
          label='Your Name'
          type='text'
          name='user_name'
          required
         />
         <FloatingLabel
          className='mr-20 mb-4 lg:mb-0'
          variant='outlined'
          label='Subject'
          type='text'
          name='user_name'
          required
         />
        </div>
        <div className='lg:flex lg:justify-between gap-4 lg:my-4'>
         <FloatingLabel
          className='mr-20 mb-4 lg:mb-0'
          variant='outlined'
          label='Email'
          type='text'
          name='user_name'
          required
         />
         <FloatingLabel
          className='mr-20 mb-4 lg:mb-0'
          variant='outlined'
          label='Phone Number'
          type='text'
          name='user_name'
          required
         />
        </div>
        <div className='mt-2'>
         <div className='mb-2 block'>
          <Label
           htmlFor='comment'
           value='Your message'
          />
         </div>
         <Textarea
          id='comment'
          name='message'
          placeholder='Leave a message...'
          required
          rows={4}
         />
         <div className='mt-5'>
          <Button
           className='bg-[#3F72AF] hover:bg-[#112D4E]'
           type='submit'
           value='Send'>
           Send Message
          </Button>
         </div>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Contact;

import { Label, FloatingLabel, Textarea, Button } from 'flowbite-react';
import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
 return (
  <>
   <div
    className='w-full px-4 py-10 lg:px-28 lg:py-20 bg-[#F9F7F7] rounded-xl'
    id='contact'>
    <div className='grid lg:grid-cols-2 lg:gap-10 gap-8'>
     <div>
      <h1 className='font-bold text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl text-[#112D4E]'>
       <span className='text-[#3F72AF] text-xl sm:text-2xl'>Hubungi Kami</span>
       <br />
       Konsultasikan kebutuhan Anda Sekarang
      </h1>
      <div className='flex flex-col sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8'>
       <div className='px-4 py-3 backdrop-blur-sm bg-[#DBE2EF] rounded-xl flex gap-4 w-full max-w-sm mx-auto lg:mx-0'>
        <Icon
         className='text-3xl flex-shrink-0'
         icon='skill-icons:gmail-light'
        />
        <div className='min-w-0 flex-1'>
         <p className='text-black text-sm'>Mail me at:</p>
         <a
          href='mailto:asthabrata@gmail.com'
          className='text-sm break-all hover:text-[#3F72AF]'>
          asthabrata@gmail.com
         </a>
        </div>
       </div>
       <div className='px-4 py-3 backdrop-blur-sm bg-[#DBE2EF] rounded-xl flex gap-4 w-full max-w-sm mx-auto lg:mx-0'>
        <Icon
         className='text-3xl flex-shrink-0'
         icon='logos:whatsapp-icon'
        />
        <div className='min-w-0 flex-1'>
         <p className='text-black text-sm'>Call me at:</p>
         <a
          href='https://wa.me/+62895632980009?text=Hai%2C+saya+ingin+konsultasi+andalalin'
          target='_blank'
          className='text-sm hover:text-[#3F72AF]'>
          0895632980009
         </a>
        </div>
       </div>
      </div>
     </div>
     <div className='bg-white w-full rounded-xl shadow-2xl opacity-95 py-6 sm:py-10'>
      <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl px-6 sm:px-10 font-serif text-[#3F72AF] leading-tight'>
       Dapatkan informasi dan penawaran dari kami
      </h1>
      <div className='py-6 sm:py-10 px-6 sm:px-10'>
       <form>
        <div className='grid grid-cols-2 gap-4 mb-4'>
         <FloatingLabel
          className='w-full'
          variant='outlined'
          label='Your Name'
          type='text'
          name='user_name'
          required
         />
         <FloatingLabel
          className='w-full'
          variant='outlined'
          label='Subject'
          type='text'
          name='subject'
          required
         />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
         <FloatingLabel
          className='w-full'
          variant='outlined'
          label='Email'
          type='email'
          name='user_email'
          required
         />
         <FloatingLabel
          className='w-full'
          variant='outlined'
          label='Phone Number'
          type='tel'
          name='user_phone'
          required
         />
        </div>
        <div className='mb-4'>
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
          className='w-full'
         />
        </div>
        <div>
         <Button
          className='bg-[#3F72AF] hover:bg-[#112D4E] w-full sm:w-auto'
          type='submit'
          value='Send'>
          Send Message
         </Button>
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

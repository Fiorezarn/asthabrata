import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import astha from '../assets/logo_nav.svg';

export default function FooterFiveColsLogo() {
 return (
  <>
   {/*    <!-- Component: Five Columns Footer with Logo --> */}
   <footer className='w-full text-slate-500'>
    {/*      <!-- Main footer --> */}
    <div className='border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm'>
     <div className='container mx-auto px-6'>
      <div className='grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12'>
       <div
        className='col-span-4 md:col-span-8 lg:col-span-4'
        aria-labelledby='footer-header'>
        <img
         className='w-72 items-center'
         src={astha}
         alt='LOGO'
        />
        <p className='text-justify'>
         Selamat datang di Astha Brata, mitra andal Anda dalam menavigasi
         kompleksitas perizinan dan analisis dampak lalu lintas bagi perusahaan
         Anda. Sebagai penyedia layanan profesional yang berpengalaman, kami
         berkomitmen untuk memberikan solusi yang tepat dan terpercaya untuk
         memenuhi kebutuhan perizinan serta menganalisis dampak lalu lintas
         perusahaan Anda.
        </p>
       </div>
       <nav
        className='col-span-2 md:col-span-4 lg:col-span-2'
        aria-labelledby='footer-product-5-logo'>
        <h3
         className='mb-6 text-base font-medium text-slate-700'
         id='footer-product-5-logo'>
         Product
        </h3>
        <ul>
         <li className='mb-2 leading-6'>
          <a
           href='#service'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           Service
          </a>
         </li>
         <li className='mb-2 leading-6'>
          <a
           href='#client'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           Customers
          </a>
         </li>
         <li className='mb-2 leading-6'>
          <a
           href='#pricing'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           Pricing
          </a>
         </li>
        </ul>
       </nav>
       <nav
        className='col-span-2 md:col-span-4 lg:col-span-2'
        aria-labelledby='footer-docs-5-logo'>
        <h3
         className='mb-6 text-base font-medium text-slate-700'
         id='footer-docs-5-logo'>
         Docs & Help
        </h3>
        <ul>
         <li className='mb-2 leading-6'>
          <a
           href='#documentation'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           Documentation
          </a>
         </li>
         <li className='mb-2 leading-6'>
          <a
           href='#faq'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           FAQ's
          </a>
         </li>
         <li className='mb-2 leading-6'>
          <a
           href='#contact'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           Help Center
          </a>
         </li>
        </ul>
       </nav>
       <nav
        className='col-span-2 md:col-span-4 lg:col-span-2'
        aria-labelledby='footer-about-5-logo'>
        <h3
         className='mb-6 text-base font-medium text-slate-700'
         id='footer-about-5-logo'>
         About us
        </h3>
        <ul>
         <li className='mb-2 leading-6'>
          <a
           href='javascript:void(0)'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           About us
          </a>
         </li>
        </ul>
       </nav>
       <nav
        className='col-span-2 md:col-span-4 lg:col-span-2'
        aria-labelledby='footer-get-in-touch-5-logo'>
        <h3
         className='mb-6 text-base font-medium text-slate-700'
         id='footer-get-in-touch-5-logo'>
         Get in touch
        </h3>
        <ul>
         <li className='mb-2 leading-6'>
          <a
           href='#contact'
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF]'>
           Contact
          </a>
         </li>
        </ul>
       </nav>
      </div>
     </div>
    </div>
    <div className='py-4 text-sm border-t border-1 bg-gray-200'>
     <div className='container px-6 mx-auto'>
      <div className='flex justify-between lg:grid md:grid gap-6 md:grid-cols-8 lg:grid-cols-12'>
       <div className='col-span-2 md:col-span-4 lg:col-span-6'>
        Copyright 2024 Astha Brata
       </div>
       <nav
        aria-labelledby='footer-social-links-light'
        className='col-span-2 text-right md:col-span-4 lg:col-span-6'>
        <h2
         className='sr-only'
         id='footer-social-links-light'>
         Social Media Links
        </h2>
        <ul className='flex items-center justify-end gap-4'>
         <li>
          <a
           href=''
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF] text-xl'>
           <FaInstagram />
          </a>
         </li>
         <li>
          <a
           href=''
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF] text-xl'>
           <FaWhatsapp />
          </a>
         </li>
         <li>
          <a
           href=''
           className='transition-colors duration-300 hover:text-[#3F72AF] focus:text-[#3F72AF] text-xl'>
           <FaLinkedin />
          </a>
         </li>
        </ul>
       </nav>
      </div>
     </div>
    </div>
   </footer>
   {/*    <!-- End Five Columns Footer with Logo --> */}
  </>
 );
}

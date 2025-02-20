import React from 'react';
import Navbar from '../Navbar/Navbar';
import Iridescence from '../Home/Iridescence';
import CornerSvg from '../../assets/CornerSvg.svg';

function EventRegistrationPage() {
  return (
    <>
      <Navbar />
      <div className='pb-6 flex flex-col lg:flex-row items-center lg:items-stretch gap-4 px-5 md:px-10 pt-3'>
        {/*Wave*/}
     

        {/* Google Form Embed */}
        <div className='flex flex-col items-center justify-between gap-4 w-full '>
          <div className='flex flex-col items-center w-full justify-center relative bg-[#5d55fa] p-4 rounded-3xl text-white'>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLScy3e8RW8uaWQwWJ0_qVyV4628Vnd3FwX9Y20O-QOh9RFk5-A/viewform?embedded=true'
              width='100%'
              height='800'
              frameBorder='0'
              marginHeight='0'
              marginWidth='0'
              title='Event Registration Form'
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventRegistrationPage;
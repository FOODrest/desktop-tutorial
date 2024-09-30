import React from 'react';
import { useLanguage } from '../../LanguageContext';
import PropTypes from 'prop-types';

const Services = () => {
  const { translate } = useLanguage();

  return (
    <section id='services'><br /><br />
      <h1 style={{
          fontSize: "2.25rem",
          fontWeight: "800",
          textAlign: 'center',
          color: "#1a202c",
          background: "linear-gradient(to right, #38a169, #805ad5)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        {translate('service') || 'Services'} {/* Fallback to 'Services' if translation is missing */}
      </h1>
      <div className='p-16 sm:p-12 ' style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '1rem', display: 'flex' }}>
        <ul className="grid gap-20 sm:gap-40 sm:grid-cols-2 lg:grid-cols-2 p-2 xl:p-5" style={{ width: 'auto' }}>
          {/* Service Item 1 */}
          <li>
            <div className="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
              <div className='h-[16rem] md:h-[21.875rem]' style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img className="rounded-t-lg object-bottom" src="../assets/image_7.JPG" alt="" style={{ bottom: '0', position: 'absolute', height: 'auto', width: '100%', objectFit: 'cover' }} />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Pawsome Plate</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {translate('Pawsome') || 'Pawsome'} {/* Fallback text */}
                </p>
                <p className="mb-8">
                  <b className="text-lime-500 text-2xl">30mad/kg</b>
                </p>
                <div style={{ width: '100%', justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                  <a href="https://wa.me/212669150042"
                    className="flex flex-row items-center w-36 justify-center py-2 mb-4 text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 hover:shadow-lg hover:-translate-y-1">
                    {translate('Order') || 'Order'} {/* Fallback text */}
                  </a>
                </div>
              </div>
            </div>
          </li>
          {/* Service Item 2 */}
          <li>
            <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
            <div className='h-[16rem] md:h-[21.875rem]' style={{ width: '100%', overflow: 'hidden' }}>
                <img className="rounded-t-lg" src="../assets/image_10.JPG" alt="" style={{ height: 'auto', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dog Walking/Educating</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {translate('Walking') || 'Walking'} {/* Fallback text */}
                </p>
                <p className='mb-8'>
                  <b className='text-lime-500 text-2xl'>80Mad/h</b>
                </p>
                <div style={{ width: '100%', justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                  <a href="https://wa.me/212669150042"
                    className="flex flex-row items-center w-36 justify-center py-2 mb-4 text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 hover:shadow-lg hover:-translate-y-1">
                    {translate('Order') || 'Order'} {/* Fallback text */}
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

Services.propTypes = {
  // Define any props if necessary, e.g.:
  // someProp: PropTypes.string,
};

export default Services;

import React from 'react'
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const {  translate} = useLanguage();
  return (
    <>
      

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                <img src="../assets/logo_huggingtails.png" alt="" style={{ height:'80px',width:'auto',borderRadius:'50%',boxShadow:'0 0 5px rgba(0,0,0,0.5)' }}/>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick links</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#home" className="hover:underline">Home</a>
                        </li>
                        <li className="mb-4">
                            <a href="#About-Us" className="hover:underline">
                            {translate('about')}</a>
                        </li>
                        <li className="mb-4">
                            <a href="#services" className="hover:underline">
                            {translate('service')}</a>
                        </li>
                        <li className="mb-4">
                            <a href="#Gallary" className="hover:underline">
                            {translate('galerie')}</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                            {translate('contact')}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li>
                            <a href="" className="hover:underline">instagram</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">{translate('Privacy')}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Hugging Tails
            </a>. All Rights Reserved.
            </span>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer

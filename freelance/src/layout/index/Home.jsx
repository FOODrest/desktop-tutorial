import React from 'react';
import Contact from './Contact';
import Gallary from './Gallary';
import Services from './Services';
import { useLanguage } from '../../LanguageContext';
const Home = () => {
  const {  translate} = useLanguage(); 
  return (
    <div id="home">
      <section className="bg-white dark:bg-gray-900" style={{ border:'none' }}>
        <main  style={{ border:'none' }}>
        <section className="relative bg-[rgb(155,149,89)]  text-white overflow-hidden py-20 md:py-[170px]" style={{ height:'auto', border:'none'}}>
            <div className="absolute  bg-[rgb(155,149,89)] "></div>
            <div className="hidden sm:block absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('../../../assets/image-100.png')",backgroundPosition:"center",backgroundAttachment:'local',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
            
            <div className="container mx-auto px-4 py-5 md:py-40 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between" >
                    <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color:'rgba(255,255,255,0.9' }}>
                            Hugging Tails
                        </h1>
                        <p className="text-xl mb-8 "  style={{ color:'rgba(255,255,255,0.9' }}>{translate('hero')}</p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#contact" className=" bg-green-700 sm:w-fit hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition duration-300 text-center">{translate('GetStarted')}</a>
                            <a href="#About-Us" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-center">{translate('LearnMore')}</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                        <div className=" backdrop-filter backdrop-blur-sm rounded-xl p-8 " style={{ background:'rgba(0,0,0,0.2)',boxShadow:'0 0 10px rgba(0,0,0,0.2)' }}>
                            <h2 className="text-2xl font-semibold mb-6">
                            {translate('why')}</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span>
                                    {translate('delivery')} </span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>
                                    {translate('Trusted')}</span>
                                </li>
                                <li className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12a4 4 0 018 0v2a2 2 0 002 2h2a2 2 0 002-2v-2a10 10 0 00-20 0v2a2 2 0 002 2h2a2 2 0 002-2v-2zm0 0h.01"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18h6a2 2 0 012 2v0a2 2 0 01-2 2H9a2 2 0 01-2-2v0a2 2 0 012-2z"></path>
</svg>
                                    <span>
                                    {translate('costumer')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0" style={{ border: 'none',color:'white', backgroundColor: 'transparent' }}>
              <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none"  d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
              </svg>
            </div>
            <div style={{ width:'100%',height:'7px',backgroundColor:'white' ,position:'absolute',bottom:'0' }}>

            </div>
        </section>
    </main>
      </section>
    <section className="py-12" id="About-Us"  style={{ border:'none' }} >
    <div className="container mx-auto py-16 px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {translate('about')}</h2>
                <p className="mt-4 text-gray-600 text-lg text-center">
                
    {translate('aboutus')}
                </p>
            </div>
            <div className="mt-12 md:mt-0 flex justify-center items-center ">
                <img src="../assets/image_74.jpeg" alt="About Us Image" className="object-cover rounded-lg" style={{ boxShadow:'0 0 10px rgba(0,0,0,0.3)',height:'auto',width:'60%' }}/>
            </div>
        </div>
    </div>
</section>
<Services/>
          <Gallary/>
      <Contact/>
    </div>
    
  );
};

export default Home;

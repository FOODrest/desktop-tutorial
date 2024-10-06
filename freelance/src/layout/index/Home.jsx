import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { useLanguage } from '../../LanguageContext';
const Home = () => {
  const {  translate} = useLanguage(); 
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      const response = await axios.post('http://localhost:3000/send-email', {
        to: 'ahmedcherkaouisellami@gmail.com',
        subject: 'New Contact Form Submission',
        body: `Email: ${formData.email} \n\nPhone Number: ${formData.phoneNumber}\n\nMessage: ${formData.message}`,
      });
  
      if (response.status === 200) {
        setStatus("Message sent successfully! we'll contact you in 48h at max.");
        setFormData({ email: '', phoneNumber: '', message: '' });
      } else {
        throw new Error('Failed to send message , please contact our team on huggingtails.1@gmail.com');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus(error.response?.data?.message || 'An error occurred. Please try again later.');
    }
  };
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
  const galleryRef = useRef(null);

  const imageGalleryOpen = (event) => {
    setImageGalleryImageIndex(parseInt(event.target.dataset.index, 10));
    setImageGalleryActiveUrl(event.target.src);
    setImageGalleryOpened(true);
  };

  const imageGalleryClose = () => {
    setImageGalleryOpened(false);
    setTimeout(() => setImageGalleryActiveUrl(null), 300);
  };

  const imageGalleryNext = () => {
    const totalImages = galleryRef.current.childElementCount;
    setImageGalleryImageIndex((prevIndex) =>
      prevIndex === totalImages ? 1 : prevIndex + 1
    );
    setImageGalleryActiveUrl(
      galleryRef.current.querySelector(`[data-index='${imageGalleryImageIndex + 1}']`).src
    );
  };

  const imageGalleryPrev = () => {
    const totalImages = galleryRef.current.childElementCount;
    setImageGalleryImageIndex((prevIndex) =>
      prevIndex === 1 ? totalImages : prevIndex - 1
    );
    setImageGalleryActiveUrl(
      galleryRef.current.querySelector(`[data-index='${imageGalleryImageIndex - 1}']`).src
    );
  };

  useEffect(() => {
    const images = galleryRef.current.querySelectorAll("img");
    images.forEach((img, index) => {
      img.setAttribute("data-index", index + 1);
    });
  }, []);
  return (
    <div id="home"  className="bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900" style={{ border:'none' }}>
            <main  style={{ border:'none' }}>
                <section className="relative bg-[rgb(155,149,89)]  text-white overflow-hidden py-20 md:py-[170px]" style={{ height:'auto', border:'none'}}>
                    <div className="absolute inset-0 bg-cover bg-center   "style={{backgroundImage: "url('../../../assets/hero3.jfif')",backgroundPosition:"center",backgroundAttachment:'local',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
                    <div className="absolute w-full h-full inset-0 bg-cover bg-center bg-[rgb(0,0,0,0.3)]"></div>
                    
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
                                                {translate('delivery')} 
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                            <span>
                                                {translate('Trusted')}
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12a4 4 0 018 0v2a2 2 0 002 2h2a2 2 0 002-2v-2a10 10 0 00-20 0v2a2 2 0 002 2h2a2 2 0 002-2v-2zm0 0h.01"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18h6a2 2 0 012 2v0a2 2 0 01-2 2H9a2 2 0 01-2-2v0a2 2 0 012-2z"></path>
                                            </svg>
                                            <span>
                                                {translate('costumer')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0" style={{ border: 'none',color:'white', backgroundColor: 'transparent' }}>
                    
                    </div>
                    <div className="bg-white dark:bg-gray-900" style={{ width:'100%',height:'7px' ,position:'absolute',bottom:'0' }}>
                    </div>
                </section>
            </main>
        </section>




        <section className="py-12 bg-white dark:bg-gray-900 text-black dark:text-white" id="About-Us"  style={{ border:'none' }} >
        {/* About-Us */}
            <div className="container mx-auto py-16 px-5 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-bold  mb-8 text-center">
                        {translate('about')}</h2>
                        <p className="mt-4  text-lg text-center">
                            {translate('aboutus')}
                        </p>
                    </div>
                    <div className="mt-12 md:mt-0 flex justify-center items-center ">
                        <img src="../assets/image_74.jpeg" alt="About Us Image" className="object-cover rounded-lg" style={{ boxShadow:'0 0 10px rgba(0,0,0,0.3)',height:'auto',width:'60%' }}/>
                    </div>
                </div>
            </div>
        </section>




        <section id='services' className="bg-white dark:bg-gray-900 "><br /><br />
        {/* services */}
            <h1 className="text-black dark:text-white"
                style={{
                fontSize: "2.25rem",
                fontWeight: "800",
                textAlign: 'center',
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                }}
            >
                {translate('service') || 'Services'} {/* Fallback to 'Services' if translation is missing */}
            </h1>
            <div className='p-12 sm:p-8 ' style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '1rem', display: 'flex' }}>
                <ul className="grid gap-20 sm:gap-40 sm:grid-cols-2 lg:grid-cols-2 p-2 xl:p-5" style={{ width: 'auto' }}>
                {/* Service Item 1 */}
                    <li>
                        <div className="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ overflow: 'hidden' }}>
                        <div className='h-[16rem] md:h-[21.875rem]' style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                            <img className="rounded-t-lg object-bottom" src="../assets/image_7.JPG" alt="" style={{ bottom: '0', position: 'absolute', height: 'auto', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Pawsome Plate</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {translate('Pawsome') || 'Pawsome'} {/* Fallback text */}
                            </p>
                            <p className="sm:mb-8 mb-2">
                            <b className="text-lime-500 text-2xl">30mad/kg</b>
                            </p>
                            <div style={{ width: '100%', justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                            <a href="https://wa.me/212669150042"
                                className="flex flex-row items-center w-36 justify-center py-2  text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 hover:shadow-lg hover:-translate-y-1">
                                {translate('Order') || 'Order'} {/* Fallback text */}
                            </a>
                            </div>
                        </div>
                        </div>
                    </li>
                    {/* Service Item 2 */}
                    <li>
                        <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-[0_0_10px_rgba(0,0,0,0.5)] ">
                            <div className='h-[16rem] md:h-[21.875rem]' style={{ width: '100%', overflow: 'hidden' }}>
                                <img className="rounded-t-lg" src="../assets/image_10.JPG" alt="" style={{ height: 'auto', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dog Walking/Educating</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {translate('Walking') || 'Walking'} {/* Fallback text */}
                                </p>
                                <p className='sm:mb-8 mb-2'>
                                    <b className='text-lime-500 text-2xl'>80Mad/h</b>
                                </p>
                                <div style={{ width: '100%', justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                                    <a href="https://wa.me/212669150042"
                                        className="flex flex-row items-center w-36 justify-center py-2  text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 hover:shadow-lg hover:-translate-y-1">
                                        {translate('Order') || 'Order'} {/* Fallback text */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>




        <div id="Gallary" className="bg-white dark:bg-gray-900">
        {/* Gallary */}
        <section style={{ padding: "6rem 1rem", maxWidth: "90rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center"}}>
            <h1 className="text-black dark:text-white" style={{
              fontSize: "2.25rem",
              fontWeight: "800",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}>
              {translate('galerie')}
            </h1>
          </div>
        </section>
  
        {/* Image Gallery Section */}
        <section className="py-8 lg:py-16  mx-auto max-w-full">
          <div style={{ maxWidth: "72rem", margin: "0 auto", opacity: 1, transition: "opacity 1s ease" }}>
            <ul ref={galleryRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
              {[
                "../../../assets/image_1.JPG",
                "../../../assets/image_2.JPG",
                "../../../assets/image_72.JPG",
                "../../../assets/image_4.JPG",
                "../../../assets/image_5.JPG",
                "../../../assets/image_6.JPG",
                "../../../assets/image_9.JPG",
                "../../../assets/image_71.JPG",
                "../../../assets/image_11.JPG",
                "../../../assets/image_12.JPG",
                "../../../assets/image_64.JPG",
                "../../../assets/image_123.JPG",
              ].map((src, index) => (
                <li key={index}>
                  <img
                    onClick={imageGalleryOpen}
                    src={src}
                    style={{
                      width: "100%",
                      backgroundColor: "#e2e8f0",
                      borderRadius: "0.5rem",
                      cursor: "zoom-in",
                      aspectRatio: "5/6",
                      objectFit: "cover"
                    }}
                    alt={`gallery image ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
  
          {/* Image Modal */}
          {imageGalleryOpened && (
            <div
              onClick={imageGalleryClose}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                cursor: "zoom-out"
              }}
            >
              <div style={{ position: "relative", width: "85%", height: "85%" }}>
                <img
                  src={imageGalleryActiveUrl}
                  alt=""
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%"
                  }}
                />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    imageGalleryPrev();
                  }}
                  style={{
                    position: "absolute",
                    left: "1rem",
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ width: "1.5rem", height: "1.5rem", color: "#fff" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    imageGalleryNext();
                  }}
                  style={{
                    position: "absolute",
                    right: "1rem",
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ width: "1.5rem", height: "1.5rem", color: "#fff" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>




      
        <section id='contact' className="bg-white dark:bg-gray-900">
            {/*  Contact */}
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                {translate('contact')}</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter Email....."
                    required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {translate('Phone')}</label>
                    <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="+212 ..."
                    required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    {translate('Yourmessage')}</label>
                    <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                    required
                    ></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {translate('Sendmessage')}
                </button>
                {status && <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{status}</p>}
                </form>
            </div>
            </section>
    </div>
    
  );
};

export default Home;
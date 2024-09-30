import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from '../../LanguageContext';
const Gallary = () => {
  const {  translate} = useLanguage();
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
      <div id="Gallary">
        {/* Main Section */}
        <section style={{ padding: "6rem 1rem", maxWidth: "90rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center"}}>
            <h1 style={{
              fontSize: "2.25rem",
              fontWeight: "800",
              color: "#1a202c",
              background: "linear-gradient(to right, #38a169, #805ad5)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}>
              {translate('galerie')}
            </h1>
          </div>
        </section>
  
        {/* Image Gallery Section */}
        <section style={{ width: "100%", height: "100%",padding:' 0 10px' }}>
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
    );
  };

export default Gallary

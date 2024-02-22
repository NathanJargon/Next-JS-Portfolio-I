'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
  <div className="app-container">
    <div className="carousel-container">
      <Slider {...settings}>
          <div>
            <img className="carousel-image"  src="/assets/image1.png" alt="Work 1" />
            <p className="legend">Work 1</p>
          </div>
          <div>
            <img className="carousel-image"  src="/assets/image2.png" alt="Work 2" />
            <p className="legend">Work 2</p>
          </div>
          <div>
            <img className="carousel-image"  src="/assets/image3.png" alt="Work 3" />
            <p className="legend">Work 3</p>
          </div>
          <div>
            <img className="carousel-image" src="/assets/image4.png" alt="Work 4" />
            <p className="legend">Work 4</p>
          </div>
          <div>
            <img className="carousel-image"  src="/assets/image5.png" alt="Work 5" />
            <p className="legend">Work 5</p>
          </div>
          <div>
            <img className="carousel-image" src="/assets/image6.jpg" alt="Work 6" />
            <p className="legend">Work 6</p>
          </div>
        </Slider>
        <nav className="fixed top-0 right-0 p-6">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-6">
              <Link href="/about" passHref>
                <div className="px-3 py-2 rounded text-white font-bold hover:font-extrabold hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1 text-sm sm:text-base md:text-lg lg:text-xl">
                  About
                </div>
              </Link>
              <Link href="/services" passHref>
                <div className="px-3 py-2 rounded text-white font-bold hover:font-extrabold hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1 text-sm sm:text-base md:text-lg lg:text-xl">
                  Services
                </div>
              </Link>
              <Link href="/contact" passHref>
                <div className="px-3 py-2 rounded text-white font-bold hover:font-extrabold hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:translate-y-1 text-sm sm:text-base md:text-lg lg:text-xl">
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
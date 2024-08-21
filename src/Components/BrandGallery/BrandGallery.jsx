// import Swiper core and required modules
import { A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import b1Image from "../../assets/images/brands/b1.svg";
import b2Image from "../../assets/images/brands/b2.svg";
import b3Image from "../../assets/images/brands/b3.svg";
import b4Image from "../../assets/images/brands/b4.svg";
import b5Image from "../../assets/images/brands/b5-main.svg";
import b6Image from "../../assets/images/brands/b6.svg";
import b7Image from "../../assets/images/brands/b7.svg";
import b8Image from "../../assets/images/brands/b8.svg";
import b9Image from "../../assets/images/brands/b9.svg";

export default function BrandGallery() {
    return (
        <div className='container-fluid m-0 row p-0'>
            <div className='col-6 col-md-2 row m-0 p-0 py-2 d-flex flex-row flex-md-column justify-content-between align-items-center'>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b1Image} alt='brand1' />
                </div>
                <div className='col-12 py-2 d-flex justify-content-center'>
                    <img src={b2Image} alt='brand2' />
                </div>
            </div>
            <div className='col-6 col-md-2 row m-0 p-0 py-2 d-flex flex-row flex-md-column justify-content-between align-items-center'>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b3Image} alt='brand1' />
                </div>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b4Image} alt='brand2' />
                </div>
            </div>
            <div className='col-12 col-md-4 row m-0 p-0 py-2 d-flex flex-column justify-content-between h-100'>
                <img src={b5Image} alt='brand1' />
            </div>
            <div className='col-6 col-md-2 row m-0 p-0 py-2 d-flex flex-row flex-md-column justify-content-between align-items-center'>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b6Image} alt='brand1' />
                </div>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b7Image} alt='brand2' />
                </div>
            </div>
            <div className='col-6 col-md-2 row m-0 p-0 py-2 d-flex flex-row flex-md-column justify-content-between align-items-center'>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b8Image} alt='brand1' />
                </div>
                <div className='col-12 d-flex py-2 justify-content-center'>
                    <img src={b9Image} alt='brand2' />
                </div>
            </div>

        </div>
    );
};
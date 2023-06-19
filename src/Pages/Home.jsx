import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { toast } from 'react-toastify';
const slides = [
  'https://robohash.org/set_set3/bgset_bg1/3.14159?size=500x500',
  'https://robohash.org/set_set3/bgset_bg2/3.14159?size=500x500',
  'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
  'https://robohash.org/set_set3/bgset_bg2/3.14159?size=500x500',
];

const Home = () => {
  document.title = 'Home';
  return (
    <div className='md:container'>
      <div className='mt-4'>
        <Carousel indicator={true} controls={true}>
          {slides.map((slide, i) => (
            <img
              key={i}
              className={`flex-grow-0 flex-shrink-0 basis-full h-[500px]`}
              src={slide}
            />
          ))}
        </Carousel>
      </div>
      <button
        onClick={() => {
          toast('Wow so easy !');
        }}
      >
        click
      </button>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import P1 from '../Assets/1.png';
import P2 from './assets/Images/BloomBuddies.png';

function Home() {
  return (
    <div className="home-container font-fam-bold text-left mt-[100px] md:mt-[160px]">
      <div className='visual-designer-container mt-2 md:mt-10 ml-0 md:ml-1/3'>
        <div className='ml-[10.5%] md:ml-[8.8%] fade-in-text'>
            <div className='visual-designer font-playfair-bold font-bold text-4xl md:text-8xl text-[#D1547E] opacity-50'>
            <span className=''> VISUAL </span> <br />
            <span className=''> DESIGNER </span> <br />
            </div>
            <div className='description mt-[10px] md:mt-20 font-arimo text-xs md:text-2xl'>
            A visual wizard with interest in{' '}
            <span className='text-[#D1547E] opacity-50'>
                User experience, User interface
            </span>{' '}
            and{' '}
            <span className='text-[#D1547E] opacity-50'>
                Print.
            </span>
            </div>
        </div>
      </div>
      <div className='mt-[80px] m-4 mx-auto grid grid-cols-1 md:grid-cols-2 max-w-[85%] md:gap-0'>
        <Link to={`/workflow/Joy - The Mental Health App/1`} className='flex-1 mx-auto m-4'>
          <Card imageSrc={P1} name={"Joy - The Mental Health App"} />
        </Link>
        <Link to={`/workflow/Bloom Buddies/2`} className='flex-1 mx-auto m-4'>
          <Card imageSrc={P2} name={"Bloom Buddies"} />
        </Link>
      </div>
      <Link to="/work" className='underline-effect-pink hover:text-[#D1547E] text-lg m-10 md:text-2xl mx-auto block text-center w-[281px]'>
        <div>
        Click To View All Projects
        </div>
      </Link>
    </div>
  );
}

export default Home;

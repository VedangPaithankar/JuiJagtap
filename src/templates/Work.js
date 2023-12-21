  import React from 'react';
  import Card from '../components/Card';
  import P1 from './assets/Images/Joy.png';
  import P2 from './assets/Images/BloomBuddies.png';
  import P3 from './assets/Images/Internship.png';
  import P4 from './assets/Images/Tejaswini.png';
  import P5 from './assets/Images/Valorant.png';
  import P7 from './assets/Images/PuneriBytes.png';
  import P8 from './assets/Images/Squisito.png';
  import P9 from './assets/Images/ADW.png';
  import P10 from './assets/Images/Illustrations.png';
  import { Link } from 'react-router-dom';

  const projects = [
    {
      id:1,
      name: 'Joy - The Mental Health App',
      link: '#',
      imageSrc: P1,
    },
    {
      id:2,
      name: 'Bloom Buddies',
      link: '#',
      imageSrc: P2,
    },
    {
      id:3,
      name: 'Luxor Trails Internship',
      link: '#',
      imageSrc: P3,
    },
    {
      id:4,
      name: 'Tejaswini',
      link: '#',
      imageSrc: P4,
    },
    {
      id:5,
      name: 'Valorant',
      link: '#',
      imageSrc: P5,
    },
    {
      id:6,
      name: 'Rewise 2023',
      link: 'https://www.behance.net/gallery/170871269/REWISE-2023',
      imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/639481170871269.6465223a466a1.jpg',
    },
    {
      id:7,
      name: 'Puneri Bytes',
      link: '#',
      imageSrc: P7,
    },
    {
      id:8,
      name: 'Squisito - An Italian Restaurant',
      link: '#',
      imageSrc: P8,
    },
    {
      id:9,
      name: 'Ahmedabad Design Week',
      link: '#',
      imageSrc: P9,
    },
    {
      id:10,
      name: 'Illustrations',
      link: '#',
      imageSrc: P10,
    },
  ];

  function Work() {
    return (
      <div className='text-center mt-[100px] md:mt-[160px]'>
        <div className='font-fam-bold text-[30px] md:text-[60px] text-[#373737] mb-4 md:mb-10'>
          My Projects
        </div>
        <div className={`mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 md:gap-[-20px] max-w-[85%]`}>
            {/* Card 1 */}
            <Link to={`/workflow/${projects[0].name}/${projects[0].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[0]} />
            </Link>

            {/* Card 2 */}
            <Link to={`/workflow/${projects[1].name}/${projects[1].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[1]} />
            </Link>

            {/* Card 3 */}
            <Link to={`/workflow/${projects[2].name}/${projects[2].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[2]} />
            </Link>

            {/* Card 4 */}
            <Link to={`/workflow/${projects[3].name}/${projects[3].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[3]} />
            </Link>

            {/* Card 5 */}
            <Link to={`/workflow/${projects[4].name}/${projects[4].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[4]} />
            </Link>

            {/* Card 6 */}
            <a href={`${projects[5].link}`} target='_blank' rel="noopener noreferrer" className='flex-1 mx-auto m-4'>
              <Card {...projects[5]} />
            </a>

            {/* Card 7 */}
            <Link to={`/workflow/${projects[6].name}/${projects[6].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[6]} />
            </Link>

            {/* Card 8 */}
            <Link to={`/workflow/${projects[7].name}/${projects[7].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[7]} />
            </Link>

            {/* Card 9 */}
            <Link to={`/workflow/${projects[8].name}/${projects[8].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[8]} />
            </Link>

            {/* Card 10 */}
            <Link to={`/workflow/${projects[9].name}/${projects[9].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[9]} />
            </Link>
        </div>
      </div>
    );
  }

  export default Work;
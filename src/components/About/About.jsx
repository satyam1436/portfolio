import React from 'react'
import { ReactTyped } from "react-typed";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[2vw] lg:px-[10vw] font-sans'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-4xl font-bold text-white mb-2 leading-tight'>
            Hii, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight'>
            Satyam Kumar
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl md:pr-3 font-semibold text-[#8245ec] mb-4 leading-tight'>
            <span className='text-white'>
              I am a &nbsp;
            </span>
            <ReactTyped
              strings={[
                "Fullstack Developer",
                "Progammer",
                "UI/UX Designer",
                "Coder",
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
              showCursor
              cursorChar="|"
            />
          </h3>
          {/* About me paragraph */}
          <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 pr-3 leading-relaxed'>
            I am a Computer Science graduate and full stack developer with experience in designing, developing, and maintaining web applications. I have a solid understanding of frontend and backend technologies, databases, and RESTful APIs. With hands on experience from academic projects and internships, I focus on writing clean, scalable code and continuously enhancing my technical skills to build efficient, reliable, and high quality software solutions.
          </p>
          {/* Resume button */}
          <a href="https://drive.google.com/file/d/10z6f5k9y7Yawmzh3iQcFoqlvhte1lpG0/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-semibold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
            className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Satyam Kumar"
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About

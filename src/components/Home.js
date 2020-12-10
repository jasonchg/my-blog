import React from 'react'

const Home = () => {
  return (
    <>
      <main>
        <img
          className='absolute object-cover w-full h-full'
          src='https://images.pexels.com/photos/6032713/pexels-photo-6032713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''
        />

        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 '>
          <h1 className='text-6xl text-green-500 font-bold cursive leading-none lg:leaning-snug home-name'>
            Hi there!
          </h1>
        </section>
      </main>
    </>
  )
}

export default Home

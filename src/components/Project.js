import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../SanityClient'

const Project = () => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
    title, 
    date,
    place,
    description,
    projectType,
    link,
    tags
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <main className='bg-green-100 min-h-screen p-12'>
        <section className='container mx-auto'>
          <h1 className='text-5xl flex justify-center cursive'> My Project</h1>
          <h2 className='text-lg text-grey-600 flex justify-center mb-12'>
            My projects
          </h2>
          <section className='grid grid-cols-2 gap-8'>
            {projects &&
              projects.map((project, index) => (
                <article
                  key={index}
                  className='relative rounded-lg shadow-xl bg-white p-16'
                >
                  <h3 className='text-grey-800 text-3xl font-bold mb-2 hover:text-red-700'>
                    <a
                      className=''
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className='text-grey-500 text-xs space-x-4'>
                    <span>
                      <strong className='font-bold'>Finished on</strong> :{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className='font-bold'>Company</strong> :{' '}
                      {project.place}
                    </span>
                    <span>
                      <strong className='font-bold'>Type</strong> :{' '}
                      {project.projectType}
                    </span>
                    <p className='my-6 text-lg text-grey-700 leading-relaxed'>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-red-500 font-bold hover:underline hover:text-red-400 text-xl'
                    >
                      View the project{' '}
                      <span role='img' aria-label='right pointer'>
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </main>
    </>
  )
}

export default Project

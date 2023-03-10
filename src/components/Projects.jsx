import React from 'react'
import { useTranslation } from 'react-i18next';
import spanish from '../translations/spanish/spanish.json'
import english from '../translations/english/english.json'

import magmaImage from '../assets/projects/magma-project.png'
import medicalImage from '../assets/projects/medicalCenter-project.png'

const Projects = () => {

  const [t,i18n] = useTranslation("global")

  let languageProjects

  (i18n.language === "es"
  ? languageProjects = spanish
  : languageProjects = english
  )

  const imagesProjects = [medicalImage, magmaImage]

  return (
    <section id="Proyectos" className='text-center text-black bg-gray-50 py-10 px-2 md:px-20'>
      <h1 id="Projects" className='text-5xl font-semibold'>{t("projects.title")}</h1>
      <div className=' gap-4 text-black max-w-7xl mx-auto'>
      {languageProjects.projects.list.map((project,key) => {
          let reverse
         {key % 2 === 0 ?  reverse = "flex-row-reverse" : reverse = ""}
        return(
          <div className={`my-20 w-full mx-auto lg:flex bg-white shadow-xl ${reverse}`} key={key} >
            <img
            onClick={() => window.open(project.url)}
            className='w-full lg:w-7/12 cursor-pointer'
            src={imagesProjects[key]}
            alt={project.nameProject} />
            <div className='lg:max-w-lg flex flex-col justify-center items-center p-4 sm:p-10 gap-4'>

            <h3 className='text-2xl bold'>{project.nameProject}</h3>
              <p className='text-justify'>{project.summary}</p>
              {Array.isArray(project.technologies)
              ? <p className='opacity-60'>#{project.technologies.join(', ')}</p>
              : <p>#{project.technologies}</p>
              }
              <button onClick={() => window.open(project.url)} className='mt-4 px-16 py-4 rounded-lg bg-rose-700 text-white shadow-lg' type='button'>{t("projects.button-text")}</button>
            </div>
          </div>
        )
        }
      )}
      </div>
    </section>
  )
}

export default Projects
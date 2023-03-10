import React, {useEffect, useState} from 'react'

import { contacts } from '../data/information'
import CvSpanish from '../assets/CV_Frontend_Camilo_Hernandez.pdf'
import CvEnglish from '../assets/[ENG]_CV_Frontend_Camilo_Hernandez.pdf'

import { useTranslation } from 'react-i18next'

const Header = () => {

  const [t,i18n] = useTranslation('global')

  const whatsappContact = "https://api.whatsapp.com/send/?phone=573053262656&text&type=phone_number&app_absent=0"

  const [curriculum, setCurriculum] = useState(CvSpanish)

  useEffect(() => {
    (i18n.language === "es" ? setCurriculum(CvSpanish) : setCurriculum(CvEnglish) )
  }, [i18n.language])


  return (
   <section className='static h-1/2 flex' id="Inicio">
      <div id="Home" className="hidden fixed w-fit h-40 gap-10 sm:flex flex-col justify-center items-center items-center gap-8 mx-2  top-20">
        {contacts.map((contact,key) => {
          return(
          contact.name != "Gmail"
            ? <img onClick={() => window.open(contact.url)} className='cursor-pointer w-9' src={contact.icon} alt={contact.name} key={key}/>
            : null
          )}
        )}
      </div>
      <div className='flex flex-col justify-center items-center min-h-screen w-100 font-semibold max-w-xl mx-auto text-center gap-4 text-black px-4'>
        <h1 className='text-lg sm:text-xl'>{t("header.greating")} </h1>
        <h2 className='text-5xl sm:text-7xl font-bold'>Camilo Hernández</h2>
        <p className='text-lg sm:text-xl'> {t("header.description")} </p>
        <div className='flex flex-wrap gap-x-4 justify-center'>
          <a href = {curriculum} className='mt-4 px-16 py-4 rounded-lg bg-rose-700 text-white'>{t("header.button-cv")}</a>
          <a href = {whatsappContact} className='mt-4 px-16 py-4 rounded-lg border border-rose-700 text-white text-rose-700' >{t("header.button-contactMe")}</a>
        </div>
      </div>
    </section>
  )
}

export default Header
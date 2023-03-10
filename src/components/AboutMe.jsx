import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {

  const [t] = useTranslation('global')

  return (
    <section className='text-center text-white bg-gray-900 py-10 px-4 sm:px-24 xl:px-80 sm:py-20'>
        <h1 className='text-5xl font-semibold mb-4'>{t("about-me.title")}</h1>
        <p className='mx-auto max-w-3xl'>{t("about-me.description")}</p>
      </section>
  )
}

export default AboutMe
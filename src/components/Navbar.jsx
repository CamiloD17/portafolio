import React, { useState, useEffect } from 'react'
import burgerIcon from '../assets/menu.png'
import spanishIcon from '../assets/colombia.png'
import englishIcon from '../assets/united-states.png'
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';


const Navbar = () => {

  const [display, setDisplay] = useState("hidden")

  const openOrClose = () => (display === "hidden" ? setDisplay("block") : setDisplay("hidden"))

  const [t,i18n] = useTranslation("global")

  const titlesNavbar = [
    {
      "name": t("navbar.home"),
    },
    {
      "name":t("navbar.skills"),
    },
    {
      "name":t("navbar.projects"),
    },
  ]

  useEffect(() => {
    try{
      window.localStorage.setItem(("language"),i18n.language)
    } catch(error){
      console.log(error)
    }
  }, [i18n.language])


  return (
    <>
    <nav className='bg-gray-900 text-white'>
      <div className='flex justify-between p-4 px-10 md:px-12 lg:px-40 lg:py-5 2xl:max-w-7xl 2xl:mx-auto'>
      <h1 className='text-lg font-bold text-rose-700'>{"</>"}</h1>
      <img onClick={() => openOrClose()} className={`w-7 cursor-pointer sm:hidden`} src={burgerIcon} alt="menu-burger" />
      <ul className='hidden sm:flex gap-6 font-semibold'>
        {titlesNavbar.map((title,key) => {
          return(
            <Link to={title.name} key={key}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mr-3"
            >
            {title.name}
            </Link>
            )
        })}

       <div className="flex">
        <img onClick={() => i18n.changeLanguage("es")} className='w-7 mr-3 cursor-pointer' src={spanishIcon} alt="" />
        <img onClick={() => i18n.changeLanguage("en")} className='w-7 mr-3 cursor-pointer' src={englishIcon} alt="" />
        </div>
      </ul>
      </div>
    </nav>
    <ul className={`text-white bg-gray-900 sticky right-0 py-2 pb-5 px-10 rounded-bl-3xl sm:hidden ${display}`}>
      {titlesNavbar.map((title,key) => {
          return(
            <li className='mb-2' key={key}>
            <Link to={title.name}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            >
             {title.name}
            </Link>
            </li>
            )
        })}

      <div className="flex">
        <img onClick={() => i18n.changeLanguage("es")} className='w-7 mr-2' src={spanishIcon} alt="" />
        <img onClick={() => i18n.changeLanguage("en")} className='w-7 mr-2' src={englishIcon} alt="" />
      </div>
    </ul>
    </>
  )
}

export default Navbar
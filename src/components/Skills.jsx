import { webArea } from "../data/information"
import { useTranslation } from 'react-i18next';

const Skills = () => {

  const [t,i18n] = useTranslation("global")

  return (
    <section className='text-center bg-gray-50 text-black  py-10 px-4 sm:px-24 xl:px-80 sm:py-20' id="Habilidades">
       <h1 className='text-5xl font-semibold mb-10' id="Skills">{t("skills.title")}</h1>
       {/* Show how many areas of knowledge are and how many technologies we have in the areas knowledge */}
       {webArea.map((area,key) =>{
       return(
          <div className='mt-20 mx-auto max-w-7xl' key={key} >
            {(i18n.language === "en" && area.titleArea==="Otras"
              ? <h1 className='text-xl font-semibold mb-8'>{t("skills.others")}</h1>
              : <h1 className='text-xl font-semibold mb-8'>{area.titleArea}</h1>
            )}
          <div className='flex justify-evenly items-center flex-col sm:flex-row gap-6'>
            {webArea[key].technology.map((skill,key) => {
              return(
                <img className='w-10' src={skill} alt={area.titleArea} key={key}/>
              )}
            )}
          </div>
        </div>
        )}
       )}
    </section>
  )
}


export default Skills
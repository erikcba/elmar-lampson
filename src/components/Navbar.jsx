import React from 'react'
import MenuIcon from '../components/icons/MenuIcon'
import ElmarLogo from '../components/ElmarLogo'
import { useTranslation } from 'react-i18next'

const Navbar = ({ bgColor, toggleMenu, bgLang, menuColor, isOpen }) => {

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang)
  }
  return (
    <div className='container mx-auto py-12 xl:pt-32 px-0'>
      <div className='relative'>
        <ElmarLogo bgColor={bgColor} />
        <MenuIcon color={menuColor} onClick={toggleMenu} className={`absolute right-15 xl:left-1/4 xl:top-1/7 top-1 cursor-pointer ${isOpen ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000 '}`} />
        <span
          onClick={toggleLanguage}
          className={`absolute md:left-2/7 right-0 top-1 md:top-1/7 text-xl font-bold ${bgLang} rounded-full py-3 px-2 leading-none cursor-pointer select-none`}
        >
          {t('language')}
        </span>
      </div>
    </div>
  )
}

export default Navbar
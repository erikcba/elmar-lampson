import React from 'react'
import MenuIcon from '../components/icons/MenuIcon'
import ElmarLogo from '../components/ElmarLogo'
import { useTranslation } from 'react-i18next'
import HamburgerMenu from './icons/HamburguerMenu'

const Navbar = ({ bgColor, toggleMenu, bgLang, isOpen, hide, theme }) => {

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang)
  }
  return (
    <div className='container mx-auto px-0 md:pt-12 xl:pt-0 pt-12'>
      <div className='relative'>
        <ElmarLogo bgColor={bgColor} />
        <HamburgerMenu toggleMenu={toggleMenu} theme={theme} className={`hamburger-menu absolute right-15 md:left-1/4 md:translate-x-16 md:top-5 lg:left-48 xl:left-20 2xl:left-50 xl:translate-x-65 xl:top-5 2xl:translate-x-60  2xl:top-9 top-1 cursor-pointer ${isOpen ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000 '}`} />
        <span
          onClick={toggleLanguage}
          className={`absolute btn-language transition-all ease-in-out md:left-2/7 md:translate-x-25 right-0 top-1 md:top-4 lg:left-55 2xl:left-50 2xl:translate-x-75 2xl:top-8 md:text-2xl xl:translate-x-75 xl:top-4 xl:left-25 text-xl w-fit font-bold ${bgLang} ${hide} rounded-full py-3 px-2 leading-none cursor-pointer select-none`}
        >
          {t('language')}
        </span>
      </div>
    </div>
  )
}

export default Navbar
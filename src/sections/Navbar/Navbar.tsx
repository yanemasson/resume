import {Link} from '../../components/Link.tsx';
import {useTranslation} from "react-i18next";
import {Button, StyleVariant} from "../../components/Button.tsx";


// ..
export const Navbar = () => {
  const { t, i18n  } = useTranslation();
  const changeLanguage = () => {
    if(i18n.language == 'en') {
      return i18n.changeLanguage('ru')
    }
    return i18n.changeLanguage('en')

  }
  //const isUpLarge = useMediaBreakpoint('lg');

  return (
    <nav
      className={`h-20 fixed z-10 flex w-full items-center justify-center text-white duration-500 bg-green`}
    >
        <div className='flex w-full items-center justify-between px-20'>
          <div className='flex gap-5'>
            <Link to='#'>{t('About')}</Link>
            <Link to='#'>{t('Projects')}</Link>
            <Link to='#'>{t('Contact')}</Link>
          </div>
          <Button Color={StyleVariant.OutlineCurrent} onClick={() => changeLanguage()}>{i18n.language.toUpperCase()}</Button>
        </div>
    </nav>
  );
};

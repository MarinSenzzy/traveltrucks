import Link from 'next/link';
import css from './Header.module.css';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Link href="/" aria-label="TravelTrcks - Home" className={css.link}>
          <svg width={136} height={16} className="icon">
            <use href="/icons/Logo.svg" />
          </svg>
        </Link>
        <HeaderNav />
      </header>
    </>
  );
};
export default Header;

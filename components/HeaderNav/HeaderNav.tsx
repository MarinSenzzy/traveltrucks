'use client';
import Link from 'next/link';
import css from './HeaderNav.module.css';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <>
      <ul className={css.navigation}>
        <li>
          <Link
            href="/"
            aria-label="Home - TravelTrcks"
            className={`${css.link} ${isActive('/') ? css.activ : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            aria-label="Catalog - TravelTrcks"
            className={`${css.link} ${isActive('/catalog') ? css.activ : ''}`}
          >
            Catalog
          </Link>
        </li>
      </ul>
    </>
  );
};
export default HeaderNav;

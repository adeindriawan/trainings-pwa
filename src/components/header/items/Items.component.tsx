import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { injectClassNames } from 'utils/css';
import { useSelector } from 'react-redux';
import type { RootState } from 'stores';
import styles from './Items.module.scss';

const {
  items,
  active
} = styles;

const linksWhenAunthenticated = [
  { name: 'Home', url: '/', alias: [] },
  { name: 'Pelatihan', url: '/trainings', alias: [] },
  { name: 'Profil', url: '/profile', alias: [] }
];

const linksWhenUnauntheticated = [
  { name: 'Beranda', url: '/', alias: [] },
  { name: 'Pelatihan', url: '/trainings', alias: [] },
  { name: 'Daftar', url: '/sign-up', alias: ['/[page]'] }
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();
  const session = useSelector((state: RootState) => state);
  const linksUsed = (session.app.authenticated) ? linksWhenAunthenticated : linksWhenUnauntheticated;

  return (
    <ul className={ items }>
      { 
        linksUsed.map(({ name, url, alias }) => (
          <li
            key={ name }
            className={
              injectClassNames([
                active,
                pathname === url
                        || alias.includes(pathname)
              ])
            }
          >
            <Link href={ url }>{ name }</Link>
          </li>
        )) }
    </ul>
  );
}

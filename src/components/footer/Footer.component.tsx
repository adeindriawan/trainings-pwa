import React from 'react';
import styles from './Footer.module.scss';

const {
  footer
} = styles;

export default function Footer(): JSX.Element {
  return (
    <footer className={ footer }>
      <p>© Tekno Sains Academy x Digitemy</p>
    </footer>
  );
}

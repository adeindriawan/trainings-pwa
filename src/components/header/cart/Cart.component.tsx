import React, { useMemo, useState } from 'react';
import Icon from 'components/icon';
import {injectClassNames} from 'utils/css';
import styles from '../themeToggler/ThemeToggler.module.scss';

const {
  themeToggler,
  themeTogglerSettingsOpen
} = styles;

export default function Cart(): JSX.Element {
  const [isSettingMenuOpen, setIsSettingMenuOpen] = useState(false);

  const themeTogglerWrapper = injectClassNames(
    styles.themeTogglerWrapper,
    [themeTogglerSettingsOpen, isSettingMenuOpen]
  );

  const onCartButtonClick = () => {
    console.log('cart modal opened');
  };
  
  return (
    <>
      <style jsx> { `
      .badge {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: block;
        position: absolute;
        background: rgba(248, 223, 99, 1);
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -5px;
        right: -15px;
        transition: all .3s;
      }
        ` }
      </style>
      <div className={ themeTogglerWrapper }>
        { useMemo(() => (
          <><button
            aria-label="show cart"
            className={ themeToggler }
            onClick={ onCartButtonClick }
          >
            <Icon asset="Cart" />
          </button><span className="badge">1</span></>
        ), []) }
      </div>
    </>
  );
}
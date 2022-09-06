import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import Icon from 'components/icon';
import {injectClassNames} from 'utils/css';
import styles from '../themeToggler/ThemeToggler.module.scss'; // ganti dengan file style tersendiri

const {
  themeToggler,
  themeTogglerSettingsOpen
} = styles;

export default function Cart(): JSX.Element {
  const [isSettingMenuOpen, setIsSettingMenuOpen] = useState(false);
  const app = useSelector((state: RootState) => state.app);
  const [coursesCount, setCoursesCount] = useState(0);

  const themeTogglerWrapper = injectClassNames(
    styles.themeTogglerWrapper,
    [themeTogglerSettingsOpen, isSettingMenuOpen]
  );

  const onCartButtonClick = (): void => {
    console.log('cart modal opened');
  };

  useEffect(() => {
    setCoursesCount(app.cart.length);
  }, [app.cart]);
  
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
        <>
          <button
            aria-label="show cart"
            className={ themeToggler }
            onClick={ onCartButtonClick }
          >
            <Icon asset="Cart" />
          </button><span className="badge">{ coursesCount }</span>
        </>
      </div>
    </>
  );
}
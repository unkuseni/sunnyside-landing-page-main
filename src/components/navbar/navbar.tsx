import classNames from 'classnames';
import logo from '../../assets/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg';
import Navbar_module from './navbar.module.scss';
import { useEffect, useState } from 'react';
export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const desktopNavItems = (
        <div className={Navbar_module['nav-items']}>
            <ul className={Navbar_module.items}>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
    );
    const mobileNavItems = (
        <div className={Navbar_module['nav-items']}>
            <div
                id={'mobile-nav'}
                className={classNames(
                    Navbar_module['mobile-nav'],
                    isOpen ? Navbar_module['open'] : Navbar_module['close']
                )}
            >
                <ul className={Navbar_module.items}>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            <button
                id="nav-button"
                type="button"
                className={classNames(Navbar_module['nav-button'], Navbar_module.items)} onClick={toggleMenu}
            >
               <Hamburger/>
            </button>
        </div>
    );
    return (
        <header className={Navbar_module.root}>
            <nav className={Navbar_module.navbar}>
                <div id={'logo'} className={Navbar_module.logo}>
                    <img
                        src={logo}
                        alt={'logo'}
                        width={'124px'}
                        height={'24px'}
                        className={Navbar_module['logo-img']}
                    />
                </div>
                {!isMobile && desktopNavItems}
                {isMobile && mobileNavItems}
            </nav>
        </header>
    );
};

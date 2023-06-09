import classNames from 'classnames';
import logo from '../../assets/logo.svg';
import styles from './navbar.module.css';
export interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames()}>
            <nav className={classNames("flex","justify-center", "items-center")}>
                <div id={'logo'}>
                    <img src={logo} alt={'logo'} />
                </div>
                <div>
                    <ul>
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
            </nav>
        </div>
    );
};

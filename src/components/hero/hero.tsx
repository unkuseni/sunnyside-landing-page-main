import classNames from 'classnames';
import styles from './hero.module.scss';
import { Navbar } from '../navbar/navbar';
import arrow from '../../assets/icon-arrow-down.svg';

export interface HeroProps {
    className?: string;
}

export const Hero = ({ className }: HeroProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            <Navbar />
            <article className={styles.hero}>
                <h1>we are creatives</h1>
                <img src={arrow} alt="" />
            </article>
        </section>
    );
};

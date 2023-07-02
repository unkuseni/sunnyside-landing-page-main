import classNames from 'classnames';
import styles from './about.module.scss';
import photographyDesktop from '@/assets/desktop/image-photography.jpg';
import graphicDesignDesktop from '@/assets/desktop/image-graphic-design.jpg';
import transformDesktop from '@/assets/desktop/image-transform.jpg';
import standoutDesktop from '@/assets/desktop/image-stand-out.jpg';

import photographyMobile from '@/assets/mobile/image-photography.jpg';
import graphicDesignMobile from '@/assets/mobile/image-graphic-design.jpg';
import transformMobile from '@/assets/mobile/image-transform.jpg';
import standoutMobile from '@/assets/mobile/image-stand-out.jpg';

const images = {
    desktop: {
        photography: {
            src: photographyDesktop,
        },
        graphicDesign: {
            src: graphicDesignDesktop,
        },
        transform: {
            src: transformDesktop,
        },
        standout: {
            src: standoutDesktop,
        },
    },
    mobile: {
        photography: {
            src: photographyMobile,
        },
        graphicDesign: {
            src: graphicDesignMobile,
        },
        transform: {
            src: transformMobile,
        },
        standout: {
            src: standoutMobile,
        },
    },
};

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            {/* Create a   2 by 3 grid with a text and image alternating each cell */}
            <div className="grid">
                <div className="column">
                    <div className="row">
                        <article></article>
                        <picture>
                            <source media="(max-width: 768px)"
                                srcSet={`${images.mobile.transform.src} 1x, ${images.desktop.transform.src} 2x`} />
                            <source media="(min-width: 769px)" srcSet={`${images.desktop.transform.src} 1x, ${images.desktop.transform.src} 2x`} />
                            <img src={images.mobile.transform.src} alt="The image of an egg" />
                        </picture>
                    </div>
                    <div className="row">
                        <article></article>
                        <picture>
                            <source />
                            <img src="" alt="image of a cup" />
                        </picture>
                    </div>
                    <div className="row">
                        <article></article>
                        <picture>
                            <source />
                            <img src="" alt="" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

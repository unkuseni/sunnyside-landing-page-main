import { createBoard } from '@wixc3/react-board';
import { Hero } from '@/../components/hero/hero';

export default createBoard({
    name: 'Hero',
    Board: () => <Hero />,
    environmentProps: {
        canvasWidth: 2088,
        canvasHeight: 1658,
        windowWidth: 640,
        windowHeight: 768,
    },
});

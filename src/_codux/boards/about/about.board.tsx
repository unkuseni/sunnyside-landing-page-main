import { createBoard } from '@wixc3/react-board';
import { About } from '@/../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    environmentProps: {
        windowWidth: 878,
        windowHeight: 768,
        canvasWidth: 1230,
    },
});

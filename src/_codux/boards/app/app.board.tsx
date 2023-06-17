import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1126,
        windowWidth: 375,
        canvasHeight: 693,
        windowHeight: 667,
    },
});

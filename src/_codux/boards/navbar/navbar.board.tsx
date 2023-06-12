import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    environmentProps: {
        windowBackgroundColor: '#121212',
        windowWidth: 924,
        canvasWidth: 658,
        canvasHeight: 116,
        windowHeight: 667,
    },
});

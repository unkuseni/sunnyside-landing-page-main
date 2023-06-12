import classNames from 'classnames';
import { Navbar } from './components/navbar/navbar';
import styles from './App.module.scss';
function App() {
  

    return (
        <main className={classNames(styles.App)}>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        <Navbar />
        </main>

    );
}

export default App;

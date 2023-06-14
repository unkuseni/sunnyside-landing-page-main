import classNames from 'classnames';
import { Hero } from './components/hero/hero';
import styles from './App.module.scss';
function App() {
  

    return (
        <main className={classNames(styles.App)}>
        <Hero/>
        </main>

    );
}

export default App;

import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Card from '../Components/Card';

const Home = () => {
  return (
    <div className={styles.backgroundParent}>
      <Card />
    </div>
  );
}

export default Home;
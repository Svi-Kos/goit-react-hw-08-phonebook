import React from 'react';
import welcome from '../welcome.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <img src={welcome} alt="welcome" width="350" />
  </div>
);

export default HomeView;

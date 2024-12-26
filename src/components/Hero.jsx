import styles from '../css/Hero.module.css';
import TableSection from './TableSection';
import { useRef } from 'react';

function HeroSection() {

    const tableSectionRef = useRef(null);
     // Function to scroll to the table section
  const scrollToTable = () => {
    tableSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
       <div className={styles.hero_image}>
      <div className={styles.hero_text}>
        <h1>Find Real time gold price</h1>
        <p>Stay informed with the latest gold <br /> prices in Pakistan, updated in real-time to help <br />you make informed decisions. </p>
        <button onClick={scrollToTable}>Gold Price</button>
      </div>
    </div>
      {/* TableSection with ref */}
      <div ref={tableSectionRef}>
        <TableSection />
      </div>
    </>
  
  );
}

export default HeroSection;

import React, { useEffect } from 'react';
import styles from '../css/TableSection.module.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function TableSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, 
        once: false,     // Ensures animations trigger every time in view
        offset: 200,     // Offset from the original trigger point
     }); // Initialize AOS with options
  }, []);

  return (
    <>
      <div className={styles.TableSection} data-aos="fade-up"> {/* Add AOS attribute */}
        <div className={styles.TableText}>
          <h1>Gold Rate in Pakistan Today</h1>
          <h4><i>05, Sep, 2024</i></h4>
        </div>
        <div className={styles.TableDev} data-aos="fade-up" data-aos-delay="200"> {/* Add AOS attributes */}
          <table>
            <thead>
              <tr>
                <th>Gold Purity</th>
                <th>Per Tola</th>
                <th>Per 10 Gram</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows */}
              <tr>
                <td>24k</td>
                <td>Rs. 265,000</td>
                <td>Rs. 227,200</td>
              </tr>
              <tr>
                <td>24k</td>
                <td>Rs. 265,000</td>
                <td>Rs. 227,200</td>
              </tr>
              <tr>
                <td>24k</td>
                <td>Rs. 265,000</td>
                <td>Rs. 227,200</td>
              </tr>
              <tr>
                <td>24k</td>
                <td>Rs. 265,000</td>
                <td>Rs. 227,200</td>
              </tr>
              <tr>
                <td>24k</td>
                <td>Rs. 265,000</td>
                <td>Rs. 227,200</td>
              </tr>
              <tr>
                <td>24k</td>
                <td>Rs. 265,000</td>
                <td>Rs. 227,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableSection;

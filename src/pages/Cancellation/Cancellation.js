import { useEffect } from 'react';
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import { useApp } from '../../context/AppContextProvider';

export const Cancellation = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    },
    heading: {
      color: '#8B4513',
      borderBottom: '2px solid #8B4513',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '20px',
    },
    sectionTitle: {
      color: '#A0522D',
      marginBottom: '10px',
    },
    list: {
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
    footer: {
      marginTop: '30px',
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#8B4513',
    },
  };
  const appData = useApp();

  let windowWidth = appData.appData.windowWidth;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {windowWidth === "mobile" ? (
        <PageHeader title="Cancellation Policy" hide={true} />
      ) : (
        <Header />
      )}
      <div style={styles.container}>
        <h1 style={styles.heading}>Kandavika.com Policies</h1>

        <p>
          At Kandavika.com, we are committed to delivering the finest and freshest sweets and snacks, handcrafted with the utmost care and quality. As our products are perishable food items, we follow a strict No Cancellation and No Return policy for the safety and satisfaction of all our customers.
        </p>
        <p style={styles.paragraph}>
          <span style={styles.emphasis}>Effective Date: October 20, 2024</span>
        </p>
        <div style={styles.section}>
          <h2 className="m-0" style={styles.sectionTitle}>Cancellation Policy:</h2>
          <p>No cancellations are permitted once an order has been confirmed. As our sweets are freshly prepared to order, cancellations are not possible to maintain the quality and freshness of the products.</p>
        </div>


        <div style={styles.section}>
          <h2 className="m-0" style={styles.sectionTitle}>Return Policy:</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Due to the perishable nature of our sweets and snacks, returns are not accepted once an order has been placed and delivered.</li>
            <li style={styles.listItem}>We ensure that all products are freshly prepared, packaged, and delivered with the highest standards of hygiene and quality. If you receive an incorrect or damaged item, kindly contact our customer service within 2 hours of delivery with photographic evidence of the issue, and we will work to resolve the matter promptly.</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 className="m-0" style={styles.sectionTitle}>Order Modifications:</h2>
          <p>If you need to make any changes to your order (such as updating delivery details), please reach out to our customer service team within 30 minutes of placing your order. We will do our best to accommodate your request.</p>
        </div>

        <p>
          Your satisfaction is our priority, and we strive to make every experience with Kandavika delightful. Should you have any concerns regarding your order, feel free to contact our customer service for further assistance.
        </p>

        <p style={styles.footer}>
          Thank you for choosing Kandavika—where tradition meets quality.
        </p>
      </div>
      <Footer />
    </div>
  );
}
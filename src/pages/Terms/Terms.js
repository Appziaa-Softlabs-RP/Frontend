import { useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";
import { Footer } from "../../Components/Footer/Footer";

export const Terms = () => {
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
    subheading: {
      color: '#A0522D',
      marginTop: '20px',
      marginBottom: '10px',
    },
    paragraph: {
      marginBottom: '15px',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '15px',
    },
    listItem: {
      marginBottom: '10px',
    },
    emphasis: {
      fontWeight: 'bold',
      color: '#8B4513',
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
        <PageHeader title="Terms & Conditions" hide={true} />
      ) : (
        <Header />
      )}
      <div style={styles.container}>
        <h1 style={styles.heading}>Terms & Conditions</h1>

        <p style={styles.paragraph}>
          <span style={styles.emphasis}>Effective Date: October 20, 2024</span>
        </p>

        <p style={styles.paragraph}>
          Welcome to <span style={styles.emphasis}>https://kandavika.com</span> ("the Site"). These Terms & Conditions ("Terms") govern your use of the Site and the purchase of products from <span style={styles.emphasis}>Kandavika</span>. Please read these Terms carefully before using the Site.
        </p>

        <p style={styles.paragraph}>
          By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.
        </p>

        <h2 style={styles.subheading}>1. Account Creation and Use</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>To purchase products on the Site, you will need to create an account.</li>
          <li style={styles.listItem}>You must provide accurate and complete information during account creation.</li>
          <li style={styles.listItem}>You are responsible for keeping your account information confidential and secure.</li>
          <li style={styles.listItem}>You are responsible for all activities that occur under your account.</li>
        </ul>

        <h2 style={styles.subheading}>2. Orders and Payments</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>All prices displayed on the Site are in <span style={styles.emphasis}>Indian Rupees (INR)</span>.</li>
          <li style={styles.listItem}>We accept various payment methods, including credit cards, debit cards, net banking, and other online payment options.</li>
          <li style={styles.listItem}>Orders are subject to our acceptance and product availability.</li>
          <li style={styles.listItem}>We reserve the right to refuse or cancel any order for any reason, including but not limited to errors in product details or pricing.</li>
        </ul>

        <h2 style={styles.subheading}>3. Shipping and Delivery</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Shipping costs and delivery times will vary based on your location and the products ordered.</li>
          <li style={styles.listItem}>Orders are typically delivered within <span style={styles.emphasis}>same day in Delhi/NCR. For outstation it may take 1-4 days</span>.</li>
          <li style={styles.listItem}>We provide estimated shipping and delivery times, but delays may occur due to unforeseen circumstances.</li>
          <li style={styles.listItem}>We are not responsible for delays caused by shipping carriers or events beyond our control.</li>
        </ul>

        <h2 style={styles.subheading}>4. Returns and Refunds</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Please refer to our <span style={styles.emphasis}>Return Policy</span> for detailed information on returns and refunds.</li>
          <li style={styles.listItem}>Due to the perishable nature of our products, all orders are final and <span style={styles.emphasis}>non-refundable</span>, except in cases of damaged or incorrect deliveries.</li>
        </ul>

        <h2 style={styles.subheading}>5. Intellectual Property</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>All content on the Site, including text, graphics, logos, images, and software, is the property of <span style={styles.emphasis}>Kandavika</span> or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
          <li style={styles.listItem}>You may not use any content from the Site without express written permission from <span style={styles.emphasis}>Kandavika</span>.</li>
        </ul>

        <h2 style={styles.subheading}>6. User Conduct</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>You agree not to use the Site for any unlawful purpose.</li>
          <li style={styles.listItem}>You may not post or transmit any content that is harmful, threatening, abusive, defamatory, or otherwise objectionable.</li>
          <li style={styles.listItem}>You agree not to infringe upon the intellectual property rights of <span style={styles.emphasis}>Kandavika</span> or any third parties.</li>
        </ul>

        <h2 style={styles.subheading}>7. Disclaimer of Warranties</h2>
        <p style={styles.paragraph}>
          THE SITE AND ALL PRODUCTS OFFERED ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2 style={styles.subheading}>8. Limitation of Liability</h2>
        <p style={styles.paragraph}>
          WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE SITE, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>

        <h2 style={styles.subheading}>9. Indemnification</h2>
        <p style={styles.paragraph}>
          You agree to indemnify and hold <span style={styles.emphasis}>Kandavika</span> harmless from any claims, damages, liabilities, and expenses (including legal fees) arising out of your use of the Site or violation of these Terms.
        </p>

        <h2 style={styles.subheading}>10. Changes to Terms & Conditions</h2>
        <p style={styles.paragraph}>
          We may update these Terms at any time. We will post the updated Terms on the Site. Your continued use of the Site after any changes are made constitutes your acceptance of the updated Terms.
        </p>

        <h2 style={styles.subheading}>11. Governing Law</h2>
        <p style={styles.paragraph}>
          These Terms are governed by and construed in accordance with the laws of <span style={styles.emphasis}>India</span>. Any disputes arising out of these Terms will be subject to the jurisdiction of the <span style={styles.emphasis}>courts of Delhi</span>.
        </p>

        <h2 style={styles.subheading}>12. Contact Us</h2>
        <p style={styles.paragraph}>
          For any questions or concerns, please contact us:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.emphasis}>Email</span>: hello@kandavika.com</li>
          <li style={styles.listItem}><span style={styles.emphasis}>Phone</span>: +91-9871248137</li>
          <li style={styles.listItem}><span style={styles.emphasis}>Address</span>: f7, beside 24seven, Block F, East of Kailash, New Delhi, Delhi 110065 New Delhi 110055, India.</li>
        </ul>

        <p style={styles.footer}>
          By using <span style={styles.emphasis}>https://kandavika.com</span>, you acknowledge and agree to these Terms & Conditions.
        </p>
      </div>
      <Footer />
    </div>
  );
}
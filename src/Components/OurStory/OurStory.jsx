import storyImage from '../../assets/images/story-image.svg';
import styles from './OurStory.module.css';

export default function OurStory() {
    return <section className='container-fluid m-0 row p-3' style={{
        background: "#EBD4D4"
    }}>
        <div className='row p-0 m-0'>
            <div className='col-12 col-md-5 py-5'>
                <img src={'/images/our-story.jpeg'} alt='Our Story'
                    style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: "90vh" }} />
            </div>
            <div className='col-12 col-md-7 d-flex flex-column justify-content-center align-items-center'>
                <h4 style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.4rem'
                }}>Our Story</h4>
                <p style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                }}>Steps Forever: Where Style Meets Comfort</p>
                <p style={{
                    textAlign: 'center',
                    fontWeight: '400',
                    fontSize: '12px'
                }}>At Steps Forever, we believe that every step you take should blend comfort with style. As we venture into the world of direct-to-consumer (D2C)<br />shoes and lifestyle products, our mission is to redefine everyday fashion with quality and elegance.</p>
                <div>
                    <h5 className='text-center mt-3' style={{
                        fontWeight: 'bold'
                    }}>4 Key Pillars of Our Brand:</h5>
                    <div className={`${styles.pointsContainer}`}>
                        <div className='d-flex align-items-center gap-2'>
                            <div className={styles.pointIcon}>
                                <img src="/images/quality.png" alt="1" />
                            </div>
                            <div className='d-flex flex-column'>
                                <h6 className={styles.pointHeading}>
                                    Unmatched Quality:
                                </h6>
                                <p className={styles.pointDesc}>We source the finest materials to craft shoes and lifestyle products that stand the test of time.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <div className={styles.pointIcon}>
                                <img src="/images/comfort.png" alt="1" />
                            </div>
                            <div className='d-flex flex-column'>
                                <h6 className={styles.pointHeading}>
                                    Everyday Comfort:
                                </h6>
                                <p className={styles.pointDesc}>Our designs prioritize comfort, ensuring that style never comes at the expense of wearability.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <div className={styles.pointIcon}>
                                <img src="/images/comfort.png" alt="1" />
                            </div>
                            <div className='d-flex flex-column'>
                                <h6 className={styles.pointHeading}>
                                    Affordability Meets Luxury:
                                </h6>
                                <p className={styles.pointDesc}>Enjoy premium designs without the premium price tag—fashion that's accessible for all.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <div className={styles.pointIcon}>
                                <img src="/images/sus.png" alt="1" />
                            </div>
                            <div className='d-flex flex-column'>
                                <h6 className={styles.pointHeading}>
                                    Sustainable Style:
                                </h6>
                                <p className={styles.pointDesc}>We are committed to sustainability, focusing on eco-friendly practices to create products that not only look good but do good.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
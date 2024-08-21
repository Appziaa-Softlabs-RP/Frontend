import storyImage from '../../assets/images/story-image.svg';
import styles from './OurStory.module.css';

export default function OurStory() {
    return <section className='container-fluid m-0 row p-3' style={{
        background: "#EBD4D4"
    }}>
        <div className='row p-0 m-0'>
        <div className='col-12 col-md-5 py-5'>
            <img src={storyImage} alt='Our Story'
                style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: "90vh" }} />
        </div>
        <div className='col-12 col-md-7 d-flex flex-column justify-content-center align-items-center'>
            <h4 style={{
                textAlign: 'center',
                fontWeight: '400',
                fontSize: '1.4rem'
            }}>Our Story</h4>
            <p style={{
                textAlign: 'center',
                fontWeight: '400',
                fontSize: '0.9rem'
            }}>Lorem ipsum dolor sit amet consectetur. Eget turpis vivamus aliquam lacinia Nec elementum et malesuada vitae.</p>
            <div>
                <h5 className='text-center mt-3' style={{
                    fontWeight: '400'
                }}>What Makes Us Different?</h5>
                <div className={`${styles.pointsContainer}`}>
                    <div className='d-flex align-items-center gap-2'>
                        <div className={styles.pointIcon}></div>
                        <div className='d-flex flex-column'>
                        <h6 className={styles.pointHeading}>
                            Quality
                        </h6>
                        <p className={styles.pointDesc}>Lorem ipsum dolor sit amet consectetur. Eget turpis vivamus aliquam lacinia</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div className={styles.pointIcon}></div>
                        <div className='d-flex flex-column'>
                        <h6 className={styles.pointHeading}>
                            Quality
                        </h6>
                        <p className={styles.pointDesc}>Lorem ipsum dolor sit amet consectetur. Eget turpis vivamus aliquam lacinia</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div className={styles.pointIcon}></div>
                        <div className='d-flex flex-column'>
                        <h6 className={styles.pointHeading}>
                            Quality
                        </h6>
                        <p className={styles.pointDesc}>Lorem ipsum dolor sit amet consectetur. Eget turpis vivamus aliquam lacinia</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div className={styles.pointIcon}></div>
                        <div className='d-flex flex-column'>
                        <h6 className={styles.pointHeading}>
                            Quality
                        </h6>
                        <p className={styles.pointDesc}>Lorem ipsum dolor sit amet consectetur. Eget turpis vivamus aliquam lacinia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
}
import styles from './topBrands.module.css'

export default function TopBrands()
{
    return <div className='bg-white'>
        <div className={`${styles.topBrandContainer} bg-white`}>
        <img
        src="/images/top-brand.avif"
        alt="top-brands"
        className={`${styles.topBrandsImg}`}
        />
        <img
        src="/images/refurbished.avif"
        alt="top-brands"
        className={`${styles.topBrandsImg}`}
        />
        <img
        src="/images/new-unused.avif"
        alt="top-brands"
        className={`${styles.topBrandsImg}`}
        />
        <img
        src="/images/warrenty.avif"
        alt="top-brands"
        className={`${styles.topBrandsImg}`}
        />
    </div>
    </div>
}
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './Loader.module.css';

// const Wrapper = ({ child }) => <div className='flex w-16'>{child}</div>

export const HeaderNavLoader = () => {
  return (
      <div className='p-1 pb-2 d-flex justify-content-around'>
        <Skeleton height={40} width={"80%"} containerClassName='h-100' style={{
          minWidth: '180px',
          margin: '0px'
        }} />
        <Skeleton height={40} width={"80%"} containerClassName='h-100' style={{
          minWidth: '180px',
          margin: '0px'
        }} />
        <Skeleton height={40} width={"80%"} containerClassName='h-100' style={{
          minWidth: '180px',
          margin: '0px'
        }} />
        <Skeleton height={40} width={"80%"} containerClassName='h-100' style={{
          minWidth: '180px',
          margin: '0px'
        }} />
      </div>
  )
}

export const ProductCardLoader = () => {
  return (
    <div className={styles.productCardLoaderWrapper}>
      <div className='container'>
        {/* images */}
        <Skeleton
          height={275}
          width={"100%"}
        />

        <Skeleton
          height={16}
          count={2}
        />
        <Skeleton
          height={16}
          width={"40%"}
        />
        <div className='mt-10' />
        <Skeleton height={50} />
      </div>
    </div>
  );
}

export const ProductListLoader = () => {
  return (
    <div className='d-flex flex-wrap'>
      <div className='container'>
        <div className='d-flex flex-wrap'>
          {Array.apply(null, { length: 10 }).map((e, i) => (
            <ProductCardLoader key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export const HeroBannerLoader = () => {
  return (
    <div className={styles.heroBannerLoader}>
      <div className='h-100 w-100 py-3'>
        <Skeleton containerClassName='h-100 w-100' height={250} width={"100%"} />
      </div>
    </div>
  );
}

export const ShopAgeLoader = () => {
  return (
    <div className={styles.bannerLoader}>
      <div className='container py-5'>
        <div className={styles.bannerTitle}>
          <Skeleton
            containerClassName='h-100 w-100 mt-4'
            height={40}
            width={"40%"}
          />
        </div>
        <div className={styles.bannerBody}>
          {Array.apply(null, { length: 5 }).map((e, i) => (
            <div className={styles.smallBox} key={i}>
              <Skeleton style={{
                borderRadius: '200px',
                height: '180px',
                width: '180px',
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const LookingForBannerLoader = () => {
  return (
    <div className={styles.bannerLoader}>
      <div className='container'>
        <div className={styles.bannerTitle}>
          <Skeleton
            containerClassName='h-100 w-100'
            height={25}
            width={"40%"}
          />
        </div>
        <div className={styles.bannerBody}>
          {Array.apply(null, { length: 6 }).map((e, i) => (
            <div className={styles.smallBox} key={i}>
              <Skeleton className='h-100 w-100' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const CategoryShopLoader = () => {
  return (
    <div className={styles.bannerLoader}>
      <div className='container'>
        <div className={styles.bannerTitle}>
          <Skeleton
            containerClassName='h-100 w-100'
            height={50}
            width={"30%"}
          />
        </div>
        <div className={styles.bannerBody}>
          {Array.apply(null, { length: 6 }).map((e, i) => (
            <div className={styles.smallBox}>
              <Skeleton className='h-100 w-100' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const PromoBannerLoader = () => {
  return (
    <div className={styles.bannerLoader}>
      <div className='container'>
        <div className={styles.bannerTitle}>
          <Skeleton
            containerClassName='h-100 w-100'
            height={50}
            width={"30%"}
          />
        </div>
        <div className={styles.bannerBody}>
          {Array.apply(null, { length: 3 }).map((e, i) => (
            <div className={styles.promoBox} key={i}>
              <Skeleton className='h-100 w-100' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const BrandFocusLoader = () => {
  return (
    <div className={styles.bannerLoader}>
      <div className='container'>
        <div className={styles.bannerTitle}>
          <Skeleton
            containerClassName='h-100 w-100'
            height={50}
            width={"20%"}
          />
        </div>
        <div className={styles.bannerBody}>
          {Array.apply(null, { length: 3 }).map((e, i) => (
            <div className={styles.focusBox}>
              <Skeleton className='h-100 w-100' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
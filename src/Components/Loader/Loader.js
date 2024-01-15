import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './Loader.module.css';

// const Wrapper = ({ child }) => <div className='flex w-16'>{child}</div>

export const ProductCardLoader = () => {
  return (
    <div className={styles.productCardLoaderWrapper}>
      {/* images */}
      <Skeleton
        height={275}
        width={"100%"}
      />

      <Skeleton
        height={12}
        count={2}
      />
      <div className='mt-10'/>
      <Skeleton height={50} />
    </div>
  );
}

export const ProductListLoader = () => {
  return (
    <div className='d-flex flex-wrap'>
      {Array.apply(null, { length: 10 }).map((e, i) => (
        <ProductCardLoader />
      ))}
    </div>
  );
}
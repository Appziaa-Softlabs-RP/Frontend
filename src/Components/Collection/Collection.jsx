import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import noImage from "../../assets/images/image-not-available.jpg";
import kidsCollection from '../../assets/images/kids.svg';
import mensCollection from '../../assets/images/mens.jpeg';
import womensCollection from '../../assets/images/womensCollection.jpeg';
import { enviroment } from '../../enviroment';
import ApiService from '../../services/ApiService';
import styles from './Collection.module.css';

export default function Collections({ type }) {

    const [shopCategory, setShopCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const payload = {
            store_id: parseInt(enviroment.STORE_ID),
            vertical_slug: type,
        };
        setLoading(true);
        ApiService.StoreSubCategory(payload)
            .then((res) => {
                console.log(res)
                // only selecting 4
                setShopCategory(res?.payload_verticalByCategory.slice(0, 4));
            })
            .catch((err) => { })
            .finally(() => {
                setLoading(false);
            });
    }, [type]);

    const getTitle = ({ type }) => {
        if (type === 'men') {
            return "Men's Collection";
        } else if (type === 'women') {
            return "Women's Collection";
        } else if (type === 'kids') {
            return "Kid's Collection";
        } else {
            return 'Collection';
        }
    }


    return <div className={`container-fluid m-0 ${styles.mainContainer}`}
        style={{
            position: "relative",
            height: "fit-content",
            backgroundColor: type !== 'women' ? '' : '#dfdcf9'
        }}
    >
        <div className={`container row col-12 mx-auto d-flex flex-column-reverse ${type === "women" ? "flex-md-row-reverse" : "flex-md-row"}`}>
            <div className={`d-flex flex-column flex ${styles.collectionTextBox}`}
            >
                <h2 className="text-center m-0 mb-2 p-0">
                    {getTitle({ type })}
                </h2>
                <div className="" style={{
                    flexGrow: 1,
                    width: '100%',
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.9rem',
                }}>
                    {
                        loading ? (
                            Array.from({ length: 4 }).map((_, index) =>
                                <div
                                    className={`position-relative ${styles.categoryCollection}`}
                                >
                                    <Skeleton className={`${styles.imageResponsive}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "300px",
                                        minWidth: "300px",
                                    }}
                                    />
                                    <p
                                        className={`text-center mt-2 ${styles.categoryName}`}
                                        style={{
                                            fontSize: "1rem",
                                        }}
                                    >
                                        <Skeleton width={150} height={30} />
                                    </p>
                                </div>))
                            :
                            (shopCategory.map((item, index) => (
                                <Link to={`/store/${item?.name_url}`}
                                    key={index}
                                    className={`position-relative ${styles.categoryCollection}`}
                                >
                                    <img
                                        src={item?.image === "" ? noImage : item?.image}
                                        alt={item?.name}
                                        className={`${styles.imageResponsive}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                    <p
                                        className={`text-center mt-2 ${styles.categoryName}`}
                                        style={{
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {item?.name}
                                    </p>
                                </Link>
                            ))
                            )}
                </div>
            </div>
            <div className='col-12 col-md-6 position-relative'
                style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: 'relative'
                }}
            >
                <img
                    src={
                        type === "men" ?
                            mensCollection :
                            type === "women" ?
                                womensCollection :
                                kidsCollection
                    }
                    alt="Collection"
                    className={`${styles.darkenImage}`}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
                <p className={styles.collectionImageText}
                    style={{
                        textAlign: "start",
                        whiteSpace: "preserve-breaks",
                        wordSpacing: "99999px",
                    }}
                >
                    {getTitle({ type })}
                </p>
            </div>
        </div>
    </div>
}
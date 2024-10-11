import styles from "./ProductQuantity.module.css"

export default function AddProductQuantity({
    sm = false,
    ProductData,
    updateProdQty,
    prodAddedQty
}) {
    return <div
        className={`${styles.itemQuantityBtnBox} ${sm ? styles.gapSm : styles.gapLg} d-inline-flex align-items-center justify-content-center position-relative`}
    >
        <span
            role="button"
            onClick={(e) =>
                updateProdQty(
                    e,
                    ProductData?.product_id
                        ? ProductData.product_id
                        : ProductData.id,
                    ProductData?.no_of_quantity_allowed,
                    prodAddedQty,
                    "minus",
                    ProductData?.stock
                )
            }
            className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex align-items-center justify-content-center`}
        >
            -
        </span>
        <span className="d-inline-flex flex-shrink-0">
            <input
                type="text"
                readOnly
                value={prodAddedQty}
                className={`${styles.countValue} d-inline-block text-center`}
            />
        </span>
        <span
            role="button"
            onClick={(e) =>
                updateProdQty(
                    e,
                    ProductData?.product_id
                        ? ProductData.product_id
                        : ProductData.id,
                    ProductData?.no_of_quantity_allowed,
                    prodAddedQty,
                    "plus",
                    ProductData?.stock
                )
            }
            className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex align-items-center justify-content-center`}
        >
            +
        </span>
    </div>
}
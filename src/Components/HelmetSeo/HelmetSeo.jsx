import { Helmet } from "react-helmet";

export default function HelmentSeo() {
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta
                name="title"
                content={`Explore ${process.env.REACT_APP_URL}'s Toy Store - Browse Online for Children's Toys and Games in India.`}
            />
            <meta
                name="description"
                content={`Discover the world of premium children's toys and games at ${process.env.REACT_APP_URL}. Experience exclusive offers, guaranteed quality, and free home delivery across India on every purchase. ✓Top Brands ✓COD Available ✓Easy Returns`}
            />

            {/* <!-- setting og graph link for twitter, facebook, instagram -->
    <!-- Website OG --> */}
            <meta property="og:site_name" content={process.env.REACT_APP_BUSINESS_NAME} />
            <meta property="og:url" content={process.env.REACT_APP_URL} />
            <meta
                property="og:title"
                content={`Explore ${process.env.REACT_APP_BUSINESS_NAME} Toy Store - Browse Online for Children's Toys and Games in India.`}
            />

            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content={`Discover the world of premium children's toys and games at ${process.env.REACT_APP_BUSINESS_NAME}. Experience exclusive offers, guaranteed quality, and free home delivery across India on every purchase. ✓Top Brands ✓COD Available ✓Easy Returns`}
            />
            <meta
                property="og:image"
                content={`${process.env.REACT_APP_URL}/logo.png`}
            />
            <meta
                property="og:image:secure_url"
                content={`${process.env.REACT_APP_URL}/logo.png`}
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Helmet>
    </>
}
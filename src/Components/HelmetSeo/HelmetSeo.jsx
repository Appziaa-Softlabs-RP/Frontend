import { Helmet } from "react-helmet";

export default function HelmentSeo() {
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta
                name="title"
                content="Explore knickKnack's Toy Store - Browse Online for Children's Toys and Games in India."
            />
            <meta
                name="description"
                content="Discover the world of premium children's toys and games at knickknack. Experience exclusive offers, guaranteed quality, and free home delivery across India on every purchase. ✓Top Brands ✓COD Available ✓Easy Returns"
            />

            {/* <!-- setting og graph link for twitter, facebook, instagram -->
    <!-- Website OG --> */}
            <meta property="og:site_name" content="knickknack" />
            <meta property="og:url" content="https://knickknack.online" />
            <meta
                property="og:title"
                content="Explore knickKnack's Toy Store - Browse Online for Children's Toys and Games in India."
            />

            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content="Discover the world of premium children's toys and games at knickknack. Experience exclusive offers, guaranteed quality, and free home delivery across India on every purchase. ✓Top Brands ✓COD Available ✓Easy Returns"
            />
            <meta
                property="og:image"
                content="https://knickknack.online/logo.png"
            />
            <meta
                property="og:secure_url"
                content="https://knickknack.online/logo.png"
            />
        </Helmet>
    </>
}
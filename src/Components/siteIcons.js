import React from "react";

export const MenuIcons = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 464.205 464.205"><path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill={color}></path></svg>
        </React.Fragment>
    )
}

export const CartIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 511.997 511.997"><path d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zM507.927 115.875a19.128 19.128 0 0 0-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 0 0-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0 0 18.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 0 0-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zM173.646 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const PhoneIcon = () => {
    return (
        <React.Fragment>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-phone" viewBox="0 0 64 64"><path className="cls-1" d="M16.57 5l12.32 12.33L21.26 25c2.53 8.5 8.32 15 18.78 18.78l7.63-7.63L60 48.43 49.43 59C25.4 54.11 11.05 39.5 6 15.57z"></path></svg>
        </React.Fragment>
    )
}

export const EmailIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45zm-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106h409.396zM30 384.894V127.125L159.638 256.08 30 384.894zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406H51.321zM482 384.894 352.362 256.08 482 127.125v257.769z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const InstagramIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-instagram" viewBox="0 0 32 32"><path fill={color} d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"></path><path fill={color} d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"></path></svg>
        </React.Fragment>
    )
}

export const FacebookIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-facebook" viewBox="0 0 32 32"><path fill={color} d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"></path></svg>
        </React.Fragment>
    )
}

export const Twitter = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-twitter" viewBox="0 0 32 32"><path fill={color} d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"></path></svg>
        </React.Fragment>
    )
}

export const LinkedInIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg className="icon icon-linkedin" viewBox="0 0 24 24" fill={color}><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"></path></svg>
        </React.Fragment>
    )
}

export const BackArrowIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 240.823 240.823"><path d="M57.633 129.007 165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z" fill={color} /></svg>
        </React.Fragment>
    )
}

export const SearchIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 56.966 56.966"><path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const UserIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 32 32"><path d="M16 17a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill={color} /><path d="M16 31a15 15 0 0 1-11.59-5.49l-.52-.64.52-.63a15 15 0 0 1 23.18 0l.52.63-.52.64A15 15 0 0 1 16 31zm-9.49-6.12a13 13 0 0 0 19 0 13 13 0 0 0-19 0z" fill={color} /><path d="M16 31a15 15 0 1 1 11.59-5.49A15 15 0 0 1 16 31zm0-28a13 13 0 1 0 13 13A13 13 0 0 0 16 3z" fill={color} /><path d="M5.18 24.88S15.25 36.13 25.5 26l1.32-1.12S18.26 16 9.57 21.33z" fill={color} /><circle cx="16" cy="11" r="5" fill={color} opacity="1" data-original={color} class=""></circle></svg>
        </React.Fragment>
    )
}

export const OrderIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 682.667 682.667"><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill={color} opacity="1"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0h62l89.96-329.854" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(15 481)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="m0 0 30 180h-387.272" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(467 181)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0c0-16.569-13.432-30-30-30-16.568 0-30 13.431-30 30 0 16.569 13.432 30 30 30C-13.432 30 0 16.569 0 0Z" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(437 61)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0c0-16.569-13.432-30-30-30-16.568 0-30 13.431-30 30 0 16.569 13.432 30 30 30C-13.432 30 0 16.569 0 0Z" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(227 61)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0h240M0 0c-16.568 0-30 13.431-30 30 0 15.554 11.837 28.343 26.993 29.851" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(167 91)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="m0 0-303.007-30.149" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(467 181)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0v60h150" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(167 361)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0v90h120V0" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(317 361)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="m0 0 30-30" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(347 481)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="m0 0 30 30" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(377 451)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0v-60" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(317 301)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0v-60" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(407 301)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/><path d="M0 0v-60" style={{strokeWidth:'30',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10',strokeDasharray:'none',strokeOpacity:'1'}} transform="translate(227 301)" fill="none" stroke={color} stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none"/></g></svg>
        </React.Fragment>
    )
}

export const LocationIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M256 4C147.925 4 60 91.925 60 200c0 52.5 31.807 119.92 94.537 200.378a1065.816 1065.816 0 0 0 93.169 104.294 12 12 0 0 0 16.588 0 1065.816 1065.816 0 0 0 93.169-104.294C420.193 319.92 452 252.5 452 200 452 91.925 364.075 4 256 4Zm0 475.111C220.581 443.408 84 299.268 84 200c0-94.841 77.159-172 172-172s172 77.159 172 172c0 99.268-136.581 243.408-172 279.111Z" fill={color}/><path d="M256 60c-77.2 0-140 62.8-140 140s62.8 140 140 140 140-62.8 140-140S333.2 60 256 60Zm0 256a116 116 0 1 1 116-116 116.132 116.132 0 0 1-116 116Z" fill={color}/><path d="m352.072 183.121-88-80a12 12 0 0 0-16.144 0l-88 80A12 12 0 0 0 168 204h12v60a12 12 0 0 0 12 12h44a12 12 0 0 0 12-12v-36h16v36a12 12 0 0 0 12 12h44a12 12 0 0 0 12-12v-60h12a12 12 0 0 0 8.072-20.879ZM308 192v60h-20v-36a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v36h-20v-60a12 12 0 0 0-6.453-10.644L256 128.217l58.453 53.139A12 12 0 0 0 308 192Z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const ServiceIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M366 396c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z" fill={color}/><path d="m390.622 363.663-47.53-15.84-17.063-34.127c15.372-15.646 26.045-36.348 29.644-57.941L357.801 243H376c16.542 0 30-13.458 30-30v-63C406 67.29 338.71 0 256 0c-82.922 0-150 67.097-150 150v63c0 13.036 8.361 24.152 20 28.28V253c0 16.542 13.458 30 30 30h8.782a108.487 108.487 0 0 0 16.774 25.974 103.947 103.947 0 0 0 4.406 4.741l-17.054 34.108-47.531 15.841C66.112 382.092 26 440.271 26 502c0 5.523 4.477 10 10 10h440c5.522 0 10-4.477 10-10 0-61.729-40.111-119.908-95.378-138.337zM386 213c0 5.514-4.486 10-10 10h-15.262c2.542-19.69 4.236-40.643 4.917-61.28.02-.582.036-1.148.054-1.72H386v53zm-250 10c-5.514 0-10-4.486-10-10v-53h20.298c.033 1.043.068 2.091.107 3.146l.004.107v.009c.7 20.072 2.372 40.481 4.856 59.737H136V223zm20 40c-5.514 0-10-4.486-10-10v-10h8.198l2.128 12.759a105.57 105.57 0 0 0 1.482 7.241H156zm-9.983-123H126.38C131.445 72.979 187.377 20 256 20c68.318 0 124.496 52.972 129.619 120h-19.635c-.72-55.227-45.693-100-101.033-100h-17.9c-55.339 0-100.315 44.773-101.034 100zM247.05 60h17.9c44.809 0 81.076 36.651 81.05 81.41 0 3.147-.025 5.887-.078 8.38l-.001.098-12.508-1.787c-33.98-4.852-66.064-20.894-90.342-45.172A10.003 10.003 0 0 0 236 100c-26.856 0-52.564 12.236-69.558 32.908C170.63 92.189 205.053 60 247.05 60zm-68.51 203c-5.006-16.653-10.734-65.653-12-97.053l13.459-17.946c12.361-16.476 31.592-26.713 52.049-27.888 26.917 25.616 61.739 42.532 98.537 47.786l14.722 2.104c-.984 20.885-2.995 41.843-5.876 61.118l-.003.02c-.916 6.197-1.638 10.185-3.482 21.324-5.296 31.765-28.998 60.49-60.287 68.313a81.338 81.338 0 0 1-39.313 0c-19.537-4.884-37.451-18.402-49.012-37.778h20.386c4.128 11.639 15.243 20 28.28 20h20c16.575 0 30-13.424 30-30 0-16.542-13.458-30-30-30h-20c-13.327 0-24.278 8.608-28.297 20H178.54zm56.619 78.016A101.171 101.171 0 0 0 256 343.2c5.471 0 10.943-.458 16.353-1.346l-17.67 18.687-19.524-19.525zm5.776 34.063-31.718 33.542a381.013 381.013 0 0 1-22.389-51.917l11.911-23.822 42.196 42.197zm70.631-45.585 13.604 27.209a380.908 380.908 0 0 1-22.392 51.933l-33.948-33.948 42.736-45.194zM226 273c0-5.521 4.478-10 10-10h20c5.514 0 10 4.486 10 10 0 5.522-4.479 10-10 10h-20c-5.514 0-10-4.486-10-10zM46.4 492c3.963-49.539 36.932-94.567 81.302-109.363l42.094-14.028a400.869 400.869 0 0 0 28.463 61.74l.056.101.001.002a400.974 400.974 0 0 0 27.372 41.799L237.99 492H46.4zm209.6-8.914-13.562-21.773a10.133 10.133 0 0 0-.486-.711 381.284 381.284 0 0 1-22.532-33.662l35.663-37.714 37.578 37.578A380.863 380.863 0 0 1 270.05 460.6c-.49.653.205-.376-14.05 22.486zM274.01 492l12.301-19.748a400.826 400.826 0 0 0 27.564-42.132c.05-.088.097-.178.147-.266l.018-.032a400.543 400.543 0 0 0 28.164-61.213l42.093 14.028c44.371 14.796 77.34 59.824 81.303 109.363H274.01z" fill={color}/><path d="M435.546 451.531c-6.683-13.377-16.472-25.261-28.309-34.367-4.378-3.369-10.656-2.55-14.023 1.828-3.368 4.378-2.549 10.656 1.828 14.024 9.454 7.273 17.272 16.766 22.611 27.453 2.473 4.949 8.483 6.941 13.415 4.477 4.94-2.468 6.945-8.474 4.478-13.415z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const NotificationIcon = ({color}) => {
    return (
        <React.Fragment>
            <svg viewBox="0 0 512 512"><path d="M411 262.862V215c0-69.822-46.411-129.001-110-148.33V45c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67C147.41 85.999 101 145.177 101 215v47.862c0 61.332-23.378 119.488-65.827 163.756A14.999 14.999 0 0 0 46 452h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60H466a15 15 0 0 0 10.827-25.382C434.378 382.35 411 324.193 411 262.862zM241 45c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zM78.33 422C112.491 376.208 131 320.792 131 262.862V215c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138zM451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213C430.717 113.944 451 162.913 451 215zM46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0C54.404 98.398 31 154.9 31 215c0 8.284 6.716 15 15 15z" fill={color}/></svg>
        </React.Fragment>
    )
}

export const LogoutIcon = ({color}) => {
    return (
        <svg viewBox="0 0 512.005 512"><path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332zm0 0" fill={color}/><path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332 0 11.777 9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164zm0 0" fill={color}/></svg>
    )
}
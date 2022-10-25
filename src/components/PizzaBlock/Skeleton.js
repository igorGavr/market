import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={540}
        viewBox="0 0 280 540"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="129" cy="121" r="120" />
        <rect x="3" y="290" rx="9" ry="9" width="272" height="22" />
        <rect x="3" y="331" rx="13" ry="13" width="272" height="134" />
        <rect x="10" y="496" rx="7" ry="7" width="81" height="26" />
        <rect x="138" y="490" rx="20" ry="20" width="135" height="43" />
    </ContentLoader>
)

export default MyLoader

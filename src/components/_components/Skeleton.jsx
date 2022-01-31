import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={346}
        height={450}
        viewBox="0 0 450 346"
        backgroundColor="#c3bbbb"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="116" y="40" rx="24" ry="24" width="346" height="450" />
        <rect x="237" y="529" rx="4" ry="4" width="226" height="59" />
    </ContentLoader>
)

export default Skeleton
import React from "react";

function PinkPaisleyLeft({ className }: { className?: string }) {
    return(
        <img className={className} src="paisleypinkleft.svg" />
    )
}

function PinkPaisleyRight({ className }: { className?: string }) {
    return(
        <img className={className} src="paisleypinkright.svg" />
    )
}

function BannerImage1({className}: {className?: string}) {
    return(
        <img src="bannerimage1.JPG" className={className} />
    )
}

function FooterPaisley({className}:{className?: string}) {
    return(
        <img src="smolflowers.svg" className={className} />
    )
}

export {PinkPaisleyLeft, PinkPaisleyRight, BannerImage1, FooterPaisley};
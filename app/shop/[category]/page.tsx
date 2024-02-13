import React from "react";
interface IPrams {
    category?: string
}

export default function CategoryPage({params}: {params: IPrams}) {



    return(
        <div>
            {params.category}
        </div>
    )
}
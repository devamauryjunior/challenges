import { useEffect, useState } from "react"

function ImageComponent({caminhoDaImagem}) {
    return (
        <img style={{borderRadius: ".4rem"}} src={caminhoDaImagem} className="ct2-images-config"/>
    )
}

export default ImageComponent
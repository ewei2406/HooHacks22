import React from "react"


const ImageUpload = ({ setImageSrc }) => {

    const onImageChange = e => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    return(
        <input type="file" name="myImage" onChange={onImageChange} />
    )
}

export default ImageUpload
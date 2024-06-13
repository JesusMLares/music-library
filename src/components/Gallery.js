import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery(props){
    const display = props.data.map((item, index) => {
        return(
            <GalleryItem key={index} item={item} />
        )
    })

    return(
        <div>
            {display}
        </div>
    )
}

export default Gallery;
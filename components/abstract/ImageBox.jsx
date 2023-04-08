import React from 'react';
import Image from "next/image";

const ImageBox = ({ wrapper: {id, classes}, product:{title, img}, imageHost}) => {
    return (
        <div className={classes} id={id}>
            <div className={`flex w-full h-[640px] justify-center items-center overflow-hidden bg-slate-400`}>
                <Image
                    alt={title}
                    src={imageHost + img}
                    width={1440} height={764}
                    priority={10}
                />
            </div>
        </div>
    );
};

export default ImageBox;
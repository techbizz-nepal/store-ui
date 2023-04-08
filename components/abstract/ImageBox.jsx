import React from 'react';
import Image from "next/image";

const ImageBox = ({product:{title, img}, imageHost}) => {
    return (
        <div className={`flex  w-full h-[640px] justify-center items-center overflow-hidden bg-slate-400`}>
            <Image
                alt={title}
                src={imageHost + img}
                width={1440} height={764}
            />
        </div>
    );
};

export default ImageBox;
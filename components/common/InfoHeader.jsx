import React from 'react';

const InfoHeader = (props) => {
    return (
        <div className={`bg-yellow-50 `}>
            <div
                className={`containerDiv hidden md:flex lg:flex xl:flex justify-end items-center py-1 visible  md:py-2  sm:px-4 md:px-2  gap-x-3`}>
                <div>{`0000000000`}</div>
                <div>{`Help`}</div>

            </div>
        </div>
    );
}

export default InfoHeader;
import React from 'react';

const Content = ({children}) => {
    return (
        <div className={`flex flex-col flex-grow`}>{children}</div>
    );
}

export default Content;
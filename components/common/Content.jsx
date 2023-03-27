import React from 'react';

const Content = ({children}) => {
    return (
        <div className={`flex flex-col flex-grow`} id={`contentDiv`}>{children}</div>
    );
}

export default Content;
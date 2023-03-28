import React from 'react';

const BreadcrumbNew = ({divider}) => <div id={`breadCrumb`}
                                          className={`flex items-center justify-start containerDiv gap-x-4 px-2 py-6`}>
    <div>Home</div>
    <div>{divider}</div>
    {/*<div>Page</div>*/}
    <div>Department</div>
    <div>{divider}</div>
    <div>Category 1</div>
    {/*<div>About</div>*/}
</div>

export default BreadcrumbNew;

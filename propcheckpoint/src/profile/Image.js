import React from 'react'

const Image = (props) => {
    console.log(`props:`,props);
    return <div>{props.children}</div>;
}
export default Image

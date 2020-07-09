/* jshint ignore:start */
import React from 'react';

const Spinner = (props) => {
    return <div className="ui active centered inline loader" style={{ 'top': '45vh' }}></div>;
}

Spinner.defaultProps = {
    message: "Loading"
}

export default Spinner;

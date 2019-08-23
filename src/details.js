import React from 'react';
import PropTypes from 'prop-types';
class Details extends React.Component{
    static defaultProps={detailTitle: 'Name',
    detailValue: 2
};

render(){
    const{detailTitle,detailValue}= this.props;
    return(
        <div>
            <h2>{detailTitle}</h2>
            <h2>{detailValue}</h2>
        </div>
    )
}
    
}
Details.propTypes = {detailTitle: PropTypes.string, detailValue: PropTypes.number}
export default Details;
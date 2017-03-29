import React, {PropTypes} from 'react';
import './price.scss';

export const PriceTypes = {
    monthly: 'per month',
    daily: 'per day'
};

const Price = props => {
    const {value, payment} = props;

    return (
        <p>Price:
            <span> {value}<i className="fa fa-usd"/> </span>
            {payment}
        </p>
    );
};

Price.propTypes = {
    value: PropTypes.string,
    payment: PropTypes.oneOf(Object.values(PriceTypes))
};

export default Price;

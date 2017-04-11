import React, {Component} from 'react';
import Price, {PriceTypes} from '../../price';
import Carousel from '../../carousel';
import {Link} from 'react-router-dom';
import Image from '../../image';
import Header, {HeaderTypes} from '../../header';
import './announcement-preview.scss';

class AnnouncementPreview extends Component {

    render() {
        const {
            id,
            description,
            pricePerDay,
            pricePerMonth,
            title
        } = this.props;

        return (
            <div className="announcement-preview">
                 <Image/>
                <div className="announcement-description-field">
                    <div className="announcement-description">
                        <Link to={`announcement/${id}`}>
                            <Header value={title} type={HeaderTypes.secondary}/>
                        </Link>
                        {pricePerMonth && <Price payment={PriceTypes.monthly} className="price-per-month" value={pricePerMonth}/>}
                        {pricePerDay && <Price payment={PriceTypes.daily} value={pricePerDay}/>}
                        <p className="description-field">{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default  AnnouncementPreview;

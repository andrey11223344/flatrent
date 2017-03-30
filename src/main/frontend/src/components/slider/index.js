import React, {Component, PropTypes} from 'react';
import ReactSlider from 'react-slider';
import './slider.scss';

class Slider extends Component {

    constructor(props) {
        super(props);

        const {
            from,
            to,
            value
        } = props;

        this.state = {
            sliderValue: value,
            min: from,
            max: to
        };
    }

    changeValue = (v) => this.setState({sliderValue: v});

    render() {
        const {
            sliderValue,
            min,
            max
        } = this.state;
        const [right, left] = sliderValue;

        return (
            <div className="slider-values">
                <div className="slider-container">
                    <span className="slider-value slider-value-from">{right}</span>
                    <ReactSlider
                        min={min}
                        max={max}
                        value={sliderValue}
                        withBars={true}
                        barClassName="bar"
                        onChange={this.changeValue}
                        onAfterChange={this.props.onSave}
                    >
                        <div className="slider-handle"/>
                        <div className="slider-handle"/>
                    </ReactSlider>
                    <span className="slider-value slider-value-to">{left}</span>
                </div>
            </div>
        );
    }
}

Slider.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    onSave: PropTypes.func.isRequired
};

export default Slider;

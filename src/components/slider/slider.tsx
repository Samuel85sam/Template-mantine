import React from 'react';
import { Slider } from '@mantine/core';

interface CustomSliderProps {
    defaultValue?: number;
    min?: number;
    max?: number;
}
const SliderBar: React.FC<CustomSliderProps> = (props) => {

    return (
        <>
            <Slider
                defaultValue={props.defaultValue}
                min={props.min}
                max={props.max}
                onChange={(value) => {
                    document.documentElement.style.fontSize = `${value}%`;
                }} />
        </>
    );
};

export default SliderBar;

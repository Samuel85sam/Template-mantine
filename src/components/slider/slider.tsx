// import { Slider, useMantineTheme } from '@mantine/core'; 

// const SliderBar = () => {

//     return (

//         <>
//             <Slider
//                 defaultValue={100}
//                 min={40}
//                 max={130}
//                 onChange={(value) => {
//                     document.documentElement.style.fontSize = `${value}%`;
//                 }}
//             />
//         </>
//     );
// };

//  export default SliderBar;
import React from 'react';
import { Slider } from '@mantine/core';

interface CustomSliderProps {
    defaultValue?: number;
    min?: number;
    max?: number;
}
const SliderBar: React.FC<CustomSliderProps> = (props) => {
   
    return (
        <Slider
            min={props.min}
            defaultValue={props.defaultValue}
            max={props.max}
            onChange={(value) => {
                document.documentElement.style.fontSize = `${value}%`;
            }} />
    );
};

export default SliderBar;

import { Slider } from '@mantine/core'; 

const SliderBar = () => {

    return (

        <>
            <Slider
                defaultValue={100}
                min={70}
                max={130}
              onChange={(value) => {
                    document.documentElement.style.fontSize = `${value}%`;
                }}
            />
        </>
    );
};

export default SliderBar;

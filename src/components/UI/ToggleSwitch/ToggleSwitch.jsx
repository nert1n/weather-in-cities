import React, { useState } from 'react';
import cl from './ToggleSwitch.module.scss'

function ToggleSwitch(props) {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        props.updateIsOn(!isOn);
    };

    return (
        <label className={cl.toggleSwitch}>
            <p className={cl.toggleSwitch__text}>
                {isOn ?'Не искать город?' : 'Найти город?'}
            </p>
            <input
                type="checkbox"
                checked={isOn}
                onChange={toggleSwitch}
                className={cl.toggleSwitch__checkbox}
            />
            
        </label>
    );
}

export default ToggleSwitch;
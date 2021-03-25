import React, {ChangeEvent} from "react";
import style from './App.module.css';


type PropsType = {
    settingMode: boolean
    changeMode: () => void
    minValue: number
    maxValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    count: number
    increment: () => void
    reset: () => void
    setValue: () => void
}

function Buttons(props: PropsType) {

    const onSettingsChange = () => props.changeMode()
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => props.changeMaxValue(+(e.currentTarget.value))
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => props.changeMinValue(+(e.currentTarget.value))
    const onIncrClick = () => props.increment()
    const onResetClick = () => props.reset()
    const onSetClick = () => {
        props.changeMode()
        props.setValue()
    }


    return props.settingMode
        ? <div className={style.container}>
            <div className={style.input}>
                MaxValue:
                <input type="number" min={props.minValue} max={100}
                       value={props.maxValue}
                       onChange={onChangeMax}
                />
                {props.minValue >= props.maxValue || props.minValue < 0
                    ? <div className={style.incorrect}>incorrect value</div>
                    : ""
                }
                MinValue:
                <input type="number" min={-1} max={props.maxValue}
                       value={props.minValue}
                       onChange={onChangeMin}
                />
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={onSetClick}>
                    Set
                </button>
            </div>
        </div>
        : <div className={style.container}>
            <div className={props.count >= props.maxValue ? style.countRed : ""}>
                {props.count >= props.maxValue ? props.maxValue : props.count}
            </div>
            <div>
                <button disabled={props.count >= props.maxValue} className={style.button}
                        onClick={onIncrClick}>Incr
                </button>
                <button disabled={props.count === props.minValue} className={style.button}
                        onClick={onResetClick}>Reset
                </button>
                <button className={style.button}
                        onClick={onSettingsChange}>Settings
                </button>
            </div>
        </div>
}


export default Buttons
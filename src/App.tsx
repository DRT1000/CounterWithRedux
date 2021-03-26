import React from 'react';
import Buttons from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    changeMaxAC,
    changeMinAC,
    changeModeAC, incrementAC,
    InitialStateType, resetAC,
    setValueAC
} from "./bll/counter-reducer";


function App() {

    const state = useSelector<AppStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()



    function changeMode() {
        dispatch(changeModeAC())
    }

    function changeMinValue(value: number) {
        dispatch(changeMinAC(value))
    }

    function changeMaxValue(value: number) {
        dispatch(changeMaxAC(value))
    }

    function increment() {
        dispatch(incrementAC())
    }

    function reset() {
        dispatch(resetAC())
    }

    function setValue() {
        dispatch(setValueAC())
    }

    return (
        <Buttons
            settingMode={state.settingMode}
            changeMode={changeMode}
            maxValue={state.maxValue}
            minValue={state.minValue}
            changeMinValue={changeMinValue}
            changeMaxValue={changeMaxValue}
            count={state.count}
            increment={increment}
            reset={reset}
            setValue={setValue}
        />
    )
}

export default App;

const CHANGE_MODE = "CHANGE-MODE"
const CHANGE_MIN_VALUE = "CHANGE-MIN-VALUE"
const CHANGE_MAX_VALUE = "CHANGE-MAX-VALUE"
const INCREMENT = "INCREMENT"
const RESET = "RESET"
const SET_VALUE = "SET-VALUE"


const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 0,
    settingMode: false
}
type ChangeModeType = {
    type: "CHANGE-MODE"
}
type ChangeMinValue = {
    type: "CHANGE-MIN-VALUE"
    value: number
}
type ChangeMaxValue = {
    type: "CHANGE-MAX-VALUE"
    value: number
}
type IncrementType = {
    type: "INCREMENT"
}
type ResetType = {
    type: "RESET"
}
type SetValueType = {
    type: "SET-VALUE"
}


type ActionType =
    ChangeModeType
    | ChangeMinValue
    | ChangeMaxValue
    | IncrementType
    | ResetType
    | SetValueType

export type InitialStateType = typeof initialState
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case RESET:
            return {...state, count: state.count = state.minValue}
        case CHANGE_MODE:
            return {...state, settingMode: !state.settingMode}
        case SET_VALUE:
            return {...state, count: state.minValue}
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.value}
        case CHANGE_MIN_VALUE:
            return {...state, minValue: action.value}
        default:
            return state
    }

}


export const changeModeAC = (): ChangeModeType => {
    return {type: CHANGE_MODE}
}
export const incrementAC = (): IncrementType => {
    return {type: INCREMENT}
}
export const resetAC = (): ResetType => {
    return {type: RESET}
}
export const setValueAC = (): SetValueType => {
    return {type: SET_VALUE}
}
export const changeMinAC = (value: number): ChangeMinValue => {
    return {type: CHANGE_MIN_VALUE, value}
}
export const changeMaxAC = (value: number): ChangeMaxValue => {
    return {type: CHANGE_MAX_VALUE, value}
}



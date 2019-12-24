import C from '../constants'
import { 
    ColorState,
    AddColor,
    RemoveColor,
    RateColor,
    ActionTypes } from './types'

export const color = (state : ColorState, action : ActionTypes = { type: null}) : ColorState => {
    switch (action.type) {
        case C.ADD_COLOR: 
            const addColor = action as AddColor
            return {
                id: addColor.id,
                title: addColor.title,
                color: addColor.color,
                timestamp: addColor.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            const rateColor = action as RateColor
            return (state.id !== rateColor.id) ? 
                state :
                {
                    ...state,
                    rating: rateColor.rating
                }
        default:
            return state
    }
}

export const colors = (state: ColorState[] = [], action : ActionTypes = {type: null}) => {
    switch (action.type) {
        case C.ADD_COLOR : 
            return [
                ...state,
                color(new ColorState(), action)
            ]
        case C.RATE_COLOR :
            return state.map(
                c => color(c, action)
            )
        case C.REMOVE_COLOR : 
            const removeColor = action as RemoveColor
            return state.filter(
                c => c.id !== removeColor.id
            )
        default:
            return state
    }
}
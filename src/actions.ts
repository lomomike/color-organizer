import C from './constants'
import { v4 } from 'uuid'
import { AddColor, RemoveColor, RateColor} from './store/types'

export const addColor = (title : string, color : string) : AddColor=> 
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()        
    })

export const removeColor = (id: string) : RemoveColor => 
    ({
        type: C.REMOVE_COLOR,
        id
    })

export const rateColor = (id: string, rating: number) : RateColor =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })
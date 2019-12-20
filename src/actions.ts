import C from './constants'
import { v4 } from 'uuid'

export const addColor = (title : string, color : string) => 
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()        
    })

export const removeColor = (id: string) => 
    ({
        type: C.REMOVE_COLOR,
        id
    })

export const rateColor = (id: string, rating: number) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })
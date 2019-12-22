import C from './constants'
import { v4 } from 'uuid'

export class AddColor {
    type: string;
    id: string;
    title: string;
    color: string;
    timestamp: string;

    constructor(
        type: string,
        id: string,
        title: string,
        color: string,
        timestamp: string)
    {
        this.type = type;
        this.id = id;
        this.title = title;
        this.color = color;
        this.timestamp = timestamp;
    }

}

export class RemoveColor {
    type: string;
    id: string;


	constructor(type: string, id: string) {
        this.type = type;
        this.id = id;
	}
    
}

export class RateColor {
    type: string;
    id: string;
    rating: number


	constructor(type: string, id: string, rating: number) {
        this.type = type;
        this.id = id;
        this.rating = rating;
	}
}

export const addColor = (title : string, color : string) => 
    (new AddColor(
        C.ADD_COLOR,
        v4(),
        title,
        color,
        new Date().toString()        
    ))

export const removeColor = (id: string) => 
    (new RemoveColor(
        C.REMOVE_COLOR,
        id
    ))

export const rateColor = (id: string, rating: number) =>
    (new RateColor(
        C.RATE_COLOR,
        id,
        rating
    ))
export class ColorState {
    id: string
    title: string
    color: string
    rating: number
    timestamp: string

    constructor() {}
}

export class State {
    colors: ColorState[]
}

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

export type ActionTypes = AddColor | RemoveColor | RateColor | { type: any };

import * as React from 'react'
import { Star } from './Star'

interface StarRatingProps {
    starsSelected : number,
    totalStars? : number,
    onRate : any
}

const StarRating = ({starsSelected=0, totalStars=5, onRate= (f : any) => f } : StarRatingProps) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => onRate(i+1)}/>
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>;

export default StarRating

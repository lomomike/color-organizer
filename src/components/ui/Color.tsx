import * as React from 'react'
import * as PropTypes from 'prop-types'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import '../../../stylesheets/Color.scss'
import { History } from 'history'

export interface ColorProps {
    id : string,
    title: string,
    color: string,
    rating: number,
    timestamp: string,
    onRemove: any,
    onRate: any,
    history: History
}

type ColorRouteProps = RouteComponentProps<any> & ColorProps

class Color extends React.Component<ColorRouteProps> {

    render() {
        const { id, title, color, rating, timestamp, onRemove, onRate, history } = this.props
        return (
            <section className="color">
                <h1 ref="title"
                    onClick={() => history.push(`/${id}`)}>{title}</h1>
                <button onClick={() => onRemove()}>
                    
                </button>
                <div className="color"
                     onClick={() => history.push(`/${id}`)}
                     style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }

}

export default withRouter(Color)

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Whoops404, Location } from './Whoops404'
import '../../../stylesheets/ColorDetails.scss'
import { History } from 'history'

interface ColorDetailsProps {
    title : string
    color : string
    history: History,
    location: Location
}

const ColorDetails = ({ title, color, history, location }) =>
    (!color) ?
        <Whoops404 location={location}/> :
        <div className="color-details"
             style={{backgroundColor: color}}
             onClick={() => history.goBack()}>
            <h1>{title}</h1>
            <h1>{color}</h1>
        </div>

ColorDetails.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ColorDetails

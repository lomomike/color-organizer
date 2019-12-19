import * as React from 'react'
import * as PropTypes from 'prop-types'
import Color, { ColorProps } from './Color'
import '../../../stylesheets/ColorList.scss'

interface ColorListProps {
    colors: ColorProps[],
    onRate: Function,
    onRemove: Function    
}

const ColorList = ({ colors=[], onRate=(f : any) => f, onRemove= (f: any) => f } : ColorListProps ) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                    {...color}
                       onRate={(rating : number) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)} />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default ColorList

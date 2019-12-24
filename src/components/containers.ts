import { connect } from 'react-redux'
import ColorList from './ui/ColorList'
import ColorDetails from './ui/ColorDetails'
import AddColorForm from './ui/AddColorForm'
import { addColor, rateColor, removeColor } from '../actions'
import { sortColors, findById } from '../lib/array-helpers'
import { State } from '../store/types'

export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
)(AddColorForm)


export const Colors = connect(
    ({colors } : State, {match} : any) =>
        ({
            colors: sortColors(colors, match.params.sort)
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList)

export const Color = connect(
    ({ colors } : State, { match } : any) => findById(colors, match.params.id)
)(ColorDetails)

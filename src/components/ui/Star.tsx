import * as PropTypes from 'prop-types'
import * as React from 'react'
import '../../../stylesheets/Star.scss'

export interface StarProps { selected: boolean, onClick: any  }

export const Star = (props : StarProps) =>
     <div className={(props.selected) ? "star selected" : "star"} onClick={props.onClick}>
     </div>;


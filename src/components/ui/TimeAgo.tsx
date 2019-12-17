import * as React from 'react'
import { ago } from '../../lib/time-helpers'

interface TimeAgoProps { timestamp: string}

const TimeAgo = ({timestamp}: TimeAgoProps) => {
    return <div className="time-ago">
        { ago(timestamp) }
    </div>
}

export default TimeAgo
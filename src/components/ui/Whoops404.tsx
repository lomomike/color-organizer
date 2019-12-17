import * as React from 'react'
interface Location { pathname: string }
interface Whoops404Props { location: Location }

const Whoops404 = (props: Whoops404Props) =>
    <div className="whoops-404">
        <h1>Whoops cannot find resource at '{props.location.pathname}'</h1>
    </div>

export default Whoops404
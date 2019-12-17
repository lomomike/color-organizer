import * as React from 'react'
export interface Location { pathname: string }
export interface Whoops404Props { location: Location }

export const Whoops404 = (props: Whoops404Props) =>
    <div className="whoops-404">
        <h1>Whoops cannot find resource at '{props.location.pathname}'</h1>
    </div>

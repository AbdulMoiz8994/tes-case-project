import React from 'react'
import './TimerButton.css'

export interface Props{
    ButtonAction: () => void,
    ButtonValue: string
}

export const TimerButton: React.FC<Props> = ({ButtonAction,ButtonValue}) => {
    return (
        <div className="button-container" onClick={ButtonAction}>
            <p>{ButtonValue}</p>
        </div>
    )
}

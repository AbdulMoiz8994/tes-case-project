import React from 'react'


export interface Props{
    ButtonAction: () => void,
    ButtonValue: string
}

export const TimerButton: React.FC<Props> = ({ButtonAction,ButtonValue}) => {
    return (
        <div>
            <button onClick={ButtonAction}>{ButtonValue}</button>
        </div>
    )
}

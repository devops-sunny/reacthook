import React from 'react'

const RulesHook = () => {
    const [myName, setMyName] = React.useState('Sunny');                            // myName=  Sunny
    return (
        <div>
            <h1>{ myName }</h1>
        </div>
    )
}
export default RulesHook

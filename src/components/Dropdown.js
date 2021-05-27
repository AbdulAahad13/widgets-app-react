import React from 'react'

const Dropdown = ({ options }) => {


    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value}>
                {option.label}
            </div>
        )
    })








    return (
        <>
            <div className='ui form'>
                <div className='field'>
                    <label className='label'>
                        Select a color
                     <div className='ui selection dropdown visible active'>
                         <i className='dropdown icon '  ></i>
                         </div>   
                    </label>
                </div>
            </div>
        </>
    )
}

export default Dropdown

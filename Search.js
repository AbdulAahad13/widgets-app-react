import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Search() {
    //state
    const [term, setTerm] = useState('');
    //use effect
    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php',
                params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            })
        };
        // []=run at initial
        // nothin = run at initial and after every rerender
        //[data] = run at initial and after ever rerender if data changed

    }, [term]);


    return (
        <>
            <div>
                <div className='ui form'>
                    <div className='field'>
                        <label>Enter search term</label>
                        <input
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                            className='input' />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Search

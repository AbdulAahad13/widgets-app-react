import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Search = () => {
    //state
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([])
    //use effect
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };
        // if (debouncedTerm) {
        //     search();
        //   }
        // }, [debouncedTerm]);
        // []=run at initial
        // nothin = run at initial and after every rerender
        //[data] = run at initial and after ever rerender if data changed
        if (term && !results.length) {
            search();
        } else {
            const timeOutId = setTimeout(() => {

                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeOutId)
            }
        }


    }, [term])
    const renderResults = results.map((result) => {
        return <div key={result.pageid} className='item'>
            <div className='right floated content'>
                <a href={`https://en.wikipedia.org?curdid=${result.pageid}`} className='ui button'>GO</a>
            </div>
            <div className='content'>
                <div className='header'>
                    {results.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet }}>
                    
                </span>

            </div>

        </div>
    })

    return (
        <div>
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

                <div className='ui celled list'>
                    {renderResults}
                </div>
            </div>

        </div>

    )
}

export default Search

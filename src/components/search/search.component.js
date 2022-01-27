import React from 'react'

const Search =(props)=>{
    return(
        <input
           name='search'
           className='searchbox'
           type='password'
           placeholder='search monsters'
           onChange={props.handlesearch}
        />
    )
}
export default Search
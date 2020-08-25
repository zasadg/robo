import React from 'react';

const Searchbox = ({searchField, searchChange})=>{
    return(
       <div className='pa2'>
            <input className='searchbox pa3 ba br3 b--green bg-light-blue ' type='search' placeholder='search robots'
            onChange = {searchChange} />
       </div>
    );
}

export default Searchbox;
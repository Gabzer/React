'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
      <div className='search'>
            <input
                  type='search'
                  placeholder='Digite o nome do usuário'
                  onKeyUp={handleSearch} //observa as teclas apertadas
            />
      </div>
)

Search.propTypes = {
      handleSearch: React.PropTypes.func.isRequired
}

export default Search

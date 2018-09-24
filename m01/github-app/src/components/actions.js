'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => (
      <div className='actions'>
            <button onClick={getRepos}>Ver repositórios</button>
            <button onClick={getStarred}>Ver favoritos</button>
      </div>
)

Actions.propTypes = {
      getRepos: PropTypes.fun,
      getStarred: PropTypes.fun
}

export default Actions
import { createContext } from 'react'
import createDataContext from './createDataContext'

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'fetchVideo':
            return action.payload
        case 'gettingError':
            return []
        default: return state
    }
}

const getVideos = dispatch => {
    return async () => {
        console.log('GET API called')
        await fetch('https://raw.githubusercontent.com/PratikVishwakarma/TheMissingApron/master/Videos.json')
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: 'fetchVideo', payload: json.videos })
            })
            .catch((error) => {
                console.error(error)
                dispatch({ type: 'gettingError' })
            })
    }
}

export const { Context, Provider } = createDataContext(
    recipeReducer,
    { getVideos },
    []
)
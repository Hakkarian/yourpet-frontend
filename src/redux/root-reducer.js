import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/auth-slice'
import noticesReducer from './notices/notices-slice';
import petsReducer from './pets/pets-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const rootReducer = combineReducers({
    auth: persistedReducer,
    notices: noticesReducer,
    pets: petsReducer,
})

export default persistedReducer;
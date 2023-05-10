import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/auth-slice'
import noticesReducer from './notices/notices-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const rootReducer = combineReducers({
    auth: persistedReducer,
    notices: noticesReducer
})

export default persistedReducer;
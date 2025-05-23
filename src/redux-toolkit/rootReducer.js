import { combineReducers } from "redux";
import userReducer from "../redux-toolkit/slices/userSlice"; 
import { persistReducer } from "redux-persist";
import persistConfig from "../redux-toolkit/persistConfig";

const rootReducer = combineReducers({
  user: userReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

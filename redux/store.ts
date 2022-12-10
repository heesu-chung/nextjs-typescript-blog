import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import Thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
export type RootStore = ReturnType<typeof rootReducer>;

import { combineReducers } from "redux";
import blog from "./blogReducer";
import blogs from "./blogsReducer";

const rootReducer = combineReducers({
    blog,
    blogs,
});

export default rootReducer;

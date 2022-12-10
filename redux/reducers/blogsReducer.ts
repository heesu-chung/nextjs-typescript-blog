import { IBlog } from "../Types";
import { IBlogType } from "./blogReducer";
export const GET_HOME_BLOGS = "GET_HOME_BLOGS";

export interface IGetHomeBlogsType {
    type: typeof GET_HOME_BLOGS;
    payload: IBlog[];
}

const blogsInit: [] = [];

const blogReducer = (state: [] = blogsInit, action: IBlogType) => {
    switch (action.type) {
        case GET_HOME_BLOGS:
            return action.payload;
        default:
            return state;
    }
};

export default blogReducer;

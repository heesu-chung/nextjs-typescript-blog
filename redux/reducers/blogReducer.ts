import { IBlog } from "../Types";
import { IGetHomeBlogsType } from "./blogsReducer";
export const GET_HOME_BLOGS = "GET_HOME_BLOGS";
export const CREATE_BLOG = "CREATE_BLOG";
export const GET_BLOG = "GET_BLOG";

export interface IGetBlogType {
    type: typeof GET_BLOG;
    payload: IBlog;
}

export interface ICreateBlogType {
    type: typeof CREATE_BLOG;
    payload: IBlog;
}

export type IBlogType = IGetHomeBlogsType | IGetBlogType | ICreateBlogType;

const blogInit = {
    title: "",
    subTitle: "",
    content: "",
    number: 0,
    desc: "",
    date: "",
    category: [],
};

const blogReducer = (state: IBlog = blogInit, action: IBlogType) => {
    switch (action.type) {
        case CREATE_BLOG:
            return action.payload;
        case GET_BLOG:
            return action.payload;
        default:
            return state;
    }
};

export default blogReducer;

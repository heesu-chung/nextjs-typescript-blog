import { Dispatch } from "redux";
import { db } from "../../config/firebase";

import {
    GET_BLOG,
    IGetBlogType,
    ICreateBlogType,
} from "../reducers/blogReducer";

import { GET_HOME_BLOGS, IGetHomeBlogsType } from "../reducers/blogsReducer";
import { IBlog } from "../Types";

export const getHomeBlogs =
    () => async (dispatch: Dispatch<IGetHomeBlogsType>) => {
        const blog = db.collection("posts");
        try {
            let arr: any = [];
            await blog
                .orderBy("date", "desc")
                .get()
                .then((docs) => {
                    docs.forEach((doc) => {
                        let obj = { ...doc.data() };
                        arr.push(obj);
                    });
                });
            dispatch({
                type: GET_HOME_BLOGS,
                payload: arr,
            });
        } catch (err: any) {
            console.log(err);
        }
    };

export const getBlog =
    (title: string | string[] | undefined, blogs: IBlog[]) =>
    async (dispatch: Dispatch<IGetBlogType>) => {
        try {
            const blog = [...blogs].filter((el: any) => title === el.title);

            dispatch({
                type: GET_BLOG,
                payload: blog[0],
            });
        } catch (err: any) {
            console.log(err);
        }
    };

export const createBlog =
    (data: {}) => async (dispatch: Dispatch<ICreateBlogType>) => {
        const blog = db.collection("posts");
        try {
            await blog.add(data);
        } catch (err: any) {
            console.log(err);
        }
    };

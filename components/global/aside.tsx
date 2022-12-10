import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getHomeBlogs } from "../../redux/actions/blogActions";
import { IBlog, RootStore } from "../../redux/Types";
import AsideBlock from "../aside/AsideBlock";

const AsideWrapper = styled.aside`
    width: 20vw;
    min-width: 300px;
    height: 92vh;
    overflow-y: scroll;
    border-right: 1px solid #eee;
    padding: 30px 0;

    @media (max-width: 768px) {
        display: none;
    }
    .tag-title {
        padding: 0 0 20px 20px;
        font-size: 20px;
        font-weight: 700;
    }
`;

interface ICategory {
    [category: string]: string[];
}

let asideCategory: ICategory = {};

const filterCategory = (blogs: IBlog[]) => {
    if (!asideCategory.length) {
        asideCategory["React"] = [];
        asideCategory["Typescript"] = [];
        asideCategory["NextJS"] = [];
        asideCategory["WebGL"] = [];
        asideCategory["browser"] = [];
    }

    blogs.map((el: IBlog, idx: number) => {
        el.category.map((ell: string, index: number) => {
            if (asideCategory[ell] && !asideCategory[ell].includes(el.title)) {
                asideCategory[ell].push(el.title);
            } else if (!asideCategory[ell]) {
                asideCategory[ell] = [];
                asideCategory[ell].push(el.title);
            }
        });
    });
};

const Aside = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state: RootStore) => state);

    useEffect(() => {
        dispatch<any>(getHomeBlogs());
    }, [dispatch]);

    useEffect(() => {
        filterCategory(blogs);
    }, [blogs]);

    return (
        <AsideWrapper>
            <p className="tag-title">Tags</p>
            {Object.entries(asideCategory)
                .sort()
                .map((el, idx) => (
                    <AsideBlock key={idx} el={el} />
                ))}
        </AsideWrapper>
    );
};

export default Aside;

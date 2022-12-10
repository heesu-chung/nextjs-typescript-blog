import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getBlog } from "../../redux/actions/blogActions";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/Types";

import ScrollToTop from "../button/scrollToTop";
import Image from "next/image";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import Link from "next/link";

export const ContentWrapper = styled.div`
    height: 92vh;
    overflow-y: scroll;
`;

export const ContentBlock = styled.div`
    position: relative;
    line-height: 30px;
    margin: 50px auto;
    @media (min-width: 768px) {
        width: 80%;
    }
    @media (min-width: 1024px) {
        max-width: 50vw;
    }
    @media (min-width: 1441px) {
        max-width: 50vw;
    }
    .title {
        line-height: 55px;
        font-weight: 700;
        font-size: 45px;
        margin-bottom: 80px;
    }
    .article {
        white-space: normal;
        word-wrap: break-word;
        line-height: 28px;
        @media (max-width: 768px) {
            padding-left: 30px;
        }
    }

    .date {
        text-align: right;
        font-size: 15px;
        font-weight: 500;
        color: #aaa;
        margin-top: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #ddd;
    }
    .lists {
        margin-top: 20px;
        li {
            font-size: 15px;
            line-height: 30px;
            color: #454bc5;
            font-weight: 700;
            margin-left: 15px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    .slug {
        margin-top: 20px;
        border-bottom: 1px solid #ddd;
    }
`;

const NextPrevWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 50px auto;
    @media (min-width: 768px) {
        width: 80%;
    }
    @media (min-width: 1024px) {
        max-width: 50vw;
    }
    @media (min-width: 1441px) {
        max-width: 50vw;
    }
`;

const PrevBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    img {
        margin: 0 10px;
        width: 20px;
        height: 20px;
        object-fit: cover;
    }
    span {
        color: #454bc5;
        font-weight: 400;
        text-align: left;
    }
`;

const NextBlock = styled.div`
    display: flex;
    justify-content: flex-end;

    cursor: pointer;
    img {
        margin: 0 10px;
        width: 20px;
        height: 20px;
        object-fit: cover;
    }
    span {
        color: #454bc5;
        font-weight: 400;
        text-align: right;
    }
`;

const init = () => {
    const container = document.querySelector(".content-wrapper");

    container.scrollTo({ top: 0, behavior: "smooth" });
};

const Content = ({ slug }: any) => {
    init();
    const dispatch = useDispatch();
    const { blogs, blog } = useSelector((state: RootStore) => state);
    let prev = { title: "", idx: -1 };
    let next = { title: "", idx: -1 };

    useEffect(() => {
        dispatch<any>(getBlog(slug, blogs));
    }, [dispatch, slug, blogs]);

    blogs.map((el, idx) => {
        if (el.title === slug) {
            prev.title = blogs[idx - 1].title;
            prev.idx = idx - 1;
            next.title = blogs[idx + 1].title;
            next.idx = idx + 1;
        }
    });

    return (
        <ContentWrapper className="content-wrapper">
            <ContentBlock>
                <h1 className="title">{blog.title}</h1>

                <p
                    className="article"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                <h4 className="date">{blog.date}</h4>
            </ContentBlock>
            <NextPrevWrapper>
                <PrevBlock>
                    <Image width="20" height="20" src={arrowLeft} alt="" />
                    <span>
                        <Link
                            href={{
                                pathname: "/blog/[slug]",
                                query: { slug: `${prev.title}` },
                            }}
                        >
                            {prev.title}
                        </Link>
                    </span>
                </PrevBlock>
                <NextBlock>
                    <span>
                        <Link
                            href={{
                                pathname: "/blog/[slug]",
                                query: { slug: `${next.title}` },
                            }}
                        >
                            {next.title}
                        </Link>
                    </span>
                    <Image width="20" height="20" src={arrowRight} alt="" />
                </NextBlock>
            </NextPrevWrapper>
            <ScrollToTop />
        </ContentWrapper>
    );
};

export default Content;

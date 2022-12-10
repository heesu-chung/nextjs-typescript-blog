import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Content from "../content/content";
import content from "../../pages/content/[slug]";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
`;

const HeaderBlock = styled.div`
    max-width: 1350px;
    @media (max-width: 1024px) {
        max-width: 966px;
    }
    @media (max-width: 768px) {
        max-width: 688px;
    }
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    flex-direction: row;
`;

const HeaderLogoWrapper = styled.div`
    flex: 3;
    display: flex;
    justify-content: flex-start;
    span {
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
        cursor: pointer;
    }
`;

const HeaderTagsWrapper = styled.div`
    flex: 1;
    @media (max-width: 768px) {
        display: none;
    }
    span {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.05em;
        cursor: pointer;
        margin: 0 15px;
    }
    .tag-light {
        color: #454bc5;
        font-weight: 700;
        font-size: 17px;
        &:hover {
            color: #999;
        }
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <HeaderLogoWrapper>
                    <span className="blog-logo">
                        <Link href="/">Blog</Link>
                    </span>
                </HeaderLogoWrapper>
                <HeaderTagsWrapper>
                    <span className="tag">
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "React" },
                            }}
                        >
                            React
                        </Link>
                    </span>
                    <span className="tag">
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "Typescript" },
                            }}
                        >
                            Typescript
                        </Link>
                    </span>
                    <span className="tag">
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "WebGL" },
                            }}
                        >
                            WebGL
                        </Link>
                    </span>
                    <span className="tag">
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "NextJS" },
                            }}
                        >
                            NextJS
                        </Link>
                    </span>
                    <span className="tag">
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "browser" },
                            }}
                        >
                            Browser
                        </Link>
                    </span>
                    <span className="tag">
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "etc" },
                            }}
                        >
                            etc
                        </Link>
                    </span>
                    <span className="tag tag-light">
                        <Link
                            href={{
                                pathname: "/createBlog",
                            }}
                        >
                            NEW
                        </Link>
                    </span>
                </HeaderTagsWrapper>
            </HeaderBlock>
        </HeaderWrapper>
    );
};

export default Header;

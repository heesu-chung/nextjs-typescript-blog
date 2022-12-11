import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 8vh;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
`;

const HeaderBlock = styled.div`
    width: 96vw;
    margin: 0 auto;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    flex-direction: row;
    align-items: center;

    flex-direction: row;
`;

const HeaderLogoWrapper = styled.div`
    flex: 3;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    justify-content: flex-start;
    span {
        font-size: 26px;
        line-height: 28px;
        font-weight: 700;
        color: #6270b3;
        cursor: pointer;

        &:hover {
            color: black;
        }
    }
`;

const HeaderTagsWrapper = styled.div`
    flex: 1;
    @media (max-width: 768px) {
        display: none;
    }
    .tag-light {
        color: #6270b3;
        font-weight: 700;
        font-size: 17px;
        margin-left: 15px;
        &:hover {
            color: #999;
        }
    }
`;

const HeaderTags = styled.span<{ slug: string | string[]; tag: string }>`
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    padding: 8px 0;
    letter-spacing: 0.05em;
    cursor: pointer;
    margin: 0 15px;
    ${(props) =>
        props.slug === props.tag
            ? css`
                  border-bottom: 3px solid #6270b3;
              `
            : css`
                  &:hover {
                      border-bottom: 1px solid #6270b3;
                  }
              `}
`;

const Header = () => {
    const router = useRouter();

    return (
        <HeaderWrapper>
            <HeaderBlock>
                <HeaderLogoWrapper>
                    <span className="blog-logo">
                        <Link href="/">Dev_log</Link>
                    </span>
                </HeaderLogoWrapper>
                <HeaderTagsWrapper>
                    <HeaderTags
                        className="tag"
                        slug={router.query.slug}
                        tag="React"
                    >
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "React" },
                            }}
                        >
                            React
                        </Link>
                    </HeaderTags>
                    <HeaderTags
                        className="tag"
                        slug={router.query.slug}
                        tag="Typescript"
                    >
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "Typescript" },
                            }}
                        >
                            Typescript
                        </Link>
                    </HeaderTags>
                    <HeaderTags
                        className="tag"
                        slug={router.query.slug}
                        tag="WebGL"
                    >
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "WebGL" },
                            }}
                        >
                            WebGL
                        </Link>
                    </HeaderTags>
                    <HeaderTags
                        className="tag"
                        slug={router.query.slug}
                        tag="NextJS"
                    >
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "NextJS" },
                            }}
                        >
                            NextJS
                        </Link>
                    </HeaderTags>
                    <HeaderTags
                        className="tag"
                        slug={router.query.slug}
                        tag="browser"
                    >
                        <Link
                            href={{
                                pathname: "/content/[slug]",
                                query: { slug: "browser" },
                            }}
                        >
                            Browser
                        </Link>
                    </HeaderTags>

                    <span className="tag tag-light">
                        <Link
                            href={{
                                pathname: "/createBlog",
                            }}
                        >
                            NEW+
                        </Link>
                    </span>
                </HeaderTagsWrapper>
            </HeaderBlock>
        </HeaderWrapper>
    );
};

export default React.memo(Header);

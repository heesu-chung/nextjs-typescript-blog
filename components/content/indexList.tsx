import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHomeBlogs } from "../../redux/actions/blogActions";
import { RootStore } from "../../redux/Types";
import { ContentWrapper, ContentBlock } from "./content";

const IndexList = ({ slug }: any) => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state: RootStore) => state);

    useLayoutEffect(() => {
        dispatch<any>(getHomeBlogs());
    }, [dispatch]);

    return (
        <ContentWrapper>
            <ContentBlock>
                <h1>Lists</h1>
                <ul className="lists">
                    {Object.entries(blogs).map((el, idx) => (
                        <>
                            <li key={idx}>
                                <Link
                                    href={{
                                        pathname: "/blog/[slug]",
                                        query: { slug: `${el[1].title}` },
                                    }}
                                >
                                    {el[1].title}
                                    <span>{el[1].date}</span>
                                </Link>
                            </li>
                            {(idx + 1) % 5 === 0 && <br />}
                        </>
                    ))}
                </ul>
            </ContentBlock>
        </ContentWrapper>
    );
};

export default IndexList;

import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStore } from "../../redux/Types";
import { ContentWrapper, ContentBlock } from "./content";

const List = ({ slug }: any) => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state: RootStore) => state);
    let cnt = 0;
    return (
        <ContentWrapper>
            <ContentBlock>
                <h2>Tag</h2>
                <h3 className="slug">{slug}</h3>
                <ul className="lists">
                    {Object.entries(blogs).map(
                        (el, idx) =>
                            el[1].category.includes(slug) && (
                                <>
                                    <li key={cnt++}>
                                        <Link
                                            href={{
                                                pathname: "/blog/[slug]",
                                                query: {
                                                    slug: `${el[1].title}`,
                                                },
                                            }}
                                        >
                                            {slug} - {el[1].title}
                                        </Link>
                                    </li>
                                    {cnt % 5 === 0 && <br />}
                                </>
                            )
                    )}
                </ul>
            </ContentBlock>
        </ContentWrapper>
    );
};

export default List;

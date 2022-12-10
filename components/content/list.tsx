import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStore } from "../../redux/Types";
import { ContentWrapper, ContentBlock } from "./content";

let categoryList: string[] = [];
let essential = ["React", "Typescript", "WebGL", "NextJS", "browser"];

const List = ({ slug }: any) => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state: RootStore) => state);

    useLayoutEffect(() => {
        categoryList = [];
        if (essential.includes(slug)) {
            Object.entries(blogs).map((el, idx) => {
                if (el[1].category.includes(slug)) {
                    categoryList.push(el[1].title);
                }
            });
        } else {
            Object.entries(blogs).map((el, idx) => {});
        }
    }, [blogs, slug]);

    return (
        <ContentWrapper>
            <ContentBlock>
                <h2>Tag</h2>
                <h3 className="slug">{slug}</h3>
                <ul className="lists">
                    {categoryList &&
                        categoryList.map((el, idx) => (
                            <li key={idx}>
                                <Link
                                    href={{
                                        pathname: "/blog/[slug]",
                                        query: { slug: `${el}` },
                                    }}
                                >
                                    {slug} - {el}
                                </Link>
                            </li>
                        ))}
                </ul>
            </ContentBlock>
        </ContentWrapper>
    );
};

export default List;

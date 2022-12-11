import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

const AsideBlockWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    align-items: flex-start;
`;

const AsideMarker = styled.span<{ isOpen: boolean }>`
    width: 7px;
    height: 20px;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    -ms-transition: 0.3s all ease;
    margin-left: 1.2vw;
    ${(props) =>
        props.isOpen
            ? css`
                  background-color: #6270b3;
              `
            : css`
                  background-color: none;
              `}
`;

const AsideContentWrapper = styled.span`
    margin-left: 0.7vw;
    .aside-content {
        cursor: pointer;
        font-size: 14px;
        line-height: 23px;
        font-weight: 500;
        color: #2c3e50;
        .content-count {
            margin-left: 10px;
            font-size: 13px;
            font-weight: 300;
            color: #666;
        }
    }
`;

const AsideContents = styled.ul`
    width: 100%;
    padding: 10px 0 0px 10px;
`;

const AsideContentList = styled.li<{ selected: boolean }>`
    display: block;
    font-size: 12px;
    line-height: 25px;
    font-weight: 500;
    color: #999;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    -webkit-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    -ms-transition: 0.3s all ease-in-out;
    &:hover {
        color: #404972;
    }
    ${(props) =>
        props.selected
            ? css`
                  color: #6270b3;
                  font-weight: 700;
              `
            : css`
                  color: #999;
              `}
`;

export interface IAsideBlock {
    el: {} | any;
    slug?: null | undefined | any;
}

const AsideBlock = ({ el }: IAsideBlock) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
        if (el[1].includes(router.query.slug)) {
            setIsOpen(true);
        }
    }, [el, router.query]);

    const onMainCategoryClick = () => {
        if (el[1].length) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            <AsideBlockWrapper>
                <AsideMarker isOpen={isOpen} />
                <AsideContentWrapper>
                    <span
                        className="aside-content"
                        onClick={onMainCategoryClick}
                    >
                        {el[0]}
                        <span className="content-count">({el[1].length})</span>
                    </span>
                    {isOpen && (
                        <AsideContents>
                            {el[1].map((ell: string, index: number) =>
                                router.query.slug !== ell ? (
                                    <AsideContentList
                                        key={index}
                                        selected={false}
                                    >
                                        <Link
                                            href={{
                                                pathname: "/blog/[slug]",
                                                query: { slug: `${ell}` },
                                            }}
                                        >
                                            - {ell}
                                        </Link>
                                    </AsideContentList>
                                ) : (
                                    <AsideContentList
                                        key={index}
                                        selected={true}
                                    >
                                        - {ell}
                                    </AsideContentList>
                                )
                            )}
                        </AsideContents>
                    )}
                </AsideContentWrapper>
            </AsideBlockWrapper>
            {isOpen && <AsideContents />}
        </>
    );
};

export default AsideBlock;

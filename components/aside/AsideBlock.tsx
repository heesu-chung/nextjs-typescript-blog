import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const AsideBlockWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

const AsideMarker = styled.span<{ isOpen: boolean }>`
    width: 4px;
    height: 20px;
    transition: 0.3s all ease;

    ${(props) =>
        props.isOpen
            ? css`
                  background-color: black;
              `
            : css`
                  background-color: none;
              `}
`;

const AsideContentWrapper = styled.span`
    margin-left: 18px;
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
    li {
        display: block;
        font-size: 12px;
        line-height: 25px;
        font-weight: 500;
        color: #999;
        cursor: pointer;
        &:hover {
            color: black;
        }
    }
`;

export interface IAsideBlock {
    el: {} | any;
}

const AsideBlock = ({ el }: IAsideBlock) => {
    const [isOpen, setIsOpen] = useState(false);

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
                            {el[1].map((ell: string, index: number) => (
                                <li key={index}>
                                    <Link
                                        href={{
                                            pathname: "/blog/[slug]",
                                            query: { slug: `${ell}` },
                                        }}
                                    >
                                        - {ell}
                                    </Link>
                                </li>
                            ))}
                        </AsideContents>
                    )}
                </AsideContentWrapper>
            </AsideBlockWrapper>
            {isOpen && <AsideContents />}
        </>
    );
};

export default AsideBlock;

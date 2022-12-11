import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Head from "next/head";

import Layout from "../components/Layout";
import { useState } from "react";
import IndexList from "../components/content/indexList";

const AppWrapper = styled.section`
    width: 100%;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    flex-direction: row;
`;

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Dev_log</title>

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content="개발과정에서 배워가는 것들을 정리하는 블로그입니다."
                />
                <meta name="referrer" content="origin-when-cross-origin" />
                <meta property="og:title" content="Dev_log" />
                <meta
                    property="og:description"
                    content="2022 React/Next.js/Typescript Blog"
                />
                <meta name="author" content="Chung Hee Su" />
                <meta
                    name="keywords"
                    content="프론트엔드, 프론트엔드 포트폴리오, 포트폴리오, 웹사이트 포트폴리오, 개발자, Frontend, Frontend Portfolio, Website Portfolio, Frontend Developer, Next.js 포트폴리오, Typescript 포트폴리오, 타입스크립트 포트폴리오"
                />
            </Head>
            <IndexList />
        </Layout>
    );
};

export default React.memo(Home);

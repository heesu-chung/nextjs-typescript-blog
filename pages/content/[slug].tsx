import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import List from "../../components/content/list";

const ListContent = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <Head>
                <html lang="ko" />
                <title>Dev_log</title>

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content={`This is the article lists of ${slug}`}
                />
                <meta name="referrer" content="origin-when-cross-origin" />
                <meta property="og:title" content="Dev_log" />
                <meta
                    property="og:description"
                    content={`This is the article lists of ${slug}`}
                />
                <meta name="author" content="Chung Hee Su" />
                <meta
                    name="keywords"
                    content={`개발 블로그, ${slug}, 개발공부, 개발 공부, 코딩 공부, 코딩학습, 코딩 학습, React, WebGL, Typescript`}
                />
            </Head>
            <List slug={slug} />
        </Layout>
    );
};

export default ListContent;

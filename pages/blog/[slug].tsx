import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Content from "../../components/content/content";
import Layout from "../../components/Layout";

const Blog = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <Layout slug={slug}>
            <Head>
                <title>Blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content slug={slug} />
        </Layout>
    );
};

export default Blog;

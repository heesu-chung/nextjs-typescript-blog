import React, { useRef, useState, useMemo } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../components/Layout";

const CreateListWrapper = styled.div`
    position: relative;
    width: 45%;
    margin: 50px auto 0;

    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 90%;
    }
`;

const CreateInput = styled.input`
    height: 50px;
    font-size: 22px;
    border: none;
    border-bottom: 1px solid #aaa;
    margin-bottom: 20px;
`;

const InputCategories = styled.div`
    padding: 10px 0;
    margin-bottom: 30px;
    overflow-x: hidden;
`;

const SubmitButton = styled.button`
    width: 100px;
    height: 30px;
    margin: 30px auto;
    border-radius: 15px;
    border: 1px solid #aaa;
    background: white;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover {
        background: #454bc5;
        color: white;
        border: 1px solid #454bc5;
    }
`;

const CreateBlog = () => {
    const QuillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState("Contents Here...");

    const imageHandler = () => {};

    const onSubmit = (e: any) => {
        console.log(`onSubmit clicked`);
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [
                        { header: [1, 2, 3, 4, 5, 6, false] },
                        "bold",
                        "italic",
                        "blockquote",
                        "code-block",
                        "image",
                        "video",
                    ],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        []
    );

    return (
        <Layout>
            <CreateListWrapper>
                <CreateInput placeholder="Title here..." />
                <CreateInput placeholder="SubTitle here..." />
                <CreateInput placeholder="Category here...then press enter" />
                <InputCategories />
                <ReactQuill
                    ref={(element) => {
                        if (element !== null) {
                            QuillRef.current = element;
                        }
                    }}
                    modules={modules}
                    value={contents}
                    onChange={setContents}
                    theme="snow"
                    style={{ height: "500px" }}
                />
                <SubmitButton style={{ marginTop: "80px" }} onClick={onSubmit}>
                    작성하기
                </SubmitButton>
            </CreateListWrapper>
        </Layout>
    );
};

export default CreateBlog;

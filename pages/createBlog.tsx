import React, { useRef, useState, useMemo } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../components/Layout";
import SubmitBtn from "../components/button/submitBtn";

const CreateListWrapper = styled.div`
    position: relative;
    width: 50%;
    height: 90vh;
    margin: 50px auto 0;

    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 90%;
    }
    .tag-wrapper {
        margin-bottom: 50px;
        .tag {
            padding: 3px 8px;
            margin-right: 10px;
            border-radius: 20px;
            background-color: #6270b3;
            color: white;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: 0.3s all ease-in-out;
        }
    }
`;

const CreateInput = styled.input`
    height: 50px;
    font-size: 22px;
    border: none;
    border-bottom: 1px solid #aaa;
    margin-bottom: 20px;
`;

const InputCategories = styled.span`
    display: inline-block;
    padding: 5px 8px;
    margin-bottom: 30px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 700;
    background-color: #6270b3;
    color: white;
`;

export const SubmitButton = styled.button`
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
        background: #6270b3;
        color: white;
    }
`;

const CreateBlog = () => {
    const QuillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState("Contents Here...");
    const imageHandler = () => {};

    const [title, setTitle] = useState("");
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const [subTitle, setSubTitle] = useState("");
    const handleSubTitle = (e) => {
        setSubTitle(e.target.value);
    };

    const [category, setCategory] = useState("");
    const [categoryArr, setCategoryArr] = useState([]);
    const handleCategory = (e) => {
        setCategory(e.target.value);
    };
    const enterCategory = (e) => {
        if (e.code === "Enter") {
            setCategoryArr([...categoryArr, category]);
            setCategory("");
        }
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
                <CreateInput
                    onChange={handleTitle}
                    placeholder="Title here..."
                />
                <CreateInput
                    placeholder="SubTitle here..."
                    onChange={handleSubTitle}
                />
                <CreateInput
                    placeholder="Category here...then press enter"
                    onChange={handleCategory}
                    onKeyDown={enterCategory}
                    value={category}
                />
                <div className="tag-wrapper">
                    {categoryArr.map((el, idx) => (
                        <span className="tag" key={idx}>
                            {el}
                        </span>
                    ))}
                </div>
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
                <SubmitBtn
                    title={title}
                    subTitle={subTitle}
                    category={categoryArr}
                    contents={contents}
                />
            </CreateListWrapper>
        </Layout>
    );
};

export default CreateBlog;

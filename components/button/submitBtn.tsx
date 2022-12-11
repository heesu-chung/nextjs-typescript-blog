import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { SubmitButton } from "../../pages/createBlog";
import { createBlog } from "../../redux/actions/blogActions";

interface ICreateData {
    title?: string;
    subTitle?: string;
    category?: string[];
    contents?: string;
}

const SubmitBtn = ({ title, subTitle, category, contents }: ICreateData) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit = (e: any) => {
        let data = {
            title: title,
            subTitle: subTitle,
            category: category,
            content: contents,
            date: new Date().toLocaleString(),
            number: 0,
        };
        console.log(data);
        dispatch<any>(createBlog(data));

        router.push(
            {
                pathname: "/",
            },
            undefined,
            { scroll: true }
        );
    };
    return (
        <SubmitButton style={{ marginTop: "80px" }} onClick={onSubmit}>
            작성하기
        </SubmitButton>
    );
};

export default SubmitBtn;

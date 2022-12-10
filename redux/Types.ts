import { ChangeEvent, FormEvent } from "react";
import rootReducer from "./reducers";

export type InputChange = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export type RootStore = ReturnType<typeof rootReducer>;

export interface IAlert {
    loading?: boolean;
    success?: string | string[];
    errors?: string | string[];
}

export interface IBlog {
    title: string;
    subTitle: string;
    content: string;
    number: number;
    desc: string;
    date: string;
    category: string[];
}

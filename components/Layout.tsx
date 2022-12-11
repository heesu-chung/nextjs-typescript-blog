import React from "react";
import styled from "styled-components";
import Header from "./global/header";
import Aside from "./global/aside";
import { Provider } from "react-redux";
import store from "../redux/store";

const AppWrapper = styled.section`
    width: 100%;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex;
    flex-direction: row;
`;

function Layout({ children }: any) {
    return (
        <Provider store={store}>
            <Header />

            <AppWrapper>
                <Aside />
                {children}
            </AppWrapper>
        </Provider>
    );
}

export default React.memo(Layout);

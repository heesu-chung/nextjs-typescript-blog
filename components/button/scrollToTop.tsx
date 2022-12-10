import Image from "next/image";
import styled from "styled-components";
import arrow from "../../assets/scroll_arrow.png";

const ScrollToTopArrow = styled.div`
    position: fixed;
    top: 90vh;
    left: 93vw;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0.7;
    cursor: pointer;
    @media (max-width: 768px) {
        display: none;
    }

    img {
        object-fit: cover;
    }

    &:hover {
        opacity: 1;
    }
`;

const ScrollToTop = () => {
    const onClick = () => {
        const container = document.querySelector(".content-wrapper");
        container?.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ScrollToTopArrow onClick={onClick}>
            <Image width="40" height="40" src={arrow} alt="" />
        </ScrollToTopArrow>
    );
};

export default ScrollToTop;

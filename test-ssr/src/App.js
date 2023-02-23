import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";
import Icon from "./icon.png";

const Container = styled.div`
    background-color: #aaaaaa;
    border: 1px solid blue;
`;

function fetchUserName() {
    const usernames = ["mike", "june", "jamie"];
    return new Promise((resolve) => {
        const username = usernames[Math.floor(Math.random() * 3)];
        setTimeout(() => resolve(username), 100);
    });
}

export default function App({ page }) {
    const [page2, setPage] = useState(page);
    useEffect(() => {
        window.onpopstate = (event) => {
            setPage(event.state);
        };
    }, []);
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetchUserName().then((data) => setUsername(data));
    }, []);
    function onChangePage(e) {
        const newPage = e.target.dataset.page;
        window.history.pushState(newPage, "", "/${newPage}");
        setPage(newPage);
    }
    const PageComponent = page2 === "home" ? Home : About;
    return (
        <Container>
            <button data-page="home" onClick={onChangePage}>
                Home
            </button>
            <button data-page="about" onClick={onChangePage}>
                About
            </button>
            <img src={Icon} />
            <PageComponent username={username} />
        </Container>
    );
}

import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contact = styled.div`
    padding-top: 20vh;
    text-align: center;
    & > p {
        font-size: 1.1rem;
        padding-bottom: 10px;
        margin: 0;
    }
    & > h2 {
        font-size: 1.7rem;
        margin-bottom: 10px;
    }
    & > .icons > a {
        font-size: 1.5rem;
        padding: 10px;
    }
`;

const Info = styled.div`
    padding-top: 20vh;
    width: 40%;

    & > h2 {
        font-size: 1.7rem;
        margin-bottom: 10px;
    }

    & > p {
        font-size: 1.1rem;
        padding-bottom: 10px;
        margin: 0;
    }

    & > a {
        display: block;
        padding: 5px;
        padding-left: 0;
    }
`;

export default function Index() {
    return (
        <div>
            <Head>
                <title>Rob van der Leek</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
                      integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/style.css"/>
            </Head>
            <Main>
                <Contact>
                    <img src="/me-445x459.png" height="375"/>
                    <h2>Rob van der Leek</h2>
                    <p><a href="mailto:robvanderleek@gmail.com">robvanderleek@gmail.com</a></p>
                    <span class="icons">
                        <a href="https://twitter.com/robvanderleek"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/rob-van-der-leek-66596962"><i class="fab fa-linkedin"></i></a>
                        <a href="https://medium.com/@robvanderleek"><i class="fab fa-medium"></i></a>
                        <a href="https://github.com/robvanderleek"><i class="fab fa-github"></i></a>
                    </span>
                </Contact>
                <Info>
                    <h2>About</h2>
                    <p>Software engineer. Lives and works in The Netherlands. Passion for software quality and software
                        minimalism. I've done some of my best development work under the shower.</p>
                </Info>
            </Main>
        </div>
    );
}


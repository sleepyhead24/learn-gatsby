import {Link} from 'gatsby';
import React from 'react';
import {Layout} from '../components/layout';

const HomePage = () => {
    return(
        <Layout>
            <h1>Hello World! Welcome to KennyK's Website</h1>
            <p>crafted with tears and love.</p>
            <Link to="/about-me">About Me</Link>
        </Layout>
    );
};

export default HomePage;


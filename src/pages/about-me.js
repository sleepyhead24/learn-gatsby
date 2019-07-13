import {Link} from 'gatsby';
import React from 'react';
import {Layout} from '../components/layout';

const AboutMePage = () => {
    return(
        <Layout>
            <h1>Kenny Kang</h1>
            <ul>
                <li>Sleepyhead</li>
                <li>Penang, Malaysia</li>
            </ul>
            <Link to="/">Home</Link>
        </Layout>
    );
};

export default AboutMePage;
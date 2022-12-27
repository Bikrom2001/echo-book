import React from 'react';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import Find from '../../Components/Find';
import Gallery from '../../Components/Gallery';
import Post from '../../Components/Post';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Post></Post>
            <Find></Find>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
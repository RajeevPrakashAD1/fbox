import React from 'react';
import Cart from '../components/Cart/cart';
import Navbar from '../components/Navbar/navbar';
import Ship from '../components/Shiping/shiping';
import Intro from './../components/Intro/intro';

const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Cart />
			<Intro />
			<Ship />
		</React.Fragment>
	);
};

export default Home;

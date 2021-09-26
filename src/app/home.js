import React from 'react';
import Cart from '../components/Cart/cart';
import Footer from '../components/Footer/footer';
import Gift from '../components/Gift/gift';
import Navbar from '../components/Navbar/navbar';
import Question from '../components/Question/question';
import School from '../components/School/school';
import Ship from '../components/Shiping/shiping';
import Intro from './../components/Intro/intro';
import PPlan from './../components/Plans/parentplan';

const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Cart />
			<Intro />
			<Ship />
			<PPlan />
			<Gift />
			<Question />
			<School />
			<Footer />
		</React.Fragment>
	);
};

export default Home;

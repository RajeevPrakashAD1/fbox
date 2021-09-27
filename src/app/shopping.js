import React from 'react';
import Cart from '../components/Cart/cart';
import Footer from '../components/Footer/footer';
import Gift from '../components/Gift/gift';
import Navbar from '../components/Navbar/navbar';
import ProceedToPay from '../components/Pay/pay';
import Question from '../components/Question/question';
import School from '../components/School/school';
import Ship from '../components/Shiping/shiping';
import Intro from './../components/Intro/intro';
import PPlan from './../components/Plans/parentplan';

const Shopping = () => {
	return (
		<React.Fragment>
			<Navbar />
			<ProceedToPay />
		</React.Fragment>
	);
};

export default Shopping;

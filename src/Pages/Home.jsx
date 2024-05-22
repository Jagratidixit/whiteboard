import React from 'react'
import img1 from '../../public/Images/img1.avif';
import '../../public/Css/home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';




function Home() {
	return (
		<div>
			<section className='sec1'>
				<div>
				<h1 style={{ fontWeight: 'bold', fontSize: '36px', lineHeight: '1.2', color:'purple' }}>
                Online Whiteboard for Education
                </h1>

				<p>
				Explain Everything for in-class and hybrid lectures.	
				</p>
					<Link to="/signup"><button className='bt'>Sign Up Free</button></Link>
				</div>
				<div >
                 <Link to="/" ><img src={img1} alt="img1" /></Link>
            </div>
			</section>


		<footer className="footer">
			<div className="container row">
				<div className="footer-col">
					<h4>company</h4>
					<ul>
						<li><a href="#">about us</a></li>
						<li><a href="#">our services</a></li>
						<li><a href="#">privacy policy</a></li>
						<li><a href="#">visit website</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>get help</h4>
					<ul>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">shipping</a></li>
						<li><a href="#">returns</a></li>
						<li><a href="#">order status</a></li>
						<li><a href="#">payment options</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>online shop</h4>
					<ul>
						<li><a href="#">download</a></li>
						<li><a href="#">changelog</a></li>
						<li><a href="#">github</a></li>
						<li><a href="#">all version</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>follow us</h4>
					<div className="social-links">
					<a><FontAwesomeIcon icon={faTwitter} /></a>
					<a><FontAwesomeIcon icon={faFacebook} /></a>
					<a><FontAwesomeIcon icon={faInstagram} /></a>
						
					</div>
				</div>
			</div>
			<div className="footer-bottom-content">
				<p>Designed By <a href="#">MINIPROJECT</a></p>
				<div className="copyright">
					<p>&copy;Copyright <strong>MINIPROJECT</strong>.All Rights Reserved</p>
				</div>
			</div>
		</footer>
	</div>
	)
}

export default Home
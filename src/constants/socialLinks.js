import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaBehanceSquare, FaTwitterSquare } from "react-icons/fa";

const data = [
	{
		id   : 5,
		icon : <FaTwitterSquare className='social-icon' />,
		url  : "https://www.twitter.com",
	},
	{
		id   : 1,
		icon : <FaFacebookSquare className='social-icon' />,
		url  : "https://www.facebook.com",
	},
	{
		id   : 2,
		icon : <FaLinkedin className='social-icon' />,
		url  : "https://www.linkedin.com",
	},
	{
		id   : 3,
		icon : <FaInstagramSquare className='social-icon' />,
		url  : "https://www.twitter.com",
	},
	{
		id   : 4,
		icon : <FaBehanceSquare className='social-icon' />,
		url  : "#",
	},
];
const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className='social-link'>
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>;
};

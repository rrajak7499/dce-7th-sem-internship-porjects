const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";
	const name = "Darbhanga College of Enginnering";

	return (
		<div className="container text-center p-4">
			Copyright © <small>{new Date().getFullYear()}</small>  {name}
		</div>
	);
};

export default Footer;

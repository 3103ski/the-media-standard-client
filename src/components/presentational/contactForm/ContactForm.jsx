// --> React
import React from 'react';

// --> Project Imports
import { ReactJSOForm, FormSuccess } from 'jsoforms';
import { Section, Loading } from 'components';
// import { SERVER_CONTACT_FORMS } from 'routes';
import { contactFormData } from './contactFormData';

// --> Component Imports
import Style from './contactForm.module.scss';

export default function ContactForm() {
	const [isLoading, toggleIsLoading] = React.useState(false);
	const [status, setStatus] = React.useState(null);

	function onSubmitContact(data) {
		// toggleIsLoading(true);
		// setStatus(null);
		console.log({ data });

		// const hdrs = {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// };

		// axios({ url: SERVER_CONTACT_FORMS, method: 'post', hdrs, data })
		// 	.then(({ data }) => {
		// 		toggleIsLoading(false);
		// 		setStatus(data.message);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		toggleIsLoading(false);
		// 	});
	}
	return (
		<div className={Style.Wrapper}>
			<div className={Style.Title}>
				<h1>
					<span>WORK WITH</span> US
				</h1>
			</div>
			<Section>
				{isLoading ? (
					<Loading size='screen' />
				) : status === 'success' ? (
					<FormSuccess successText='Got It! ' subtext={`I'll get back to you soon!`}>
						<p></p>
					</FormSuccess>
				) : (
					<ReactJSOForm formObject={contactFormData} callback={onSubmitContact} />
				)}
			</Section>
			{/* <Button>SEND</Button> */}
		</div>
	);
}

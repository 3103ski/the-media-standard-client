import { textInput, textArea, simpleDropMenu } from 'jsoforms';

export const contactFormData = {
	submitText: 'SEND',
	panes: [
		// ==> Pane 1
		{
			inputs: {
				name: textInput({ placeholder: 'Your Name' }),
				email: textInput({ placeholder: 'Email' }),
				org: textInput({ placeholder: 'Organization Name (optional)', validate: false }),
				companySize: simpleDropMenu({
					placeholder: 'Company Size',
					options: ['Individual', '2-10', '11-30', '31+'],
				}),
				services: simpleDropMenu({
					placeholder: 'Services Needed',
					options: ['Photography', 'Video', 'Press Release', 'other'],
					multiple: true,
					initial: [],
				}),
				message: textArea({ placeholder: 'Message' }),
			},
		},
	],
};

export default {
	name: 'teamMember',
	title: 'Team Members',
	type: 'document',
	fields: [
		{
			name: 'firstName',
			title: 'First Name',
			type: 'string',
			required: true,
			validation: (Rule) => Rule.required().min(2).max(20),
		},
		{
			name: 'lastName',
			title: 'Last Name ',
			type: 'string',
			required: true,
			validation: (Rule) => Rule.required().min(2).max(20),
		},
		{
			name: 'title',
			title: 'Title ',
			type: 'string',
			required: true,
			validation: (Rule) => Rule.required().min(1).max(20),
		},
		{
			name: 'bio',
			title: 'Short Bio',
			type: 'string',
			validation: (Rule) => Rule.required().min(1).max(180),
		},
		{
			name: 'picture',
			title: 'Picture',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
	],
};

export default {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().min(3).max(25),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'client',
			title: 'Project Client',
			type: 'reference',
			to: { type: 'client' },
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'summary',
			title: 'Description Summary',
			type: 'string',
			validation: (Rule) => Rule.max(100),
		},
		{
			name: 'description',
			title: 'Full Description',
			type: 'blockContent',
		},
		{
			name: 'projectLink',
			title: 'Client Link',
			type: 'url',
		},
		{
			name: 'year',
			title: 'Year Text',
			type: 'string',
			validation: (Rule) => Rule.required().min(1).max(4),
		},
		{
			name: 'category',
			title: 'Category',
			type: 'string',
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
			validation: (Rule) => Rule.required().min(1),
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'imageAsset' } }],
			validation: (Rule) => Rule.required().min(1).max(10),
		},
		{
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
		},
		{
			name: 'finishDate',
			title: 'Finish Date',
			type: 'date',
		},
	],
};

export default {
	name: 'product',
	title: 'PRODUCT',
	type: 'document',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'array',
			of: [{ type: 'image'}],
			options: {
				hotspot: true,
			}
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'author',
			title: 'Author',
			type: 'string',
		},
		{
			name: 'publisher',
			title: 'Publisher',
			type: 'string',
		},
		{
			name: 'genres',
			title: 'Genres',
			type: 'array',
			of: [{type: 'string'}]
		},
		{
			name: 'subgenres',
			title: 'SubGenres',
			type: 'array',
			of: [{type: 'string'}]
		},
		
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 90,
			}
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
	]
}
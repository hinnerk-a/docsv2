// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	general: [
		{
			type: 'category',
			label: 'Getting started',
			link: {
				type: 'generated-index',
				description: 'Learn about the most important Meta Box concepts through step-by-step guides. Highly recommended to go through everything from the start to the end.',
			},
			items: [
				'introduction',
				'installation',
				'custom-post-types',
				'custom-fields',
			],
		},
		'fields',
		{
			type: 'category',
			label: 'Extensions',
			link: {
				type: 'generated-index',
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'extensions',
				}
			],
		},
		{
			type: 'category',
			label: 'Advanced',
			link: {
				type: 'generated-index',
			},
			items: [
				'shortcode',
				'cloning-fields',
				'validation',
				'sanitization',
				'integration',
				'composer',
				'database',
				'custom-attributes',
				'custom-field-type',
				'actions',
				'filters',
				{
					Functions: [
						'rwmb-meta',
						'rwmb-set-meta',
						'rwmb-get-value',
						'rwmb-the-value',
						'rwmb-get-object-fields',
						'rwmb-get-field-settings',
						'rwmb-get-registry',
					],
				}
			],
		},
		{
			type: 'category',
			label: 'Tutorials',
			items: [
				'creating-fields-with-code',
				'displaying-fields-with-code',
			],
		},
		{
			type: 'category',
			label: 'Others',
			link: {
				type: 'generated-index',
			},
			items: [
				'updates',
				'support-policy',
				'compatibility',
			],
		},
	],
};

module.exports = sidebars;

import { writable } from 'svelte/store';

export const resume = writable({
	basics: {
		name: 'Ankit Aabad',
		email: 'ankit.aabad1@gmail.com',
		phone: '8947044449',
		photo: {
			url: 'https://cdn.rxresu.me/uploads/68015/336193/1673754826020.jpeg',
			filters: {
				size: 128,
				shape: 'circle',
				border: false,
				grayscale: false,
			},
			visible: true,
		},
		summary: 'summary',
		website: 'wwww.google.com',
		headline: 'headline',
		location: {
			city: 'ajmer',
			region: 'Rajasthan',
			address: '883, B. K. Kaul Nagar Ajmer',
			country: 'India',
			postalCode: '305004',
		},
		profiles: [
			{
				network: 'facebook',
				username: 'ankit',
				url: 'www.facebook.com',
				id: 'd49b5910-7965-42af-a710-5f183d99f89b',
			},
			{
				network: 'medium',
				username: 'ankitblogs',
				url: 'www.medium.com',
				id: 'a8dd778f-5aed-4a50-bbe8-b386f46c31dd',
			},
		],
		birthdate: '2013-02-08',
	},
	work: {
		id: 'work',
		name: 'Work Experience',
		type: 'work',
		items: [
			{
				id: '1466a8a1-cc85-4a97-a50e-84f729a0146e',
				url: '',
				date: {
					end: '2017-02-02',
					start: '2014-05-02',
				},
				name: 'MTS-2',
				summary: 'making Identity and access management effortless',
				position: 'LoginRadius',
			},
			{
				id: '052c7588-22c2-4430-a856-61c3c385d916',
				url: '',
				date: {
					end: '2017-02-02',
					start: '2014-05-02',
				},
				name: 'MTS-2',
				summary: 'making Identity and access management effortless',
				position: 'LoginRadius',
			},
		],
		columns: 2,
		visible: true,
	},
	awards: {
		id: 'awards',
		name: 'Awards',
		type: 'basic',
		items: [],
		columns: 2,
		visible: true,
	},
	skills: {
		id: 'skills',
		name: 'Skills',
		type: 'basic',
		items: [
			{
				name: 'Nodejs',
				level: '',
				levelNum: 0,
				keywords: [],
				id: '8eb4bde1-eedc-449c-9a5f-cba906fb41c1',
			},
			{
				name: 'svelte',
				level: '',
				levelNum: 0,
				keywords: [],
				id: '865ae631-0717-4190-8f7f-ef06a1a5588c',
			},
		],
		columns: 2,
		visible: true,
	},
	projects: {
		id: 'projects',
		name: 'Projects',
		type: 'basic',
		items: [
			{
				name: 'TIc-Tac_toe',
				description: 'description',
				date: {
					start: '2014-02-05',
					end: '2014-02-03',
				},
				url: 'www.google.com',
				summary: 'A web socket based 2 player game',
				keywords: [],
				id: 'e61ed35f-5e92-47e3-80ae-1a8226219020',
			},
		],
		columns: 2,
		visible: true,
	},
	education: {
		id: 'education',
		name: 'Education',
		type: 'basic',
		items: [
			{
				institution: 'University of Hyderabad',
				degree: 'MCA',
				area: 'computer Science',
				score: '88.5',
				date: {
					start: '2018-05-10',
					end: '2017-04-05',
				},
				url: 'www.uoh.com',
				summary: 'I did mca from univ of hyderabad',
				courses: [],
				id: '48cf382d-9057-4776-8107-9ba2608fe92a',
			},
		],
		columns: 2,
		visible: true,
	},
	interests: {
		id: 'interests',
		name: 'Interests',
		type: 'basic',
		items: [
			{
				name: 'Watching Podcase',
				keywords: [],
				id: '11dda34f-cb30-43b7-873e-da7af773a5c8',
			},
			{
				name: 'Reading Books',
				keywords: [],
				id: '546932d3-03d2-4056-85ce-5b4e1dd1c0a2',
			},
		],
		columns: 2,
		visible: true,
	},
	languages: {
		id: 'languages',
		name: 'Languages',
		type: 'basic',
		items: [],
		columns: 2,
		visible: true,
	},
	volunteer: {
		id: 'volunteer',
		name: 'Volunteer Experience',
		type: 'basic',
		items: [],
		columns: 2,
		visible: true,
	},
	references: {
		id: 'references',
		name: 'References',
		type: 'basic',
		items: [],
		columns: 2,
		visible: true,
	},
	publications: {
		id: 'publications',
		name: 'Publications',
		type: 'basic',
		items: [],
		columns: 2,
		visible: true,
	},
	certifications: {
		id: 'certifications',
		name: 'Certifications',
		type: 'basic',
		items: [
			{
				name: 'CCNA',
				issuer: 'Cisco',
				date: '2018-05-03',
				url: 'www.cisco.com',
				summary: 'This is my ccna summary',
				id: 'd7274aa1-547b-4baa-b885-a211d2e65b53',
			},
		],
		columns: 2,
		visible: true,
	},
	metadata: {
		css: {
			value: '/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}',
			visible: false,
		},
		date: {
			format: 'MMMM DD, YYYY',
		},
		page: {
			format: 'A4',
		},
		theme: {
			text: '#000000',
			primary: '#f44336',
			background: '#ffffff',
		},
		layout: [
			[
				['work', 'education', 'publications', 'volunteer', 'projects', 'references'],
				['skills', 'languages', 'awards', 'certifications', 'interests'],
			],
		],
		locale: 'en',
		template: 'glalie',
		typography: {
			size: {
				body: 14,
				heading: 28,
			},
			family: {
				body: 'Open Sans',
				heading: 'Open Sans',
			},
		},
	},
});

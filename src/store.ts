import { writable } from 'svelte/store';

export const resume = writable({
  personalDetails:{
    yourName:"",
    companyName: '',
    position:'',
    email:"",
    phone:"",
    website:"",
    location:"",
    avatar:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
    professionalSummary:"",
   },

  skills: [''],
  certifications:[{name:'', year:''}],
  education:[{name:'', summary:'', started:'',finished:'', id:1}],
  employment:[{name:'', summary:'', started:'',finished:'', id:1}],
  hobbies: [''],
  summary: [{fullsummary: ''}],
  languages: [{myLanguage: ''}],
	font: 'classic',
});

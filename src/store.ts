import { writable } from 'svelte/store';

export const resume = writable({
  personalDetails:{
    firstName:"",
    lastName:"",
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
  educations:[{name:'', summary:'', started:'',finished:'', id:1}],
  employments:[{name:'', summary:'', started:'',finished:'', id:1}],
  hobbies: [''],
	font: 'classic',
});

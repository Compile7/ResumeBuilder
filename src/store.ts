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

   skills: [{value:'', id:1}],
  certifications:[{name:'', year:'', id:1}],
  educations:[{name:'', summary:'', started:'',finished:'', id:1}],
  employments:[{name:'', summary:'', started:'',finished:'', id:1}],
  hobbies: [{value:'', id:1}],
	font: 'classic',
});

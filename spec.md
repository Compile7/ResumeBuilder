# Resume Builder

The aim of the project is to provide a convenient and efficient way for job seekers to present their qualifications and increase their chances of landing an interview.

It will allow users to create a professional-looking resume quickly and easily. It will guide users through the process of inputting their personal information, work experience, education, and skills.

---

## Problem & Solution:

The Existing Resume Builders are not appealing to users because of various reasons
  - **Novoresume** asks you to pay if your resume exceeds one page and also charges for other premium features. We will beat NovoResume in pricing. We will be free.
  - **JsonResume** lets you build a resume using a json structure but this is not everyone's cup of tea. We will beat JsonResume in ease of use.
  - **RxResume** gives you lots of features to customize but it's very difficult for users to figure out how to get things done. We will beat RxResume with better User Experience & Navigation
  - We didn't know about most of them before venturing into this project. Most of them, although decent offerings are not well known. We will spend significant efforts in Marketing.
---

<br>

## Team

  - Ankit Aabad [ ankit.aabad1@gmail.com ] (SPOC)
  - Hemant Manwani [ hemant.manwani404@gmail.com ]
  - Versha Gupta [ vgversha@gmail.com ]
  - Arpita Garg  [ gargarpita4@gmail.com ]
  - Hitesh Kumawat [ hiteshkumawat19@gmail.com]
  - Pawan Dixit [ e.pawandixit@gmail.com ]



---

<br>

## Tech Stack

- **Frontend**
  - SvelteKit
  - TailwindCSS
  - Netlify / AWS S3
- **Backend** ( will work in phase 2)
  - NodeJS
  - Serverless 
  - DynamoDB
  - AWS S3

---

## Phase-1 
***Estimate - [ 6-8 weeks, By March 17, 2023 ]***
- Upload Image
- Image Crop ( square and rounded)
- Add links ( for social media profiles, email etc)
- Sections ( Education, Experience, skills)
- Experience timeline section
- Pills to show skills
- Ability to download the resume as a PDF.
- Preview
- Change Layout

---

<br>

##  Phase-2 
***Estimate - [4 weeks, By April 14, 2023]*** 

- Image Compression for storing in s3
- Save User Info on backend (Ability for users to save their progress and return to the resume builder at a later time)
- User registration and login system ( only through gmail )
- Themes ( different fonts, color schemes)
- Additional Templates
- fetch info and reconstruct a resume.
- Manage multiple resume
- Reference (Optional)

---

<br>

##  Phase-3 
***Estimate - [Continuous Process | Get Domain & Go Live( May 5 )]***
- Testing and Fixing Bugs
- Performance Optimizations
- Marketing
- Add more features like 
    - Share Resume by link
    - AI

---

<br>

## Optional
- Option for user to add skills in form of stars and progress bar

---
<br>

## Cost Estimate
- We should be able to run the project in development well within the free tier of AWS
- Once in production following cost may incur ( Active 5000 users per month)
    - Domain Registration
    - Infra Cost( includes APIGateway + DynamoDB + S3 + Route53 + Lambda + Cloudwatch )

- Rough Estimate: $5 - $10/month for infra + Yearly Domain Cost($10/year)

---
<br>

## Product Flow
- User Heads over to our website.
- Logs in using his Gmail Credentials
- Creates a fresh new resume, or selects to edit his previously created resume
- Fills/Edits the sections like experience, education, skills etc.
- Formats the layout, theme, template, fonts
- Downloads resume.
- Gets a job using the resume and thanks God for coming across such a nice resume builder.

---

<br>

## Quality
- User should be able to download a perfectly laid out resume.
- User should be able to easily edit and format his resume. 
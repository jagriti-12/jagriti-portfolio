<p align="center"> <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs" /> <img src="https://img.shields.io/badge/TailwindCSS-3.4-blue?style=for-the-badge&logo=tailwindcss" /> <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript" /> <img src="https://img.shields.io/badge/Framer--Motion-Animations-F50057?style=for-the-badge&logo=framer" /> <img src="https://img.shields.io/badge/Groq-LLM-orange?style=for-the-badge&logo=groq" /> <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" /> </p> <p align="center"> <img src="https://img.shields.io/github/last-commit/jagriti-12/jagriti-portfolio?style=flat-square&color=yellow" /> <img src="https://img.shields.io/github/languages/top/jagriti-12/jagriti-portfolio?style=flat-square&color=blueviolet" /> <img src="https://img.shields.io/github/repo-size/jagriti-12/jagriti-portfolio?style=flat-square&color=brightgreen" /> <img src="https://img.shields.io/badge/Made_With-%E2%9D%A4-red?style=flat-square" /> </p>

---

<p align="center"> <img src="https://readme-typing-svg.herokuapp.com?font=Inter&weight=600&size=28&duration=3000&pause=1200&color=F7DD56&center=true&vCenter=true&width=900&lines=AI+Powered+Next.js+Portfolio+%E2%9A%A1;Interactive+Animations+%7C+Framer+Motion;LLM+Integrated+Chat+Assistant;Showcasing+Frontend%2C+AI%2C+Research%2C+UI%2FUX;Built+With+Precision+and+Love+by+Jagriti+Sachdeva" /></p>


# 🌐 Jagriti Portfolio — Modern Next.js 2025 | AI-Enhanced Developer Portfolio

A highly interactive, fully animated, AI-powered portfolio built with **Next.js 14**, **TailwindCSS**, **Framer Motion**, and a custom **Groq LLM Assistant**.  
Designed to demonstrate strong **Frontend Development**, **UI/UX**, **AI Research**, **Full-Stack Engineering**, and **Technical Writing** skills.

This portfolio is not just a website — it’s an **experience**.

---

## 🚀 Features

### **🌟 1. Fully Responsive & Modern UI**
- Built with **Next.js App Router**
- Elegant **glassmorphism + dark theme**
- Smooth animations using **Framer Motion**
- 3D-ready hero section with avatar/video support

### **🧠 2. JagritiAI — Custom AI Assistant**
- Powered by **Groq LLM (LLaMA-3.1–8B Instant)**
- Gives **one-liner recruiter-focused answers**
- Short, clean responses with role detection:
  - Frontend Developer  
  - AI/ML Engineer  
  - UI/UX Designer  
  - Technical Writer  
  - Researcher  
  - System Architect  
- Uses structured **context data** from Jagriti’s real skills, experience, projects, certifications & resumes  
- No hallucinations — AI stays strictly in-context  
- Smart resume recommendation engine  

### **🛠 3. Dynamic Project Showcase**
- Filter by **role** & **tech**
- Elegant cards with **modal case studies**
- Uses central `projects-data.ts` for easy updates

### **🎨 4. Tech Stack Flip Cards**
- Premium "interactive reveal" UI  
- Categories:  
  - Frontend  
  - Backend  
  - UI/UX  
  - AI/ML  
  - Data Analytics  
  - Tools  
- Smooth flip animation + scrollable inner content

### **📊 5. Timeline-style Experience Section**
- Beautiful vertical timeline  
- Role-colored badges  
- SEO-optimized structured data (`itemScope`/`itemType`)

### **🎓 6. Certifications Gallery**
- Category-based tabs (Cloud, Programming, AI/ML, UI/UX, Data Analytics, Specializations)
- Click to open **high-quality modal preview**
- PDFs downloadable directly

### **📄 7. Resume Selector**
- Multiple tailored resumes:
  - Frontend Developer  
  - AI/ML Engineer  
  - Researcher  
  - Technical Writer  
  - System Architect  
  - UI/UX Designer  
  - Full-Stack Developer  
- Inline PDF previews with download buttons

### **📬 8. Contact & Recruiter Inquiry Form**
- Nodemailer integration  
- Separate **recruiter-specific form**  
- Validations, animations, success states

---

## 🧩 Tech Stack

### **Frontend**
- Next.js 14  
- TypeScript  
- TailwindCSS  
- Framer Motion  
- React Icons  
- Glassmorphism UI  

### **Backend (API Routes)**
- Next.js Server Actions  
- Nodemailer  
- Groq LLM API  
- UUID session management  

### **AI / LLM**
- Groq SDK  
- LLaMA-3.1-8B-Instant  
- Custom context-aware system prompt  
- Role detection logic  
- Resume recommendation engine  

---

## 🧠 JagritiAI Context System
This project introduces an advanced **centralized context engine**:

> `src/lib/jagriti-context.ts`

Contains structured data for:
- About  
- Skills  
- Full Project Database  
- Experience  
- Education  
- Certifications  
- Resume Files  
- Strengths  
- Roles  

The AI bot pulls from *only* this context to ensure:
- No hallucinations  
- Accurate answers  
- One-source-of-truth structure  

---

## 📂 Folder Structure

src/

├── app/

│ ├── api/

│ │ └── chat/

│ │ ├── route.ts # AI API endpoint

│ ├── layout.tsx

│ └── page.tsx

│
├── components/

│ ├── Hero/

│ ├── Navbar/

│ ├── About/

│ ├── Projects/

│ ├── Tech/

│ ├── Experience/

│ ├── Certifications/

│ └── Resume/

│

├── lib/

│ └── jagriti-context.ts # AI knowledge base

│

├── public/

│ ├── images/

│ ├── icons/

│ ├── 3dmodel.png

│ └── resumes/*.pdf

│

└── styles/

└── globals.css

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/jagriti-12/jagriti-portfolio.git
cd jagriti-portfolio
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Add environment variables
```
Create .env.local:
```
> GROQ_API_KEY=your_groq_key

> EMAIL_USER=your_email@gmail.com

> EMAIL_PASS=your_app_password

### 4️⃣ Start development server
```
npm run dev
```

### 🧠 AI Assistant Logic (Simplified)

### Steps:

1. Detect recruiter intent

2. Query Groq LLM

3. Plug in system-level context

4. Apply one-liner response formatting

5. Append resume suggestion

6. Return clean JSON to frontend widget

7. route.ts (Core Engine)

8. Detects roles: frontend / ai / research / writing / system architect

9. Injects full JAGRITI_CONTEXT

10. Cleans response

11. Limits to concise output

12. Ensures reliability

### 🎯 Deploying

#### Deployed using:

Vercel → Next.js App Router → CI/CD


#### Auto-optimizations:

1. Image optimization

2. Edge caching

3. API routes serverless execution

### 🎨 UI Highlights

- Glassmorphism navbar

- Smooth hero animations

- Beautiful flip cards

- Fully responsive layouts

- Timeline experience

- Interactive modals

### 📞 Contact

> Portfolio: https://jagriti-portfolio.vercel.app

> GitHub: https://github.com/jagriti-12

> LinkedIn: https://www.linkedin.com/in/jagriti-sachdeva

> Email: jags.jagriti12@gmail.com

--- 
## ⭐ Contributing

This is a personal project.
Forks welcome — PRs optional 🤍
If you find UI or animation improvements, feel free to suggest!

## 🛡 License

This project is private-use only.
Do not copy content, AI logic, context file or designs without permission.

## 💛 Acknowledgements

### Special thanks to:

- Groq for providing an extremely fast LLM API

- Next.js team for App Router

- TailwindCSS for making styling expressive

- Framer Motion for beautiful animations

---

## 🎉 Final Note

This portfolio is a reflection of Jagriti’s evolving engineering journey — blending frontend precision, AI research, and design intuition into a single polished digital experience.

### If you're a recruiter:
You're in good hands. Jagriti learns fast, works hard, and builds beautifully.

---
<a href="https://github.com/jagriti-12/jagriti-portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jagriti-12/jagriti-portfolio" />
</a>
<br>
~ Jagriti

**Refactored React App Structure**

```
/src
  /components
    Header.tsx            → AppBar + Drawer + Dark Mode toggle
    AnimatedSection.tsx   → Framer Motion animation wrapper
    ProjectCard.tsx       → Reusable card for each project
  /pages
    Home.tsx              → About Me section
    Projects.tsx          → Project list page
    Skills.tsx            → Skills page
    Contact.tsx           → Contact info page
  /data
    projects.ts           → Array of project objects
  App.tsx                 → Main layout + Router
  index.tsx               → Entry point
```

### ✅ Details
- `Header.tsx`: Contains the AppBar, handles navigation links, mobile drawer, and dark mode toggle.
- `AnimatedSection.tsx`: A wrapper that applies entrance animations using Framer Motion.
- `ProjectCard.tsx`: Receives project data as props and displays title, description, and GitHub button.
- `projects.ts`: Stores the array of project objects, so you keep data separate from UI.
- `App.tsx`: Only handles routing and layout — no heavy content.
- `index.tsx`: The React entry point (usually wraps the App component).

### 🌟 Benefits
✅ Easier to maintain and debug
✅ Reusable components
✅ Clean separation between logic, data, and UI
✅ Scalable for future additions (blog, more projects, etc.)

👉 Let me know if you want me to generate all these files with boilerplate code ready for you — I can bundle them into a zip!

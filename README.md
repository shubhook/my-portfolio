# Portfolio - X.AI Inspired Design

A modern, minimalist portfolio website inspired by x.ai's design aesthetic, featuring a starry parallax background, clean typography, and a blog system.

## ✨ Features

- **X.AI Inspired Design**: Ultra-minimal aesthetic with fine borders and clean lines
- **Starry Parallax Background**: Subtle animated background with mouse-tracking parallax effect
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Blog System**: Simple markdown-based blog with reading time estimates
- **Smooth Animations**: Subtle hover effects and transitions throughout
- **Orange Gradient Accents**: Warm orange gradients on hover and footer

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Adding Blog Posts

To add a new blog post:

1. Create a new `.md` file in the `src/blogs/` directory
2. Add frontmatter at the top of the file:

```markdown
---
title: Your Blog Post Title
date: DD/MM/YYYY
---

Your blog content goes here...
```

3. The blog post will automatically appear on the `/blog` page

### Blog Post Example

```markdown
---
title: My First Blog Post
date: 29/01/2026
---

This is the introduction paragraph that will be used as the excerpt.

## Section Heading

Your content here...

### Subsection

More content...
```

## 🎨 Customization

### Update Resume Link

Edit `src/components/Navbar.jsx` and replace:
```javascript
const resumeLink = "YOUR_GOOGLE_DRIVE_LINK_HERE";
```

### Update Personal Information

Edit `src/components/Home.jsx` to update:
- Name and bio
- Projects
- Skills
- Contact links

### Color Scheme

The design uses a minimalist color palette with optional orange gradients. To adjust colors, edit the CSS files in `src/components/`.

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with custom properties

## 📁 Project Structure

```
portfolio/
├── public/
│   └── K.svg                   # Favicon
├── src/
│   ├── blogs/                  # Blog posts (markdown files)
│   │   ├── building-better-web-apps.md
│   │   └── future-of-ai-development.md
│   ├── components/
│   │   ├── Home.jsx           # Homepage component
│   │   ├── Home.css
│   │   ├── Blog.jsx           # Blog list page
│   │   ├── Blog.css
│   │   ├── BlogPost.jsx       # Individual blog post
│   │   ├── BlogPost.css
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Navbar.css
│   │   └── StarryBackground.jsx  # Animated background
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Design Philosophy

This portfolio follows the x.ai design principles:

- **Ultra-minimal**: Clean, uncluttered interface with ample whitespace
- **Fine borders**: 1px borders throughout for subtle definition
- **Typography**: Space Grotesk for headings, Inter for body text
- **Subtle interactions**: Gentle hover effects and smooth transitions
- **Depth through layering**: Starry background adds depth without distraction
- **Warm accents**: Orange gradients on hover and footer for subtle warmth

## 📱 Responsive Breakpoints

- Desktop: > 768px (2-column project grid)
- Mobile: ≤ 768px (1-column layout)

## 🌟 Key Features Explained

### Starry Background

The background uses HTML5 Canvas to render stars with:
- 30% density for subtle effect
- Parallax movement based on mouse position
- Different opacity levels for depth
- Smooth animation without performance impact

### Blog System

Simple markdown-based blog that:
- Auto-generates reading time estimates
- Supports frontmatter for metadata
- Shows excerpts on listing page
- Full markdown rendering on post page

### Navbar

Floating navigation bar with:
- Auto-hide on scroll down
- Auto-show on scroll up
- Social links and theme toggle
- Smooth blur backdrop effect

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template, but feel free to fork and customize for your own use!

## 📧 Contact

- Email: khakhashubham@gmail.com
- GitHub: [@shubhook](https://github.com/shubhook)
- LinkedIn: [Shubham Khakha](https://www.linkedin.com/in/shubham-khakha/)
- Twitter: [@khakha_x](https://x.com/khakha_x)

---

Built with ❤️ using React and Vite

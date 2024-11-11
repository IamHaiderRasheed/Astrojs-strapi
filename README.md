# [AstroJS-Strapi Project](https://astrohaider.netlify.app/)

This project is a static site using Astro for full static site generation (SSG) with content managed by Strapi, a headless CMS. It features Tailwind CSS for styling and is deployed on Netlify.

## Features

- **Full Static Site Generation** with Astro.
- **Strapi** as the headless CMS for content.
- **Tailwind CSS** with custom typography for styling.
- **SSG Pagination** for category pages.
- **Classnames Library** for dynamic CSS styling in JSX. The `classnames` library (`"^2.5.1"`) is used to conditionally combine CSS classes, making it easier to handle complex class combinations cleanly and efficiently.

## Project Structure

- **src/pages**: Main Astro components and pages, including pagination setup.
- **public/**: Stores static assets like images.
- **tailwind.config.js**: Configures Tailwind for custom styling.

## Getting Started

1. **Install Dependencies**  
   Run `npm install` to install all required packages.

2. **Start Development Server**  
   ```bash
   npm run dev

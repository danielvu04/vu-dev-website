# Vu Website Portfolio

This is a personal portfolio website built with React to showcase projects, skills, and professional experience

[![Netlify Status](https://api.netlify.com/api/v1/badges/d29e7462-bc8f-4b42-b98f-38f5dfc17b5c/deploy-status)](https://app.netlify.com/sites/vuwebsiteportfolio/deploys)

---

## Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Reusable Components**: Modular React components for scalability.
- **Modern Styling**: Styled using Tailwind and custom CSS.

---

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ESLint & Prettier**: Code quality and formatting tools.
- **Jest**: Testing framework.

---

## Running the Simulation

### Manually
1. Clone the repository
```
git clone https://github.com/danielvu04/vu-dev-website
```
2. Navigate into the repository
```
cd vu-dev-website
```
3. Call npm start in the terminal
```
npm start
```
4. Launched at [http://localhost:3000/](http://localhost:3000/)

### Docker ([Repository](https://hub.docker.com/repository/docker/vud1394/website_portfolio))
1. Install [docker](https://docs.docker.com/engine/install/)
2. Run in terminal
```
docker build -t vud1394/website_portfolio
```
```
docker run --rm -p 3000:3000 vud1394/websiteportfolio
```
3. Launched at [http://localhost:3000/](http://localhost:3000)

---

## Folder Structure
- **src/components/**: Reusable React components.
- **src/styles/**: CSS files for styling.
- **src/tests/**: Test files to ensure code quality.
- **src/utils/**: Utility functions for additional functionality.
- **public/**: Static files for the application.

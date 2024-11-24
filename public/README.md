# Public

The `public` folder contains static files that are directly served to the browser. These files are not processed by Webpack.

## Included Files
- **index.html**: The HTML template for the React application.
- **favicon.ico**: The website's favicon.
- **manifest.json**: Configures Progressive Web App (PWA) settings.
- **logo.svg, logo192.png, logo512.png**: Logos used for branding and PWA compatibility.
- **robots.txt**: Instructs search engine crawlers on how to index the site.

## Best Practices
- Avoid modifying `index.html` beyond adding meta tags or script references.
- Use the `src/assets/` folder (if created) for images used in React components, rather than placing them here.

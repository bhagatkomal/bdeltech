# bdeltech

React + TypeScript + Vite website with React Router.

## Development

Use Node 24 (the installed version is recorded in `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

```bash
npm run build
npm run lint
```

## Structure

- `src/assets`: images and other imported assets
- `src/components/layout`: shared header, footer, and page layout
- `src/components/ui`: reusable interface components
- `src/components/home`: home page sections
- `src/pages`: Home, About, Services, Solutions, Industries, Work, Insights, Careers, Contact, and Not Found
- `src/routes/AppRoutes.tsx`: route definitions
- `src/data`: navigation and page content
- `src/hooks`: reusable React hooks
- `src/styles`: global and layout styles

Routes: `/`, `/about`, `/services`, `/solutions`, `/industries`, `/work`, `/insights`, `/careers`, and `/contact`; unmatched paths display the Not Found page. Pages implement the supplied Figma designs with responsive layouts and shared navigation.

The Contact form validates input and prepares an email draft using the contact address supplied in the design. Update the contact details before launch. Direct message delivery requires a backend. Insights includes category filtering and article previews; full article content and newsletter delivery are not connected yet. Careers supports role selection and links applications to Contact.

For deployment, configure the hosting server to serve `index.html` for application routes so direct links and browser refreshes work.

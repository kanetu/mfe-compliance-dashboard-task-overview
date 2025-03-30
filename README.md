# Compliance Dashboard - Task Overview Module

This module displays a list of compliance tasks. It's a microfrontend designed to be consumed by the Compliance Dashboard host application.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kanetu/mfe-compliance-dashboard-task-overview.git
    cd compliance-dashboard-task-overview
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The module will be available at `http://localhost:3001`.

## Project Structure

- `src/`: Contains the module's code.
  - `App.tsx`: The main component that displays the task list.
  - `bootstrap.tsx`: The main entry point that renders the `App` component.
  - `index.tsx`: The entry point that dynamically imports `bootstrap.tsx`.
  - `components/`: Contains React components used by the module.
  - `types/`: Contains TypeScript type definitions.
  - `utils/`: Contains utility functions.
  - `styles/`: Contains CSS styles (including Tailwind CSS directives).
- `public/`: Contains the `index.html` file.
- `webpack.config.js`: Webpack configuration for the module.

## Dependencies

- React
- React DOM
- Webpack and Module Federation plugins
- Tailwind CSS
- Tanstack React Table

## Notes

- This module is designed to be consumed by a host application using Module Federation.
- It exposes the `App` component.
- The `index.tsx` file dynamically imports the `bootstrap.tsx` file.
- Tailwind CSS is used for styling.

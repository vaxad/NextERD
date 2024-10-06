18
<img width="1470" alt="next-erd" src="https://res.cloudinary.com/db670bhmc/image/upload/v1728232422/Screenshot_2024-10-06_at_10.02.44_PM_lht802.png">

# NextERD

## Overview

**NextERD** is a simple and intuitive ERD (Entity-Relationship Diagram) maker built with **Next.js**, **TypeScript**, **shadcn/UI**, and **React-Flow**. It offers a great user interface and makes it easy to visualize your database structure through ER diagrams.

Whether you're a developer designing database schemas or a student learning about relational databases, **NextERD** provides an efficient and elegant way to create ER diagrams with minimal setup.

## Features

- **Beautiful and Modern UI**: Powered by **shadcn/UI**, providing a clean and customizable interface.
- **Interactive ERD**: Build and edit diagrams with drag-and-drop support using **React-Flow**.
- **Fast and Lightweight**: Built with **Next.js** for server-side rendering and optimized performance.
- **Entity and Relationship Management**: Easily create entities, define relationships, and visualize connections.
- **Short Learning Curve**: Simple and intuitive UI makes it easy to get started quickly.

## Demo

You can check out a live demo of the app [here](https://next-erd.vercel.app/).

## Getting Started

Follow these steps to set up **NextERD** locally:

### Prerequisites

Make sure you have the following tools installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vaxad/NextERD.git
   cd NextERD
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

The project is structured as follows:

```
NextERD/src
├── components/         # Reusable React components (ERD Component, shadcn-ui)
├── app/              # Next.js pages
├── public/             # Static assets (images, icons)
├── lib/              # Utility functions for handling data and layout
├── lib/types              # TypeScript types and interfaces
├── package.json        # Project metadata and dependencies
└── README.md           # Project README
```

### Customization

- **Styling**: The project uses **shadcn/UI** for styling.
- **ERD Diagram Logic**: The core of the diagram rendering is done through **React-Flow**. You can extend or modify the diagram functionality by exploring the components in the `components/erd` directory.

## Contribution

Contributions are welcome! If you'd like to add a feature or fix a bug, please fork the repository and submit a pull request.

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: varadprabhu111@gmail.com
- **GitHub**: [github.com/vaxad](https://github.com/vaxad)

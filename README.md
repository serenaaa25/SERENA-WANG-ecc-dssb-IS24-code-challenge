# SERENA-WANG-ecc-dssb-IS24-code-challenge

# ECC Product Manager

Hello, and welcome to my code challenge for the IS-24 Full Stack Developer Position screening.

Before you dive into the project, I want to be upfront: This is a work in progress. I understand it's not a fully polished product and there could be more bonus features to be done. Unfortunately, family emergencies cropped up over the long weekend, limiting my time to work on it. However, I've managed to implement the following features, and I hope they give you a sense of what's possible.

I'm looking forward to your feedback, and I hope the result is positive. I'm excited about the possibility of moving on to the next round of the interview process.

Please feel free to explore the project, and if you have any questions or suggestions, don't hesitate to reach out.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Contact](#contact)
- [Author](#author)
- [Installation](#installation)

## Technologies Used

- MERN stack (MongoDB, Express, React, Node.js)
- Material-UI (MUI)
- Thunk
- Redux
- etc...

## Features

1. User can view, create, edit, and delete products.
2. User can search for products (Note: Search functionality is not completed, use console log to output "Search data" nested in products.js line 19). It is strongly recommended to try the search functionality at the very end, as using it will require the user to manually navigate back to http://localhost:3001/products and refresh the main page.
3. Fully responsive, adapting to most smartphones, tablets, and regular-sized monitors.

**Front End Capabilities**:

- Mobile-first design, ensuring a fully responsive user experience.

**Back End Capabilities**:

- CRUD (Create, Read, Update, Delete) operations with MongoDB, making this a dynamic and data-driven application.
 ( Product data originates from http://localhost:3000/api/products )
  **Please note that the server should be launched on port 3000.**

## Usage

Access to the MongoDB Cloud Atlas database is enabled from all IP addresses. However, due to free account limitations, repetitive calls may cause a bad connection. If you encounter any issues, please let me know.

### Contact

Serena Wang
Email: sswang0609@gmail.com

### Author

Serena Wang

## Installation

As some of the styling code might use deprecated dependencies (e.g., `makeStyles`), please install the project using the following command:

```bash
npm i --legacy-peer-deps

```

<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/AntoninoAdornetto/express-pg-template">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Express Typescript Postgres Template</h3>

  <p align="center">
    App configurations I enjoy for a node.js typescript project
    <br />
    <a href="https://github.com/AntoninoAdornetto/express-pg-template"></a>
    <br />
    <br />
    <a href="https://github.com/AntoninoAdornetto/express-pg-template">View Demo</a>
    ·
    <a href="https://github.com/AntoninoAdornetto/express-pg-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/AntoninoAdornetto/express-pg-template/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

This template includes configurations that I personally enjoy for Express, Postgres, typescript, eslint and Jest. Bootstrapping an application in the past was very time consuming for me so I created a template that hopefully other developers find useful.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Postgresql](https://postgres.org/)

## Getting Started

Not much to say with getting started aside from having Nodejs, postgres installed. I'm assuming if your reading this that you already do.

### Prerequisites

Nodejs, postgres

### Installation

1. Clone the repo (https)
   ```sh
   git clone https://github.com/AntoninoAdornetto/express-pg-template.git
   ```
2. OR - Clone the rep (SSH)
   ```sh
   git clone git@github.com:AntoninoAdornetto/express-pg-template.git
   ```
3. Install packages

   ```sh
   npm i
   ```

4. Create env file, and copy vars from .env-example to .env
   ```sh
   touch .env
   ```
5. Fill out the .env file with your ports and postgres credentials
   ```sh
   NODE_ENV=development
   PORT=
   DB_USER=
   DB_PASS=
   DB=
   DB_HOST=
   DB_PORT=
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

Starter template for node.js project. Add your controllers, routers, postgres queries and tests.

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

This is a similar to santiq's bulletproof-nodejs template. I created this one based off his but with my own features that I enjoy. Thank you for the guidance on great architecture! Link to his repo is attached

- [santiq/bulletproof-nodejs](https://github.com/santiq/bulletproof-nodejs)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

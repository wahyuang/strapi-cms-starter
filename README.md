<div align="center">
    <h2>Strapi CMS Starter</h2>
    <p>A simple starter to start your first headless cms.</p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a guide on setting up a Strapi CMS instance using Docker and PostgreSQL. Strapi is an open-source headless CMS that allows you to build APIs and manage content easily. Docker is used to containerize the application, making it portable and easy to deploy. PostgreSQL is a powerful, open-source relational database management system that provides robust data storage and management capabilities.

## Features

- Easy setup of Strapi CMS using Docker and PostgreSQL
- Seamless containerization with Docker
- Reliable data storage and management with PostgreSQL

## Requirements

Before getting started, ensure that you have the following requirements installed:

- Docker

## Installation

To install and set up the Strapi CMS instance with Docker and PostgreSQL, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/wahyuang/strapi-cms-starter.git
   ```

2. Create a `.env` file and set the following environment variables:

   ```shell
   NODE_ENV=development

   ## app keys and secret settings
   PUBLIC_URL=http://localhost:1337
   JWT_SECRET=your_jwt_secret
   ADMIN_JWT_SECRET=your_admin_secret
   APP_KEYS=your_app_key

   ## database settings
   DATABASE_NAME=strapi_db
   DATABASE_USERNAME=strapi_user
   DATABASE_PASSWORD=your_password

   ## smtp settings
   SMTP_HOST=your_smtp_host
   SMTP_PORT=1234
   SMTP_USER=your_smtp_user
   SMTP_PASSWORD=your_smtp_password
   ```

   Tips: you can generate your secret by run the code below on your terminal.

   ```shell
   openssl rand -base64 32
   ```

3. Run docker-compose for development:

   ```shell
   docker-compose -f docker-compose.dev.yml up -d
   ```

4. Access the Strapi CMS at `http://localhost:1337` in your web browser.

## Usage

Once the Strapi CMS instance is up and running, you can start managing your content using the Strapi administration panel. Use the following steps as a guide:

1. Open your web browser and navigate to `http://localhost:1337`.
2. Create an admin account by providing the necessary details.
3. Log in to the Strapi administration panel using your admin credentials.
4. Configure and manage your content types, roles, permissions, and other settings as needed.

For detailed information on using Strapi CMS, refer to the official [Strapi documentation](https://strapi.io/documentation).

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing the changes you made.

## License

This project is licensed under the [MIT License](LICENSE).

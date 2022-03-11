
# Privacy Dynamics
This is a [gridsome](https://gridsome.org/) application powered by [Vue.js](https://vuejs.org/), [GraphQL](https://graphql.org/), [Netlify CMS](https://www.netlifycms.org/) & [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

#### Node.js

You will need a recent version of Node.js to start, run and build the application. Gridsome requires Node.js (v8.3+).

#### [Yarn](https://yarnpkg.com/) or NPM

A Node package manager is required to install and update the dependencies. This project has been set up using Yarn.


### Install the dependencies

`$ yarn`

### Run locally

`$ gridsome develop` to start a local dev server at `[http://localhost:8080](http://localhost:8080)`

  

## Content Management

The CMS is located at `[http://localhost:8080/admin#/](http://localhost:8080/admin#/)` and the authentication is via Github. On the CMS one can create, update or delete pages, categories, and resources. The General settings like the logo can also be edited via the admin.

The CMS uses GitHub for storage so if developing locally either use a local repository or sync with the remote to make sure that the content is updated.

The CMS content is stored under `/site/` as `.md` files
`/site/pages/` - Content for the individual page
`/site/resources/` - Content for the resources
`/site/categories/` - Content for the resources categories
`/site/settings` - General settings

The CMS config file is a `.yml` file at `src/admin/config.yml`

This file contains the configuration for the **backend**, **media**, **public folder**, and **collections** (pages, resources, categories, settings)

## Hosting

The application is hosted on [Netlify](https://www.netlify.com/) with the default CI/CD setup to deploy the main branch to `production`.

## Deployment
To deploy an update, merge the changes into the main branch and the deployment will kick off automatically. The progress and state of the depolyment is accesible via Netilify `https://app.netlify.com/teams/${team}/builds/`

# Resources

[https://gridsome.org/docs/](https://gridsome.org/docs/)

[https://www.netlifycms.org/docs/intro/](https://www.netlifycms.org/docs/intro/)

[https://v2.vuejs.org/v2/guide/](https://v2.vuejs.org/v2/guide/)

[https://tailwindcss.com/](https://tailwindcss.com/)

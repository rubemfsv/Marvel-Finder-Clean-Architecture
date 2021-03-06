# Welcome to Marvel Finder Clean Architecture

Deploy link: https://admiring-hamilton-9d112d.netlify.app/

## Proposal

It is an application to search for information about Marvel's heroes, to be able to see their basic infos in a table. You can also view information about specific heroes after click in the table. This project was built using clean architecture and clean code priciples.

# :pushpin: Sumary

- :construction_worker: [Installation](#:construction_worker:-instalação)
- :open_file_folder: [Architecture](#:open_file_folder:-diretórios)

# :construction_worker: Installation

**You must have [NodeJS](https://nodejs.org/) (>= 10.13.0) and [Yarn](https://yarnpkg.com/) installed, and then:**

`git clone https://github.com/rubemfsv/Marvel-Finder-Clean-Architecture.git`

First step:

`cd Marvel-Finder-Clean-Architecture` - to access the project folder

Second step:

`yarn` - to install dependencies

Third step:

`yarn dev` - to start the project

## :open_file_folder: Architecture

```
src/
  data/
    protocols/
    test/
    usecases/
  domain/
    errors/
    models/
    test/
    usecases/
  infra/
    http/
    test/
  main/
    config/
    factories/
      http/
      pages/
      usecases/
    routes/
    scripts/
    index.tsx
  presentation/
    components/
    pages/
    styles/
    utils/
```

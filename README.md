## Description

<!-- This repository is part of my article on Medium:  
[NestJS: Authentication With JWT And Postgres | by Kevin Vogel](https://betterprogramming.pub/nestjs-authentication-with-jwt-and-postgres-50de6341f490) -->
Repository ini merupakan task dari mentor saya mas [Ganjar Gingin](https://github.com/zarszz).

## Project Structure

```lua
.
├── src/
|   ├── api/
|   |    ├── tag/
|   |    ├── todo/
|   |    ├── todotag/
|   |    ├── user/
|   |    └── api.module.ts
|   ├── common/
|   |    ├── envs/
|   |    └── helper/
|   ├── shared/
|   ├── app.controller.ts
|   ├── app.module.ts
|   ├── app.service.ts
|   └── main.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── nest-cli.json
├── .eslintrc.js
├── .prettierrc.js
└── README.md

```

## Description
* `src` : Folder yang berisi source code aplikasi
  * `api/` : Folder yang berisi fungsionalitas untuk API,yang saat ini berisi operasi CRUD untuk `tag`, `todo`, `todotag`, and `user`.
  * `api.module.ts` file yang berfungsi untuk menyatukan modul-modul yang ada pada api,saat ini digunakan untuk membuat helper dan enviroment.
  * `common` : Folder yang berisi kode yang nanti bisa digunakan pada berbagai modul,pada kali ini digunakan untuk menyimpan env dan helper.
  * `shared` : Folder yang dapat dibagkan ke berbagai modul,utilitas, yang saat ini digunakan utuk melakukan koneksi ke database.
  * `app.controller.ts` : file yang merupakan root controller untuk aplikasi.
* `documentation` : Folder yang berisi tentang dokumentasi yang ada pada project ini.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
## License

Nest is [MIT licensed](LICENSE).

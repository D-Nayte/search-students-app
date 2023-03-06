# Live version

## [Click here](https://search-students-app.vercel.app/)

# How to start the server

Inside root directory

```
npm install
npm run dev

```

# Steps

- create a new branch
- update your data
- push your branch
- make a pull request

# How to add your Data

Got to

- `./public/studentImages` and upload your picture
- `./src/lib/studentInformation.js` and enter your data like as in the existing example

```js
{
    firstname: String,
    lastName: String,
    descr: String,
    frontEndPosition: Boolean,
    backEndPosition: Boolean,
    fullstackPosition: Boolean,
    remote: Boolean,
    local: Boolean,
    links: [
      { label: String, url: String },
      { label: String, url: String },
    ],
    email: String,
    image: String || null, //  "null" if you dont want to use a picture
    country: String,
    countryCode: String,
  },

```

NextPY - An open source anime streaming and downloading platform based on [SenPY](https://github.com/FireHead90544/SenPY) written in NextJS + TypeScript

## Getting Started

Currently in development. Run the below command to run it in a development environment.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Currently, the api is being worked upon so only the `/api/*` routes are implemented.

## API Routes

Subjected to changes*

| Route (Status) | Description | Method | Query Parameters |
| :--- | :--: | :--: | ---: |
| `/api/` ✅ | API Homepage | GET | - |
| `/api/anime-search` ✅ | Search for anime | GET | `q` or `query` - Search query |
| `/api/get-anime-episodes` ✅ | Get all episode available for an anime | GET | `id` - Anime ID |
| `/api/get-cookies` ❌ | Get the authentication cookies | GET | `email` - Anitaku Email, `password` - Anitaku Password |
| `/api/get-download-links` ✅ | Get download links for different qualities available for an anime episode | GET | `id` - Anime ID, `ep` - Particular Episode, `auth`, `gogoanime` - Authentication Cookies |


## What's Next?

Next is a JS framework lmao. JK. I'm planning to work on this occassionally. Can't gurantee a smooth development. It's more like I'm working on this since I'm learning NextJS/TS and I plan to finish it at some point of time.
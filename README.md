### COINSHOW - Track your Cyrptocurrency

## Live App

[coin-show.vercel.app](https://coin-show.vercel.app/)

## Developed Using

- Next.js
- ReactJS + TypeScript
- TailwindCSS
- CoinGecko API for data
- Deployed on vercel

## Instructions to run

Clone the project locally and then run the following commands

```
npm install
npm run build
npm start
```

Open your browser and go to 
```
http://localhost:3000/
```

## Features

- Data revalidation (using SWR hook) - every 10 seconds on page or when page comes back to focus.
- User Preference storage (using localstorage and React Context API) - currency and user watchlist
- Search for a coin
- Static rendering of pages

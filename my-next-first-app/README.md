
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


1. add prisma
2. add batter-auth
3. add crud

***Batter-auth and prisma***

# npm install prisma typescript tsx @types/node --save-dev 
# npx prisma init --datasource-provider mongodb 

* create model in [prisma.schema] and configure mongoDB connection string in [.env] run prisma generate
  
# npx prisma generate

* client OR use Database for CRUD add [prisma.js] and configure then use DB

[better-auth]

# npm install better-auth     

* create model in [prisma.schema] and configure Better-auth connection string in [.env] run prisma generate and create and configure [lib/auth.ts]
  
# npx @better-auth/cli generate  
# npx prisma migrate 

* create [auth-client.ts] for use it

# npm run dev
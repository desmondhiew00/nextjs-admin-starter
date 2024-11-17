const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  documents: "src/**/*.{graphql,js,ts,jsx,tsx}",
};

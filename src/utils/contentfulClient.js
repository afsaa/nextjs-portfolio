const contentful = require('contentful');

export const contentfulClient = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CDA_ACCESS_TOKEN,
});

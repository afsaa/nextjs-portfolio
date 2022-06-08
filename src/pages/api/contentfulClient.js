const contentful = require('contentful');

const contentfulClient = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CDA_ACCESS_TOKEN,
});

export default async function getEntry(req, res) {
  const entry = await contentfulClient.getEntry('6mIZi967LZB1ytpguyNOR6');
  res.status(200).json(entry);
}

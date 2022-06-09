import { contentfulClient } from '../../../../utils/contentfulClient';

export default async function getEntry(req, res) {
  const { eid } = req.query;
  const entry = await contentfulClient.getEntry(eid);
  res.status(200).json(entry);
}

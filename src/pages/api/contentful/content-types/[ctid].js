import { contentfulClient } from '../../../../utils/contentfulClient';

export default async function getEntriesByContentType(req, res) {
  const { ctid } = req.query;
  const entries = await contentfulClient.getEntries({
    content_type: ctid,
    include: 5,
    order: 'sys.createdAt',
  });
  res.status(200).json(entries);
}

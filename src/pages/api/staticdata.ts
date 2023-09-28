import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { locale, componentName } = req.query;
    if (!locale || !componentName) {
      return res.status(400).end();
    }
    if (req.method === 'GET') {
      //Find the absolute path of the json directory
      const jsonDirectory = path.join(process.cwd(), `src/locales/${locale}`);
      //Read the json data file data.json
      const fileContents = await fs.readFile(jsonDirectory + `/${componentName}.json`, 'utf8');
      //Return the content of the data file in json format
      return res.status(200).json(JSON.parse(fileContents));
    }
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}

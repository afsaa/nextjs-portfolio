import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { locale, componentName } = req.query;
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), `src/locales/${locale}`);
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + `/${componentName}.json`, 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
}

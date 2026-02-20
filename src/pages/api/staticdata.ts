import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

// Whitelist allowed locales to prevent path traversal
const ALLOWED_LOCALES = ['en-US', 'es'];

// Whitelist allowed component names to prevent path traversal
const ALLOWED_COMPONENTS = [
  'About',
  'Contact',
  'descriptionWithCTA',
  'ExperiencePreview',
  'ExperiencesCard',
  'Footer',
  'Projects',
  'Skill',
  'TopArea',
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { locale, componentName } = req.query;

    // Validate parameters exist
    if (!locale || !componentName) {
      return res.status(400).json({ error: 'Missing locale or componentName parameter' });
    }

    // Ensure parameters are strings (not arrays)
    if (typeof locale !== 'string' || typeof componentName !== 'string') {
      return res.status(400).json({ error: 'Invalid parameter format' });
    }

    // Validate locale is whitelisted
    if (!ALLOWED_LOCALES.includes(locale)) {
      return res.status(400).json({ error: 'Invalid locale' });
    }

    // Validate component name is whitelisted
    if (!ALLOWED_COMPONENTS.includes(componentName)) {
      return res.status(400).json({ error: 'Invalid component name' });
    }

    // Only allow GET requests
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Construct safe file path (no path traversal possible due to whitelisting)
    const jsonDirectory = path.join(process.cwd(), `src/locales/${locale}`);
    const filePath = path.join(jsonDirectory, `${componentName}.json`);

    // Read and return the JSON data
    const fileContents = await fs.readFile(filePath, 'utf8');
    return res.status(200).json(JSON.parse(fileContents));
  } catch (error) {
    console.error('Error in staticdata API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


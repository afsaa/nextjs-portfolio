import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from '@/utils/index';

const DEFAULT_LOCALE = 'en-US';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const CURRENT_LOCAL_COOKIE = 'NEXT_LOCALE';

  if (req.method === 'GET') {
    const currentLocale = req.cookies[CURRENT_LOCAL_COOKIE] || 'en-US';
    return res.status(200).json({ defaultLocale: DEFAULT_LOCALE, currentLocale });
  }

  if (req.method === 'POST') {
    const selectedLocale = req.body.selectedLocale as string | undefined;
    setCookie(res, CURRENT_LOCAL_COOKIE, selectedLocale, { path: '/' });
    res.redirect(302, '/');
    return res.end();
  }

  return res.status(405).end();
}

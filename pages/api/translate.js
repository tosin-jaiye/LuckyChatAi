import { TranslationServiceClient } from '@google-cloud/translate';

// Initialize the Translation Service Client
// Lazy initialization to avoid errors during build time
function getTranslationClient() {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // Use credentials file path
    return new TranslationServiceClient();
  } else if (process.env.GOOGLE_CLOUD_PRIVATE_KEY && process.env.GOOGLE_CLOUD_CLIENT_EMAIL) {
    // Use individual environment variables
    return new TranslationServiceClient({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_CLOUD_PROJECT_ID,
        private_key_id: process.env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLOUD_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLOUD_CLIENT_EMAIL)}`,
        universe_domain: 'googleapis.com'
      }
    });
  } else {
    throw new Error('Google Cloud credentials not configured. Please set GOOGLE_APPLICATION_CREDENTIALS or provide individual credential environment variables.');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  const { text, targetLang = 'en' } = req.body;

  try {
    const client = getTranslationClient();
    // Get project ID from environment variable or client
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID || await client.getProjectId();
    const location = 'global';
    const parent = client.locationPath(projectId, location);

    // Perform the translation and auto-detect the source language
    const [response] = await client.translateText({
      parent,
      contents: [text],
      mimeType: 'text/plain',
      targetLanguageCode: targetLang,
    });

    const detectedSourceLanguage = response.translations[0].detectedLanguageCode;

    res.status(200).json({
      translatedText: response.translations[0].translatedText,
      detectedSourceLanguage: detectedSourceLanguage
    });
  } catch (error) {
    console.error('Error during translation:', error);
    res.status(500).json({ error: 'Failed to translate text' });
  }
}

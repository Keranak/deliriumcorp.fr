// pages/api/my-api.js
import cors from '../../middleware/core';

export default function handler(req:any, res:any) {
  // Utilisez le middleware CORS
  cors(req, res, () => {
    // Votre logique d'API ici
    res.status(200).json({ message: 'Hello World' });
  });
}

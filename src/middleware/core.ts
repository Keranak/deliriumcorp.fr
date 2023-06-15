// middleware/cors.js
import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react'; 



export default function cors(req:any, res:any, next:any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  }
  
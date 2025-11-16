const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

exports.handler = async (event, context) => {
  // Xử lý CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const client = await pool.connect();
    
    // Tạo bảng nếu chưa tồn tại
    await client.query(`
      CREATE TABLE IF NOT EXISTS gratitude_leaves (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        teacher VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        x INTEGER NOT NULL,
        y INTEGER NOT NULL,
        type VARCHAR(50) DEFAULT 'leaf',
        gradient VARCHAR(50) DEFAULT 'gradient-1',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const result = await client.query('SELECT * FROM gratitude_leaves ORDER BY created_at DESC');
    client.release();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(result.rows)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
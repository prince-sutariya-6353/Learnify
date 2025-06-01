// Serverless function for user signup
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    const { name, email, password } = req.body;
    
    // Here you would normally connect to a database
    // For now, we'll just return a success response
    
    return res.status(200).json({
      success: true,
      message: 'Signup successful',
      user: { name, email }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
} 
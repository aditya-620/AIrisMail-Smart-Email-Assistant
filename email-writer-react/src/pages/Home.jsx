import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

function Home() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/email/generate`, {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0120] via-[#050446] to-[#02277e] text-white px-6 py-10">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-12 relative">
        {/* LEFT COLUMN: Text and Features */}
        <div className="flex flex-col justify-center gap-8 lg:w-1/2 z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-left lg:text-left">
            Quick, Smart AI Email <br />
            Response Generator <br />
          </h1>
          <p className="text-lg">
            Imagine always having the right words in customer care and sales. That’s superReply.{' '}
            <span className="font-semibold">Smart Email Response Generator</span> Extension for Gmail and Outlook.
          </p>
          <Link to="/projects">
            <button className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg w-fit transition duration-300">
              <span className="text-xl">📥</span> Install Free Extension
            </button>
          </Link>
          <div className="bg-[#0a1b4f] text-sm text-white p-4 rounded-xl border border-white/10 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🔒</span>
              <span className="font-semibold">Privacy First</span>
            </div>
            <p>
              We take your privacy seriously. <br />
              Your <span className="font-bold">AI-powered email replies</span> are safe, and superReply doesn't store them on our servers.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Email Form */}
        <div className="bg-white p-6 rounded-xl shadow-xl w-full lg:w-1/2 text-black flex flex-col justify-center z-20">
          <Typography variant="body2" sx={{ color: 'red', mb: 2, fontWeight: 'bold' }}>
    Note: The website is hosted on a free platform, so the server takes around 50 seconds to start. Please wait. Sorry for the inconvenience.
  </Typography>
          <Box>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              label="Original Email Content"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Tone (Optional)</InputLabel>
              <Select
                value={tone}
                label="Tone (Optional)"
                onChange={(e) => setTone(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              fullWidth
            >
              {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
            </Button>
          </Box>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {generatedReply && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply}
                inputProps={{ readOnly: true }}
              />
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

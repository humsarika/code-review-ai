import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor';
import ReviewOutput from '../components/ReviewOutput';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';
import { getReview } from '../services/api';


const Home = () => {
    const [code, setCode] = useState('print("Hello From Sarika")');
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleClearReview = () => {
  setReview('');
};
     useEffect(() => {
    const pingServer = async () => {
      try {
        await axios.get('https://code-review-ai-server.onrender.com/api/ping');
        console.log('Server woke up!');
      } catch (error) {
        console.error('Ping failed:', error);
      }
      console.log("Ping fired");
    };
    console.log("Ping fired");

    pingServer();
  }, []);
    const handleReview = async () => {
        setLoading(true);
        setError('');
        setReview('');
        try {
            const res = await getReview(code);
            setReview(res.data.review);
        } catch (err) {
            console.error('Error fetching review:', err);
            setError('Error while fetching review. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="home" className='home-container'>
            <h2>AI Code Reviewer</h2>
            <h3>Paste your code here</h3>
            <CodeEditor code={code} setCode={setCode} />
            <Button onClick={handleReview} text="Get AI Review" />
            
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {
                review && <ReviewOutput review={review} onClear={handleClearReview} />

            }
            
            
            
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
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
        <div className='home-container'>
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

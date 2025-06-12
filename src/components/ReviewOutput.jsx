import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReviewOutput = ({ review, onClear }) => {
    return (
        <div className="review-output">
            <ReactMarkdown>{review}</ReactMarkdown>
            {review && (
                <>
                    <button
                        className="copy-btn"
                        onClick={() => {
                            navigator.clipboard.writeText(review);
                            alert("Review copied to clipboard!"); // Optional: Toast dal sakti hai
                        }}
                    >
                        Copy Review
                    </button>
                    <button onClick={onClear}>Clear Review</button>
                </>

            )}
        </div>
    );
};

export default ReviewOutput;

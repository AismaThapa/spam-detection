// Analyzer.js
import React, { useState, useEffect } from 'react';

export default function Analyzer({ emailContent }) {
  const [content, setContent] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    // Load passed email content when component mounts
    setContent(emailContent || '');
  }, [emailContent]);

  const handleAnalyze = () => {
    if (!content.trim()) {
      setAnalysisResult(null);
    } else {
      setAnalysisResult({
        score: Math.floor(Math.random() * 100),
        isSpam:
          content.toLowerCase().includes('free') ||
          content.toLowerCase().includes('offer') ||
          content.toLowerCase().includes('click here')
      });
    }
  };

  return (
    <div id="analyzer" style={styles.container}>
      <h1 style={styles.header}>Email Spam Analyzer</h1>
      <p style={styles.subText}>
        Paste your email content below and get instant spam analysis results
      </p>

      <div style={styles.panels}>
        {/* Left Panel - Input */}
        <div style={styles.leftPanel}>
          <h2 style={styles.panelTitle}>📧 Email Content</h2>
          <textarea
            style={styles.textarea}
            rows={12}
            placeholder="Paste your email content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div style={styles.footer}>
            <span>{content.length} characters</span>
            <button style={styles.button} onClick={handleAnalyze}>
              🔄 Analyze Email
            </button>
          </div>
        </div>

        {/* Right Panel - Result */}
        <div style={styles.rightPanel}>
          {analysisResult ? (
            <div style={{ textAlign: 'center' }}>
              <h3>Analysis Result</h3>
              <p>Spam Score: {analysisResult.score}/100</p>
              <p style={{ color: analysisResult.isSpam ? 'red' : 'green' }}>
                {analysisResult.isSpam ? '⚠️ Likely Spam' : '✅ Not Spam'}
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#666' }}>
              <p style={{ fontSize: '2rem' }}>⚠️</p>
              <p>Enter email content and click "Analyze Email" to see results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 💅 Inline styling
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#eef3ff',
    minHeight: '80vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '0.5rem'
  },
  subText: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1rem',
    color: '#444'
  },
  panels: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  leftPanel: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  },
  panelTitle: {
    marginBottom: '0.5rem'
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    maxHeight: '300px',  
    boxSizing: 'border-box'
  },
  footer: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#5c7cfa',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  rightPanel: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    width: '100%',
    maxWidth: '500px',
    minHeight: '250px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

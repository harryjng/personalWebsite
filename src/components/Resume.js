import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-page">
      {/* Navigation bar for the resume page */}
      <nav className="resume-nav">
        <Link 
          to="/" 
          className="back-link group/link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none mr-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Portfolio
        </Link>
        
        <div className="resume-actions">
          <a 
            href="/Harry_Jung_ResumeCopy.pdf" 
            download="Harry_Jung_Resume.pdf"
            className="download-link group/link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-y-1 motion-reduce:transition-none mr-1"
              aria-hidden="true"
            >
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03L10.75 11.364V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Download PDF
          </a>
          
          <a 
            href="/Harry_Jung_ResumeCopy.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="open-link group/link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none mr-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
            Open in New Tab
          </a>
        </div>
      </nav>

      {/* Resume content */}
      <div className="resume-content">
        <div className="resume-header">
          <h1 className="resume-title">Harry Jung - Resume</h1>
          <p className="resume-subtitle">Software Engineer</p>
        </div>
        
        <div className="pdf-container">
          <iframe
            src="/Harry_Jung_ResumeCopy.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            title="Harry Jung Resume"
            className="pdf-viewer"
          >
            <p className="pdf-fallback">
              Your browser doesn't support PDF viewing. 
              <a 
                href="/Harry_Jung_ResumeCopy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fallback-link"
              >
                Click here to open the PDF in a new tab
              </a>
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const ChatComponent = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '97vh',
    width: '100%',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginTop: '8rem',
  };

  const messagesContainerStyle = {
    flex: 1,
    overflowY: 'auto',
    borderRadius: '3rem',
    backgroundColor: '#e2e8f0',
    padding: '3.2rem',
    color: '#1f2937',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    textAlign: 'left',
    width: '100%', // Center content
    maxWidth: '50rem', // Max width for better responsiveness
  };

  const messageStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem', // Reduced margin
  };

  const messageContentStyle = {
    backgroundColor: '#f9fafb',
    borderRadius: '2.6rem',
    padding: '0.75rem', // Reduced padding
    maxWidth: '32rem',
    minHeight: '85px',
  };

  const messageContentStyleDark = {
    backgroundColor: '#1f2937',
    color: '#d1d5db',
  };

  const messageImageStyle = {
    marginRight: '0.5rem',
    height: '2rem',
    width: '2rem',
    borderRadius: '9999px',
  };

  const buttonStyle = {
    marginRight: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    color: '#6b7280',
    cursor: 'pointer',
    transition: 'color 0.2s ease', // Smooth transition
  };

  const buttonStyleHover = {
    color: '#3b82f6',
  };

  const inputContainerStyle = {
    marginTop: '0.5rem',
    width: '90%', // Center input container
    maxWidth: '40rem', // Max width for better responsiveness
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const textareaStyle = {
    width: '100%',
    resize: 'none',
    borderRadius: '1rem',
    backgroundColor: '#e2e8f0',
    padding: '0.75rem', // Reduced padding
    paddingLeft: '2.5rem',
    paddingRight: '5rem',
    color: '#1f2937',
    border: 'none',
    outline: 'none',
    boxShadow: 'inset 0 0 0 2px transparent',
  };

  const textareaStyleDark = {
    backgroundColor: '#1f2937',
    color: '#d1d5db',
  };

  const sendButtonStyle = {
    borderRadius: '2.6rem',
    backgroundColor: '#3b82f6',
    padding: '0.5rem 1rem',
    color: '#f1f5f9',
    fontSize: '0.875rem',
    cursor: 'pointer',
    border: 'none', // Remove border
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add subtle shadow
    transition: 'background-color 0.2s ease', // Smooth transition
    marginLeft: 'auto', // Move button to the end
  };

  const srOnlyButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '0.75rem',
    color: '#6b7280',
    cursor: 'pointer',
    borderRadius: '2.6rem', // Rounder appearance
    backgroundColor: '#f1f5f9', // Softer background
    border: '2px solid #d1d5db', // Thicker border
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'background-color 0.2s ease, border-color 0.2s ease', // Smooth transitions
  };

  return (
    <div style={containerStyle}>
      <div style={messagesContainerStyle}>
        <div style={messageStyle}>
          <img
            src="https://dummyimage.com/128x128/363536/ffffff&text=J"
            alt="User"
            style={messageImageStyle}
          />
          <div style={messageContentStyle}>
            <p>Explain quantum computing in simple terms</p>
          </div>
        </div>
        <div style={{ ...messageStyle, flexDirection: 'row-reverse' }}>
          <img
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
            alt="Assistant"
            style={{ ...messageImageStyle, marginRight: 0, marginLeft: '0.5rem' }}
          />
          <div style={{ ...messageContentStyle, ...messageContentStyleDark }}>
            <p>
              Certainly! Quantum computing is a new type of computing that relies on
              the principles of quantum physics. Traditional computers, like the one
              you might be using right now, use bits to store and process
              information. These bits can represent either a 0 or a 1. In contrast,
              quantum computers use quantum bits, or qubits.<br /><br />
              Unlike bits, qubits can represent not only a 0 or a 1 but also a
              superposition of both states simultaneously. This means that a qubit
              can be in multiple states at once, which allows quantum computers to
              perform certain calculations much faster and more efficiently.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginRight: '0.5rem' }}>
            <button style={buttonStyle} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '1.25rem', width: '1.25rem' }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>
            </button>
            <button style={buttonStyle} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '1.25rem', width: '1.25rem' }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
              </svg>
            </button>
            <button style={buttonStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '1.25rem', width: '1.25rem' }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
              </svg>
            </button>
          </div>
        </div>
        <div style={messageStyle}>
          <img
            src="https://dummyimage.com/128x128/363536/ffffff&text=J"
            alt="User"
            style={messageImageStyle}
          />
          <div style={messageContentStyle}>
            <p>What are three great applications of quantum computing?</p>
          </div>
        </div>
        <div style={{ ...messageStyle, flexDirection: 'row-reverse' }}>
          <img
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
            alt="Assistant"
            style={{ ...messageImageStyle, marginRight: 0, marginLeft: '0.5rem' }}
          />
          <div style={{ ...messageContentStyle, ...messageContentStyleDark }}>
            <p>
              Three great applications of quantum computing are: Optimization of
              complex problems, Drug Discovery, and Cryptography.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginRight: '0.5rem' }}>
            <button style={buttonStyle} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '1.25rem', width: '1.25rem' }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>
            </button>
            <button style={buttonStyle} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '1.25rem', width: '1.25rem' }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
              </svg>
            </button>
            <button style={buttonStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '1.25rem', width: '1.25rem' }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <form style={inputContainerStyle}>
        <label htmlFor="chat-input" className="sr-only">
        
        </label>
        <button
          type="button"
          style={srOnlyButtonStyle}
        >
          <svg
            aria-hidden="true"
            style={{ height: '1.25rem', width: '1.25rem' }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
            <path d="M5 10a7 7 0 0 0 14 0"></path>
            <path d="M8 21l8 0"></path>
            <path d="M12 17l0 4"></path>
          </svg>
          <span className="sr-only"> voice input</span>
        </button>
        <textarea
          id="chat-input"
          style={{ ...textareaStyle, ...textareaStyleDark }}
          placeholder="Enter your prompt"
          rows="1"
          required
        ></textarea>
        <button
          type="submit"
          style={sendButtonStyle}
        >
           <span className="sr-only">Send</span>
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
// Import React and any necessary libraries
import React from 'react';

// Functional Component for the About Page
const About = () => {
    return (
        <div style={styles.container}>
            {/* Heading */}
            <h1 style={styles.heading}>About VisionAgent</h1>

            {/* Description */}
            <p style={styles.description}>
                VisionAgent has the desire to improve online accessibility in the most productive way possible. While browsing websites, we noticed that users with disabilities face significant challenges navigating and consuming content. Our mission was to create a tool that bridges this gap and facilitates a smoother online experience for everyone.
            </p>

            {/* Subheading */}
            <h2 style={styles.subheading}>Our Team</h2>

            {/* Team Photo */}
            <img 
                src="/HackathonTeamPhoto.jpg" 
                alt="Hackathon team: Andhy, Melissa, David, Giovanni" 
                style={styles.teamPhoto}
            />

            {/* Team Members */}
            <p style={styles.teamMembers}>
                Team members: Andhy Gonzalez, Melissa Garcia, David Jacquet, Giovanni Rodriguez
            </p>

            {/* GitHub Link */}
            <a 
                href="https://github.com/mel-garcia/visionagent" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.link}
            >
                More information found on our GitHub
            </a>
        </div>
    );
};

// Inline styles for the component
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2.5em',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2em',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '30px',
    },
    subheading: {
        fontSize: '2em',
        color: '#444',
        marginBottom: '15px',
    },
    teamPhoto: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '20px',
    },
    teamMembers: {
        fontSize: '1.1em',
        color: '#555',
        marginBottom: '20px',
    },
    link: {
        fontSize: '1.1em',
        color: '#0066cc',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default About;
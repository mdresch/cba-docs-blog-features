// components/landing/features-section.js
'use client';
import './features-section.module.css'; // Import your CSS file

export const FeaturesSection = ({ features }) => {
  if (!features || features.length === 0) {
    return <p>No features available.</p>;
  }

  return (
    <div className="features-container"> {/* Container for all cards */}
      <h2>Features</h2>
      <div className="card-grid"> {/* Grid or flexbox for layout */}
        {features.map((feature, index) => (
          <div key={index} className="feature-card"> {/* Individual card */}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            {/* Add any other elements you want in the card */}
          </div>
        ))}
      </div>
    </div>
  );
};

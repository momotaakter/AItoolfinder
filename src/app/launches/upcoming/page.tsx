import React from 'react'
import TitleSection from './../../../components/common/TitleSection';
import './style.css'

function page() {
  return (
    <div>

    <TitleSection
      title="🚀 Upcoming AI Tool Launches"
      paragraph="Get a sneak peek at the AI tools launching soon. Stay ahead of the curve and be prepared for the next wave of innovation."
    ></TitleSection>

<div className="card mx-auto mb-20">
    {/* Desktop: Coming Soon on top */}

    <button className="coming-soon-btn desktop">📅 Coming Soon</button>

    <div className="header">
      <div className="logo-section">
        <h1 className="title">Renovy</h1>
        <div className="badge">RE</div>
      </div>
      <div className="buttons-section">
        <button className="btn"><span className="btn-icon">🔔</span> Get Notified</button>
      </div>
    </div>

    <p className="description">
     
Skwad is a privacy-first money management tool designed to assist users in understanding and tracking their spending. The unique proposition of Skwad is that it helps users maintain financial clarity without the need to link or share their bank login details with a third-party application. Instead, users receive a dedicated Skwad email address where they can direct spending alerts from their banks or credit card providers which are then quickly converted into categorized transactions. Skwad facilitates the uploading of old transactions for a comprehensive financial overview. Notably, Skwad alerts users about out-of-place transactions or changes in spending patterns, helping in the early identification and mitigation of financial risks. Another feature is the tracking of bills and subscriptions, with provided notifications for upcoming payments and fee changes. The Skwad app allows the sharing of specific transactions with a trusted group (Skwad) and offers functionalities such as spend calendar, transaction enhancement with receipts, synchronization to Google Sheets, and transaction splitting. In terms of security and privacy, only transaction information is accessed by Skwad, with no requirement or exposure of sensitive bank details.

    </p>

    <div className="footer-info">
      <span>AI for Social Media</span>
      <span>0 subscribers</span>
    </div>

    {/* Mobile: Coming Soon below description */}
    <button className="coming-soon-btn mobile">📅 Coming Soon</button>
  </div>










<div className="card mx-auto mb-10">
    {/* Desktop: Coming Soon on top */}

    <button className="coming-soon-btn desktop">📅 Coming Soon</button>

    <div className="header">
      <div className="logo-section">
        <h1 className="title">Renovy</h1>
        <div className="badge">RE</div>
      </div>
      <div className="buttons-section">
        <button className="btn"><span className="btn-icon">🔔</span> Get Notified</button>
      </div>
    </div>

    <p className="description">
      AI Interior Design - Renovy is an application that can be accessed on devices such as iPhone, iPad, and iPod touch. The tool utilizes artificial intelligence to aid users in interior design. It allows users to experiment with different design ideas, providing instant feedback and adjustments based on AI-driven algorithms. Ideal for both professional interior designers and individuals planning home improvements, the app aims to streamline the planning process. The application can be downloaded and installed from the App Store. It is compatible with devices running on iOS, offering an intuitive, user-friendly interface to interact with the AI-powered features.
    </p>

    <div className="footer-info">
      <span>AI for Social Media</span>
      <span>0 subscribers</span>
    </div>

    {/* Mobile: Coming Soon below description */}
    <button className="coming-soon-btn mobile">📅 Coming Soon</button>
  </div>









    </div>
  )
}

export default page
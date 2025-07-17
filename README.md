# AIrisMail – Smart Email Assistant

AIrisMail is a smart email assistant that helps users generate professional, context-aware email replies using AI. The project consists of three main components:

- **email-writer-ext**: A browser extension that integrates with Gmail to provide AI-powered reply suggestions directly in the compose window.
- **email-writer-react**: A React web application for generating email replies using the AI backend.
- **email-writer-sb**: A Spring Boot backend service that communicates with the Gemini AI API to generate email replies.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
  - [Frontend Setup (React App)](#frontend-setup-react-app)
  - [Browser Extension Setup](#browser-extension-setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Development](#development)
- [License](#license)

---

## Features

- **AI-Powered Email Reply Generation**: Generate professional, casual, or friendly replies based on the original email content.
- **Gmail Integration**: Use the browser extension to generate replies directly in Gmail.
- **Web Interface**: Use the React app to generate replies from any device.
- **Fast & Secure**: Backend powered by Spring Boot and Gemini AI API.

---

## Architecture
 [Browser Extension]
⬌ [Spring Boot Backend]
⬌ [React Vite Frontend]


- **email-writer-ext**: Injects an "AI Reply" button into Gmail's compose window. On click, it sends the email content to the backend and inserts the generated reply.
- **email-writer-react**: Provides a web UI for users to input email content and select tone, then displays the generated reply.
- **email-writer-sb**: Exposes a REST API endpoint (`/api/email/generate`) that receives email content and tone, builds a prompt, calls Gemini AI, and returns the generated reply.

---

## Getting Started

### Prerequisites

- npm or yarn
- Java 17+ (for Spring Boot)
- Maven (for Spring Boot)
- Chrome or Chromium-based browser (for extension)

---

### Backend Setup (Spring Boot)

1. **Navigate to the backend directory:**
   ```sh
   cd email-writer-sb
    ```
2. **Configure API Keys:**
- Copy .env.example to .env and set your Gemini API key and URL.
- Alternatively, set gemini.api.url and gemini.api.key in application.properties.

3. **Build and run the backend:**
    ```sh
    ./mvnw spring-boot:run
    ```
    The backend will start on http://localhost:8080.

---

### Frontend Setup (React App)

1. Navigate to the React app directory:
    ```sh
   cd email-writer-react
    ```
2. Install dependencies:
    ```sh
    cd email-writer-react
    ```
3. Start the development server:
    ```sh
    cd email-writer-react
    ```
The app will be available at http://localhost:5173 (default Vite port).

---
## Browser Extension Setup

Follow the steps below to set up and use the browser extension:

### Installation

1. Navigate to the `email-writer-ext` directory on your local machine.
    ```sh
    cd email-writer-ext
2. Load the extension in **Google Chrome**:

   - Open Chrome and go to: `chrome://extensions/`
   - Enable **Developer mode** (toggle switch in the top-right corner).
   - Click on **"Load unpacked"**.
   - Select the `email-writer-ext` folder.

### Usage

1. Open **Gmail** in your browser.
2. Click on **Compose** to start writing a new email.
3. You will see an **"AI Reply"** button in the compose toolbar.
4. Click the button to generate a smart AI-powered response to the email you're replying to.

>  Make sure the backend server and Gemini AI integration are properly running for full functionality.
---

## Usage

### React Web App

1. Enter the **original email content** in the input box.
2. Optionally, select a **tone**:
   - Professional
   - Casual
   - Friendly
3. Click **"Generate Reply"**.
4. Copy the generated reply to your clipboard.

### Browser Extension

1. Open **Gmail** and **compose** or **reply** to an email.
2. Click the **"AI Reply"** button in the Gmail compose toolbar.
3. The AI-generated reply will be **inserted automatically** into the compose box.

---

## Configuration

### Backend (`email-writer-sb`)

Set the following environment variables or `application.properties`:

```properties
gemini.api.url=YOUR_GEMINI_API_ENDPOINT
gemini.api.key=YOUR_GEMINI_API_KEY
```
### Frontend (`email-writer-react`)

By default, the frontend expects the backend at `http://localhost:8080`. Update the API URL in `src/App.jsx` if needed.

### Extension (`email-writer-ext`)

The extension sends requests to `http://localhost:8080/api/email/generate`. Update the URL in `content.js` if your backend runs elsewhere.

---
## Development

- **Backend:** Java, Spring Boot, Maven
- **Frontend:** React, Vite, Material UI, Axios
- **Extension:** Vanilla JS, MutationObserver, Gmail DOM integration
---
## Licence

This project is licensed under the MIT License.
---
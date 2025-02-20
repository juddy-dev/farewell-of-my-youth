# 🚀 Angular 17 + Firebase (Realtime Database)

→→→ [CLICK HERE TO TEST](https://juddy-dev.github.io/farewell-of-my-youth/)

This project is a web application built with **Angular** and **Firebase** using **Realtime Database** for authentication.

For my 30th birthday I had a book list party and I didn't like the gift list apps that were available, I just wanted a simple page where my guests could check off the books they bought.

## 📌 Features

- Developed with Angular 17
- Realtime Database with Firebase
- Responsive

## Pre-requisites

- **Node.js** (version 18 o higher) [Download Node](https://nodejs.org/).
- An account in **Firebase** with a realtime database configured  → [Firebase - Realtime](https://firebase.google.com/docs/database?hl=es-419)

## Installation

Follow these steps to install the project in your local environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/juddy-dev/farewell-of-my-youth.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Modify the files `environment` inside the folder `environments` with the information provide for firebase
```json
    {
        apiKey: "YOUR API KEY",
        authDomain: "YOUR DOMAIN",
        databaseURL: "YOUR DATABASE URL",
        projectId: "YOUR PROJECT ID",
        storageBucket: "YOUR STORAGE BUCKET",
        messagingSenderId: "YOUR MESSAGING SENDER ID",
        appId: "YOUR APP ID",
        measurementId: "YOUR MEASUREMENT ID"
    }
  
```
4. Build the development:

   ```bash
   npm run build
   ```
6. Run the development server:

   ```bash
   npm run start
   ```
7. Open http://localhost:4200 to view the project in your browser.

## Usage

Once the server is running, you can:

- Navigate through the different pages of the app.
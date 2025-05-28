# 👟 LaceVista

**LaceVista** is a full-stack e-commerce platform for shoes, built using modern web technologies. It features a dynamic product catalog, responsive design, integrated chatbot assistant, and follows the MVC architecture for maintainability and scalability.

---

## Running the App with Docker & MongoDB Atlas
This project is Dockerized and connects to MongoDB Atlas using an environment variable.

## 🧩 Prerequisites
- Docker installed

- A .env file in the root of the project with your MongoDB Atlas URI (optional)

1. Create a .env File (optional if you don't want to run database)
Create a .env file in the root of your project and add the following:

MONGO_URI="your mongo uri"

 2. Build the Docker Image

 docker build -t lacevista-app .

 3. Run the Docker Container with Env File

 docker run --env-file .env -p 3000:3000 lacevista-app

- env-file .env loads environment variables like MONGO_URI

- p 3000:3000 maps the container port to your local machine

 4. Access the App
Once the container is running, open your browser:

http://localhost:3000

5. Check the /api/student Route You can test the API route using a browser or a tool like Postman:

GET http://localhost:3000/api/student

✅ Expected Output:

{ "name": "Syed Muzzammil Hassan Abedi", "studentId": "225039695" }

6. Stop the Container

docker ps        # Get container ID
docker stop <container_id>




## 🚀 Features

### 🖥️ Frontend (EJS + Materialize)

- Fully responsive UI with elegant design
- Smooth background transitions with auto-cycling hero images
- Integrated chatbot assistant (LaceBot)

#### Pages Included:

- Home
- Shop
- Products (admin only)
- About Us
- Login
- Signup
- Cart
- Checkout
- Men Info - Sneakers
- Men Info - Sports
- Men Info - Formals
- Women Heels Page
- Sneakers Page
- Flats Page

---

## 🔐 Authentication

- Signup and login functionality  
- Email-based OTP verification field added during registration

---

## 🛒 Checkout Module

- Checkout form includes:
  - First Name, Last Name
  - Email, Mobile Number
  - Shoe Measurements:
    - Length (cm)
    - Width (cm)
    - Arch (cm)
- All fields validated on the client-side before submission

---

## 🛒 Cart Module

- Cart enables user to add any product from shop to cart
- Each card in cart page shows 
  - Name of the product
  - Color of the product
  - Price of the product
  - Size of the product
  - Real time Stock update


## 🤖 Chatbot Assistant (LaceBot)

- Responds to user queries like:
  - "Shipping"
  - "Returns"
  - "Shoes under $150"

---

## 🧾 Admin Products Panel

- Admin dashboard to view all products on the website
- Admin can add/ edit or delete any product and its details
- Admin can also update the prices of all products in one click
- Columns include:
  - Name
  - Description
  - Price
  - Stock
  - Actions(edit/delete)
---
## 🧾 Admin Order Panel

- Admin dashboard to view submitted orders
- Columns include:
  - Item Name/Number
  - Quantity
  - Total Amount

---

## 📂 Project Structure (MVC)

- 'models' - Contains schemas of different collection of Database
- `views/` – EJS templates for UI rendering
- `controllers/` – Application logic (chatbot, orders, etc.)
- `routes/` – Navigation and API endpoints
- `public/` – Static assets: stylesheets, scripts, images
- `app.js` – Main server file

---

## ⚙️ Tech Stack

### Frontend:
- EJS
- Materialize CSS
- JavaScript

### Backend:
- Node.js
- Express.js
- Socket.io

### Database:
- MongoDB

### Utilities & Tools:
- express-session
- Git & GitHub (Version Control)
- Trello (Project Management)

---

## 🧪 Testing

This project includes comprehensive testing across both **end-to-end (E2E) functionality** and **automated UI workflows** using **Mocha**, **Chai**, and **Cypress**.

---

### ✅ End-to-End Testing with Mocha & Chai

Mocha and Chai were used to validate the complete backend and controller logic.

These tools support behavior-driven development (BDD) and allow writing structured test suites to verify business logic, route responses, and controller operations. The tests were run in a Node.js environment and covered all core user scenarios like registration, login, and form submission, ensuring accurate backend behavior and security handling.

#### 🧪 Test Coverage:

- ✅ User Authentication (Signup, Login)
- ✅ Admin Order Management
- ✅ Checkout Form Submissions
- ✅ Controller and Route Handling

- ✅ resetInactivityTimeout() – Verifies inactivity timer reset behavior
- ✅ authController – Tests for rendering login/signup views and sendOtp function
- ✅ cartController – Ensures getCart is defined and behaves as expected
- ✅ chatbotController – Confirms handleChat is a valid function
- ✅ Database Utility – Mocks and validates mongoose.connect() call

#### 👨‍🔬 Cypress Tests Written

- ✅ Cart Page – Product interaction and validation
- ✅ Checkout Process – Input validation and form submission
- ✅ Heels Page – Rendering, product listing, add-to-cart
- ✅ Sneakers Page – Rendering, product listing, add-to-cart
- ✅ Flats Page – Rendering, product listing, add-to-cart
- ✅ Men Formals Page – Product load and validation
- ✅ Men Sneakers Page – Product load and validation
- ✅ Men Sports Page – Product load and validation
- ✅ Chatbot Interaction – Text input, reply rendering, popup behavior
- ✅ Login Page – Valid and invalid login attempts
- ✅ Signup Page – Form validation, OTP field display
- ✅ Order Success Page – Confirmation display and order data visibility


---

### ✅ Automated UI Testing with Cypress

Cypress was used to implement automated front-end testing to simulate real user interactions in a browser environment.

Cypress is a next-generation testing tool built specifically for modern web applications. It runs directly in the browser, allowing full control over the DOM, network requests, and browser behavior. For this project, Cypress was used to validate UI workflows such as navigating the site, signing up, logging in, viewing products, completing a checkout, and interacting with the chatbot. Its real-time reloading, time-travel debugging, and in-browser test runner made it ideal for verifying the user experience in a dynamic web interface.

#### 🧪 Test Coverage:

- ✅ Home Page Load & Navigation
- ✅ Signup and Login Flow
- ✅ Product Browsing and Shop Page
- ✅ Checkout Process Validation
- ✅ Admin Dashboard Access
- ✅ Chatbot Interaction Testing (LaceBot)
  



## 🛠️ Setup Instructions

To run the LaceVista application locally, a few simple setup steps are required. These ensure that all necessary dependencies are installed, the application is properly configured, and the development server is running.

### Step 1: Clone the Repository
git clone <https://github.com/Jaykumar677/LaceVista.git>
cd LaceVista

### Step 2: Install Dependencies
npm install

### Step 3: Run the Application
node app.js

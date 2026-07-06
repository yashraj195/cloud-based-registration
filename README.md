# ☁️ Serverless Membership Registration System

![Azure](https://img.shields.io/badge/Azure-Functions-blue?logo=microsoftazure)
![Python](https://img.shields.io/badge/Python-3.10-yellow?logo=python)
![CosmosDB](https://img.shields.io/badge/Azure-CosmosDB-0078D4)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Project Overview

The **Serverless Membership Registration System** is a fully serverless web application developed using Microsoft Azure cloud services.

It enables users to submit membership registration details through a responsive web form. The submitted information is processed by an Azure Function and securely stored in Azure Cosmos DB.

This project demonstrates modern cloud-native application development using a serverless architecture.

---

## 🌐 Live Demo

**Website**

https://happy-cliff-0e189b700.7.azurestaticapps.net

**Azure Function API**

https://contactform-api-yash01-grgkd5d9buhac4ck.centralindia-01.azurewebsites.net/api/MembershipRegister

---

# ✨ Features

- Responsive registration form
- Client-side validation
- Serverless REST API
- Azure Cosmos DB integration
- Automatic unique ID generation
- Timestamp for every registration
- Secure environment variables
- Cross-Origin Resource Sharing (CORS)
- Cloud deployment using Azure
- GitHub integrated deployment

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Python
- Azure Functions

### Database

- Azure Cosmos DB (SQL API)

### Cloud Platform

- Azure Static Web Apps
- Azure Functions
- Azure Storage Account
- Azure Cosmos DB

### Version Control

- Git
- GitHub

---

# 🏗 System Architecture

```
                User
                  │
                  ▼
     Azure Static Web App
                  │
                  ▼
      JavaScript Fetch API
                  │
                  ▼
      Azure Function (Python)
                  │
                  ▼
         Azure Cosmos DB
```

---

# 📂 Project Structure

```
cloud-based-registration/

│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── Azure Function
      │
      ├── function_app.py
      ├── host.json
      ├── requirements.txt
      └── local.settings.json
```

---

# 📷 Screenshots

## Home Page

<img width="1890" height="910" alt="image" src="https://github.com/user-attachments/assets/65d97ef1-e40f-468a-bb38-a70742a71e53" />


---

## Registration Form

<img width="1125" height="815" alt="image" src="https://github.com/user-attachments/assets/f8d675d2-7596-4589-800f-37920de45692" />


---

## Successful Registration

<img width="1882" height="913" alt="image" src="https://github.com/user-attachments/assets/acb51411-20b4-4a93-9d2c-0e2aab534c87" />


---

## Azure Function

<img width="1917" height="816" alt="image" src="https://github.com/user-attachments/assets/7c294052-0785-477a-9da6-2f03909b7661" />


---

## Cosmos DB Data Explorer

<img width="1916" height="866" alt="image" src="https://github.com/user-attachments/assets/78b25c1a-c965-4f0f-91a9-ce3041b27421" />


---

# 🔄 Application Workflow

1. User opens the registration website.

2. User fills the membership form.

3. JavaScript sends a POST request.

4. Azure Function receives the request.

5. Required fields are validated.

6. A unique UUID is generated.

7. Registration data is stored in Cosmos DB.

8. Success response is returned.

9. User receives confirmation.

---

# 📄 API Documentation

## Endpoint

```
POST /api/MembershipRegister
```

---

### Request Body

```json
{
  "name": "John Doe",
  "registration": "2212345678",
  "email": "john@example.com",
  "phone": "9876543210",
  "department": "CSE",
  "year": "3rd Year",
  "skills": "Python, Azure",
  "reason": "Interested in Cloud Computing"
}
```

---

### Success Response

```json
{
  "success": true,
  "message": "Membership registration submitted successfully."
}
```

---

### Error Response

```json
{
  "success": false,
  "message": "Missing required fields"
}
```

---

# 🔐 Security

- Azure Environment Variables
- Cosmos DB Access Keys
- HTTPS Enabled
- CORS Configuration
- No secrets stored in source code

---

# 🚀 Deployment

## Frontend

Azure Static Web Apps

---

## Backend

Azure Function App

---

## Database

Azure Cosmos DB

---



# 📚 Azure Services Used

- Azure Static Web Apps
- Azure Functions
- Azure Cosmos DB
- Azure Storage Account
- Azure Portal

---

# 👨‍💻 Author

**Yash Raj**

B.Tech Computer Science Engineering

Aspiring Software Engineer & Cloud Developer

GitHub

https://github.com/yashraj195

LinkedIn

https://www.linkedin.com/in/yashraj195

---

# ⭐ If you found this project interesting

Please consider giving this repository a ⭐.

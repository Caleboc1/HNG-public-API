HNG12 Public API - Stage 0 Backend Task  

This is a simple public API built for the HNG12 Stage 0 backend task. It returns basic information in JSON format, including:  
- My registered HNG12 email  
- The current datetime in ISO 8601 format  
- The GitHub URL of this project's codebase  

API Endpoint 
Base URL:  
```
https://hng-public-api-s6zt.onrender.com/
```

GET Request  
- Method: `GET`
- Endpoint: `/`

Sample Response
```json
{
  "email": "cakpomughe@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": " https://github.com/Caleboc1/HNG-public-API"
}
```

Getting Started (Local Setup) 

1. Clone the Repository 
```
git clone https://github.com/Caleboc1/HNG-public-API.git
cd HNG-public-API
```

2. Install Dependencies  
```
npm install
```
3. Run the API Locally 
```
node index.js
```
The server will start at:  
```
http://localhost:4000/
```


Deployment
This API is deployed on **Render**.  
You can access it at:  
```
https://hng-public-api-s6zt.onrender.com/
```


Technology Stack 
- Node.js – JavaScript runtime  
- Express.js – Web framework  
- CORS – Cross-Origin Resource Sharing  



Contributing
Feel free to fork this repo and make improvements!  
1. Fork the repo  
2. Create a new branch: `git checkout -b feature-branch`  
3. Commit your changes: `git commit -m "Added feature"`  
4. Push and create a pull request  



Hire Node.js Developers  
Looking for experienced Node.js developers? Check out:  
🔗 [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)  

License
This project is open-source and available under the MIT License.  

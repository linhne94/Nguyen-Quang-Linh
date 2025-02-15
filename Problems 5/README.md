Configuration and the way to run application:

1. Clone the repository:
   - git clone <url-repo>
   - cd <file>
2. Install dependencies:
   - npm i
3. Create a .env file in the root directory and add variables:

PORT = 3000
DB_HOST = 127.0.0.1
DB_USER = db-username
DB_PASS = db-password
DB_NAME = resources

4. Create table in Mysql with this code

CREATE TABLE resources (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

5. Run application:

- npm run dev

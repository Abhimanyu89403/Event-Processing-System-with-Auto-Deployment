-- Step 1: Create the database
CREATE DATABASE eventdb;

-- Step 2: Use the newly created database
USE eventdb;

-- Step 3: Create the events table
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    event_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

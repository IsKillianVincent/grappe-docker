CREATE DATABASE IF NOT EXISTS version_tracker;

USE version_tracker;

CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS versions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    version_number VARCHAR(50) NOT NULL,
    environment ENUM('Production', 'Acceptance') NOT NULL,
    deployment_date DATE NOT NULL,
    status ENUM('Success', 'Failed') NOT NULL,
    FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
);

INSERT INTO applications (name, description) VALUES 
('Dot', 'Description pour l''aplication Dot'),
('Tod', 'Description pour l''aplication Tod');

INSERT INTO versions (application_id, version_number, environment, deployment_date, status) VALUES 
(1, '1.0.0', 'Acceptance', '2023-12-01', 'Success'),
(1, '1.0.0', 'Production', '2023-12-15', 'Success'),
(2, '2.0.0', 'Acceptance', '2024-01-01', 'Failed'),
(2, '2.0.0', 'Acceptance', '2024-01-01', 'Success'),
(2, '2.1.0', 'Production', '2024-01-02', 'Success');
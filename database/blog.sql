use remimichel;
DROP TABLE IF EXISTS commentaire;
DROP TABLE IF EXISTS article;

CREATE TABLE article(
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(200) NOT NULL
);

CREATE TABLE commentaire(
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    id_article VARCHAR(100) NOT NULL,
    CONSTRAINT fk_constraint FOREIGN KEY (id_article) REFERENCES article(id)
);

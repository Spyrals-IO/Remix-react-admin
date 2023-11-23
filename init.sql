-- init.sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  body TEXT
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  name TEXT,
  body TEXT,
  post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT
);

--la table "posts"
INSERT INTO posts (title, body) VALUES
  ('Premier article', 'Contenu du premier article'),
  ('Deuxième article', 'Contenu du deuxième article');

-- la tabe "comments"
INSERT INTO comments (name, body, post_id) VALUES
  ('Commentateur 1', 'Commentaire sur le premier article', 1),
  ('Commentateur 2', 'Commentaire sur le deuxième article', 2);

--la table "users"
INSERT INTO users (username, email) VALUES
  ('utilisateur1', 'utilisateur1@example.com'),
  ('utilisateur2', 'utilisateur2@example.com');

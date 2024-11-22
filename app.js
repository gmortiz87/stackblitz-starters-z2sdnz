const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'supersecret', resave: false, saveUninitialized: true }));

// Rutas
app.use('/', authRoutes);
app.use('/reports', reportRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

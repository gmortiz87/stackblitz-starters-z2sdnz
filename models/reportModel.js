const db = require('./db');

exports.findAll = async () => {
    const [rows] = await db.query('SELECT * FROM reports');
    return rows;
};

exports.create = async (report) => {
    await db.query('INSERT INTO reports SET ?', report);
};

exports.deleteById = async (id) => {
    await db.query('DELETE FROM reports WHERE id = ?', [id]);
};

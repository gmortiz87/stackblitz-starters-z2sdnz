const Report = require('../models/reportModel');

exports.getReports = async (req, res) => {
    const reports = await Report.findAll();
    res.render('viewReports', { reports });
};

exports.uploadReport = async (req, res) => {
    if (req.method === 'GET') {
        res.render('uploadReport');
    } else {
        const { filename, user } = req.body;
        await Report.create({
            filename,
            uploadedBy: req.session.user.username,
            uploadedAt: new Date(),
        });
        res.redirect('/reports');
    }
};

exports.deleteReport = async (req, res) => {
    const { id } = req.params;
    await Report.deleteById(id);
    res.redirect('/reports');
};

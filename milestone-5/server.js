const express = require('express');
const bodyParser = require('body-parser');
const { jsPDF } = require('jspdf');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files (HTML, CSS, JS)

app.post('/generate-resume', (req, res) => {
    const { name, email, skills, experience } = req.body;

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Resume', 105, 20, { align: 'center' });

    doc.setFontSize(16);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Skills: ${skills}`, 20, 60);
    doc.text(`Experience:`, 20, 70);
    doc.text(experience, 20, 80);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
    res.send(doc.output());
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
    
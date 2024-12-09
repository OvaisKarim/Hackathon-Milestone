document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Generate Resume Preview
    const resumePreview = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong><br>${experience.replace(/\n/g, '<br>')}</p>
    `;

    document.getElementById('resumePreview').innerHTML = resumePreview;
    document.getElementById('resumePreview').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'inline-block';

    // PDF Generation Logic
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text(name, 20, 30);
        doc.setFontSize(16);
        doc.text(`Email: ${email}`, 20, 40);
        doc.text(`Skills: ${skills}`, 20, 50);
        doc.text(`Experience:`, 20, 60);
        doc.text(experience, 20, 70);

        doc.save('resume.pdf');
    });
});

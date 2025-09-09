let portfolioData = {};

async function loadData() {
  const res = await fetch('http://localhost:3000/api/all');
  portfolioData = await res.json();
}

function showSection(sectionId) {
  document.getElementById('main-menu').style.display = 'none';
  document.getElementById('detail-view').style.display = 'block';

  // Hide all detail sections
  document.querySelectorAll('.detail-section').forEach(sec => sec.style.display = 'none');

  const section = document.getElementById(sectionId);
  section.style.display = 'block';
  section.innerHTML = getSectionContent(sectionId);
}

function goBack() {
  document.getElementById('detail-view').style.display = 'none';
  document.getElementById('main-menu').style.display = 'grid';
}

function getSectionContent(sectionId) {
  switch(sectionId) {
    case 'about':
  return `<h1 style="font-size:48px;">${portfolioData.about.name}</h1>
          <h3 style="font-size:40px;">${portfolioData.about.role}</h3>
          <p style="font-size:32px;">${portfolioData.about.description}</p>`;

case 'education':
  return `<h1 style="font-size:48px;">Education</h1>
          <p style="font-size:32px;"><strong>${portfolioData.education.degree}</strong> at ${portfolioData.education.institution} (${portfolioData.education.year})</p>
          <p style="font-size:32px;">CGPA: ${portfolioData.education.cgpa}</p>`;

case 'skills':
  return `<h1 style="font-size:48px;">Skills</h1>
          <ul>${portfolioData.skills.map(skill => `<li style="font-size:32px;">${skill}</li>`).join('')}</ul>`;

case 'certificates':
  return `<h1 style="font-size:48px;">Certificates</h1>
          <ul>${portfolioData.certificates.map(cert => `<li style="font-size:32px;"><strong>${cert.title}</strong> – ${cert.institute}<br>${cert.details}</li>`).join('')}</ul>`;

    case 'projects':
  return `<h1 style="font-size:48px;">Projects</h1>
          ${portfolioData.projects.map(proj => `
            <h2 style="font-size:40px; margin-top:20px;">${proj.title}</h2>
            <p style="font-size:32px;">${proj.description}</p>
            <a href="${proj.link}" target="_blank" style="color:white; font-size:32px;">View Project</a>
          `).join('')}`;

    case 'contact':
      return `<h1>Contact</h1>
              <p>Email: ${portfolioData.contact.email}</p>
              <p>Phone: ${portfolioData.contact.phone}</p>
              <p>Languages: ${portfolioData.contact.languages.join(', ')}</p>`;
    default:
      return `<p>No data available</p>`;
  }
}

loadData();

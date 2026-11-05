const CONTACT_EMAIL = 'srisailasya14@gmail.com';

// Add a GitHub or live demo URL to a project to show its buttons. Leave empty to hide them.
const projects = [
  {
    name: 'Ivy Journal',
    category: 'Student Productivity',
    description:
      'A student productivity application featuring tasks, reminders, notes, journaling and vision boards.',
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'ResolveDesk',
    category: 'Customer Support',
    description:
      'A customer support platform designed to remember customer interactions and provide better support experiences.',
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'IdeaPulse',
    category: 'AI and Hackathon',
    description:
      'An AI-powered idea evaluation project and hackathon-winning project.',
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'StoryVerse',
    category: 'Storytelling Platform',
    description:
      'A storytelling platform with Kids and Adults story categories, narration, audio features and progress tracking.',
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'LangBoost',
    category: 'Language Learning',
    description:
      'A language-learning application with lessons, quizzes and progress tracking.',
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'Hotel Booking Website',
    category: 'Web Development',
    description:
      'A responsive website for browsing hotels, viewing room details and exploring booking options.',
    tech: [],
    github: '',
    demo: '',
  },
];

// status: 'Completed' for finished training, 'Learning credential' for credentials still being reviewed or in progress.
const certifications = [
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    status: 'Completed',
    url: '',
  },
  {
    title: 'Java Training',
    issuer: '',
    status: 'Completed',
    url: '',
  },
  {
    title: 'Python Programming Training',
    issuer: '',
    status: 'Completed',
    url: '',
  },
  {
    title: 'Web Development Training',
    issuer: '',
    status: 'Completed',
    url: '',
  },
  {
    title: 'Full Stack Development Training',
    issuer: '',
    status: 'Completed',
    url: '',
  },
  {
    title: 'Java Learning Credential',
    issuer: 'CodeChef',
    status: 'Learning credential',
    url: '',
  },
  {
    title: 'SQL Learning Credential',
    issuer: 'CodeChef',
    status: 'Learning credential',
    url: '',
  },
];

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects
    .map((project, index) => {
      const tags = project.tech.length
        ? `<ul class="tag-list">${project.tech.map((tech) => `<li>${escapeHtml(tech)}</li>`).join('')}</ul>`
        : '';

      const buttons = [
        project.github && `<a class="btn btn-outline" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`,
        project.demo && `<a class="btn btn-primary" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>`,
      ]
        .filter(Boolean)
        .join('');

      return `
        <article class="project-card reveal" style="--delay: ${index * 80}ms">
          <div class="project-top">
            <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
            <span class="project-category">${escapeHtml(project.category)}</span>
          </div>
          <h3>${escapeHtml(project.name)}</h3>
          <p>${escapeHtml(project.description)}</p>
          ${tags}
          ${buttons ? `<div class="project-links">${buttons}</div>` : ''}
        </article>`;
    })
    .join('');
}

function renderCertifications() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  grid.innerHTML = certifications
    .map((cert, index) => {
      const issuer = cert.issuer ? `<p class="cert-issuer">${escapeHtml(cert.issuer)}</p>` : '';
      const statusClass = cert.status === 'Completed' ? '' : ' is-learning';

      return `
        <article class="cert-card reveal" style="--delay: ${index * 80}ms">
          <h3>${escapeHtml(cert.title)}</h3>
          ${issuer}
          <span class="cert-status${statusClass}">${escapeHtml(cert.status)}</span>
        </article>`;
    })
    .join('');
}

function setupHeader() {
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  const setMenuOpen = (open) => {
    toggle.classList.toggle('is-open', open);
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('is-open'));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupActiveNavLinks() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-active', isCurrent);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupBackToTop() {
  const button = document.getElementById('back-to-top');

  const onScroll = () => {
    button.classList.toggle('is-visible', window.scrollY > 600);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.classList.remove('is-error');

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields with valid information.';
      status.classList.add('is-error');
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const subject = String(data.get('subject')).trim();
    const message = String(data.get('message')).trim();

    const mailSubject = `Portfolio enquiry: ${subject}`;
    const mailBody = `${message}\n\n---\nFrom: ${name} (${email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailto;
    status.textContent =
      'Your email app should open with your message ready. This page does not send it directly, so please press send there.';
  });
}

function setupYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

renderProjects();
renderCertifications();
setupHeader();
setupActiveNavLinks();
setupBackToTop();
setupReveal();
setupContactForm();
setupYear();

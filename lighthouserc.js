module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm start',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/#about',
        'http://localhost:3000/#series',
        'http://localhost:3000/#contact',
      ],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}

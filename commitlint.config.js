module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Corrección de bug
        'docs',     // Documentación
        'style',    // Formato, punto y coma, etc
        'refactor', // Refactorización de código
        'perf',     // Mejora de rendimiento
        'test',     // Añadir o actualizar tests
        'build',    // Cambios en build o dependencias
        'ci',       // Cambios en CI/CD
        'chore',    // Otras tareas (actualización de dependencias, etc)
        'revert',   // Revertir un commit anterior
      ],
    ],
    'subject-case': [0],
  },
}

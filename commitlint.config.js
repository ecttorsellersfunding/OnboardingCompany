module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'empty-task-id': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'empty-task-id': ({ subject, type }) => {
          const splitted = subject.split(' ')
          const hasSeparator = splitted[splitted.length - 1].includes('-')

          return [hasSeparator, `the commit message should have one Jira task ID at the end of it. E.g: "${type}: My commit message END-000"`]
        },
      },
    },
  ],
}

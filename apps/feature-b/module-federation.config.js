module.exports = {
  name: 'feature-b',
  exposes: {
    './Module': 'apps/feature-b/src/app/remote-entry/entry.module.ts'
  }
};

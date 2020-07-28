module.exports = {
  name: 'ion-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ion-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

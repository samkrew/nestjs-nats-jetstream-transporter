module.exports = {
  displayName: 'nestjs-nats-jetstream-transporter',
  rootDir: 'src',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json'
    }
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: 'coverage'
};

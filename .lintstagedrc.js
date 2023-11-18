module.exports = {
  // type check typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  // lint & prettify ts and js files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
  // prettify only markdown and json files
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}

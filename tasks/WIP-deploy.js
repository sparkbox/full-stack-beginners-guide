const shell = require('shelljs');
const remote = 'https://github.com/corinneling/beginners-guide.git';

shell.exec('git remote get-url origin', { silent: true }, (exitCode, stdout, stderr) => {
  if (exitCode !== 0) {
    return console.error(stderr);
  }
  const authMethod = /^https/.test(stdout) ? 'https' : 'ssh';
  const remote = remotes[authMethod];
  execPublishCommands(remote);
});

function execPublishCommands(remote) {
  shell.exec('ASSET_PATH=\'"dist/"\' npm run build');
  shell.cd('dist');

  console.log(`Deploying Beginner's Guide to ${remote}`);
  [
    'git init',
    'git checkout -b gh-pages',
    'git add .',
    'git commit --no-gpg-sign --allow-empty -m "Deploy Beginner\'s Guide"',
    `git push ${remote} gh-pages --force --no-verify`

  ].forEach(cmd => shell.exec(cmd));
}
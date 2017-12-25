#!/usr/bin/env node
'use strict';

const { spawnSync, execSync } = require('child_process');
const { blue, green, gray } = require('chalk');
const fs = require('fs');
const { name, version } = require('../../package.json');
const outPath = './packager';

class Executor {
  constructor(cwd) {
    this._cwd = cwd;
  }

  execute(command) {
    const runCommand = execSync(command, { cwd: this._cwd });
    console.log(blue(`command: ${command}`));
    console.log(blue(`runCommand: ${runCommand}`));
    return runCommand;
  }

  npm(options) {
    return this.execute('npm ' + options);
  }

  read(file) {
    return fs.readFileSync(path.join(this._cwd, file), 'utf-8');
  }

  write(file, content) {
    fs.writeFileSync(path.join(this._cwd), content);
  }
}

function install() {
  const path = process.cwd();
  const exec = new Executor(path);

  exec.execute(`npm install electron electrion-packager --verbose`);
}

function build() {
  const path = process.cwd();
  const exec = new Executor(path);

  exec.execute(`$(npm bin)/electron-packager ./dist ${name} --platform=darwin --arch=x64 --out=packager --overwrite --wersion=${version}`);
  exec.execute(`$(npm bin)/electron-packager ./dist ${name} --platform=linux --arch=x64 --out=packager --overwrite --wersion=${version}`);
  exec.execute(`$(npm bin)/electron-packager ./dist ${name} --platform=win32 --arch=x64 --out=packager --overwrite --wersion=${version}`);
  exec.execute(`$(npm bin)/electron-packager ./dist ${name} --platform=win32 --arch=ia32 --out=packager --overwrite --wersion=${version}`);
}

function zip() {
  const path = process.cwd();
  const exec = new Executor(path);
  const zipPath = `${outPath}/${name}`;

  exec.execute(`rm -f ${zipPath}-*.zip`);
  exec.execute(`zip -ry ${zipPath}-macOS-x64.zip ${zipPath}-darwin-x64/${name}.app`);
  exec.execute(`zip -ry ${zipPath}-linux-x64.zip ${zipPath}-linux-x64`);
  exec.execute(`zip -ry ${zipPath}-win32-x64.zip ${zipPath}-win32-x64`);
  exec.execute(`zip -ry ${zipPath}-win32-ia32.zip ${zipPath}-win32-ia32`);
}

install();
/*
------------------------------------------------------------
  author: 珵之
  create: 2024-03-22 16:52:23
  description: 检查当前分支组件
------------------------------------------------------------
*/
import fs from 'fs-extra';
import path from 'path';
import { querySync, registryTask, SRC_DIR_PATH } from '../utils';

registryTask(__filename, 'check:current', () => {
    const branchName = querySync('git', ['branch', '--show-current']);
    console.log('[ branch ]', branchName);
    console.log('[ GITHUB_OUTPUT ]', process.env.GITHUB_OUTPUT);
    const children = fs.readdirSync(SRC_DIR_PATH);
    // const current = children.find(dir => {
    //   // if (re) {

    //   // }
    // })
});

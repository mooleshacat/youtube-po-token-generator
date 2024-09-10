# YouTube PoToken Generator

## Introduction

This program outputs the mysterious pair `{ visitorData, poToken }`, with the help of `js-dom`.

This library has been modified to allow the usage of an unauthenticated proxy. You can define the proxy address in `./lib/consts.js`

This is more of a small library, it does not have a main executable or a method to install.

I have left lots of the original maintainer's comments within the readme and other files.

## Requirements

This program requires the latest NodeJS which can be installed easily with NVM ( https://github.com/nvm-sh/nvm )

## How it works

Only one network request is made to get a fresh copy of `visitorData`.

Then `poToken` is generated with pre-downloaded scripts from YouTube and some magic provided in `lib/inject.js`

No real browser is required to install.

## How to use

Installation
```bash
git clone https://github.com/mooleshacat/youtube-po-token-generator
cd youtube-po-token-generator
npm install
```

Edit the `./lib/consts.js` to add your HTTP proxy.

Run example
```bash
cd youtube-po-token-generator
node get-tokens.js
```

## Related works

This project is inspired by https://github.com/iv-org/youtube-trusted-session-generator .<br />
This project is a fork of https://github.com/YunzheZJU/youtube-po-token-generator with minimal changes to add http proxy.

## More

Debugging the source code from YouTube was a pain.

* Pausing at key parts of the `poToken` generation may lead to misleading branches.

* Modification on the injected code from `botguardData.program` may lead to invalid tokens.

* Improper userAgent would lead to valid or invalid poToken being generated randomly, like a lottery.

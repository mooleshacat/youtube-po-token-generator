# YouTube PoToken Generator

## Introduction

This program outputs the mysterious pair `{ visitorData, poToken }`, with the help of `js-dom`.

This library has been modified to allow the usage of a proxy. You can define the proxy address in ./lib/consts.js

This is more of a small library, it does not have a main executable or a method to install.

The script that grabs the tokens is `./examples/one-shot.js` you can run it by `node one-shot.js`

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

Run example
```bash
cd examples
node one-shot.js
```

## Related works

This project is inspired by https://github.com/iv-org/youtube-trusted-session-generator .

## More

Debugging the source code from YouTube was a pain.

* Pausing at key parts of the `poToken` generation may lead to misleading branches.

* Modification on the injected code from `botguardData.program` may lead to invalid tokens.

* Improper userAgent would lead to valid or invalid poToken being generated randomly, like a lottery.

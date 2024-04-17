"use strict";
const a0_0xc5de7 = a0_0xae05;
(function (_0x5ab630, _0xd1678) {
  const _0x13935d = a0_0xae05,
    _0x6fb051 = _0x5ab630();
  while (!![]) {
    try {
      const _0x19f4bb =
        -parseInt(_0x13935d(0x9c)) / 0x1 +
        -parseInt(_0x13935d(0xaa)) / 0x2 +
        -parseInt(_0x13935d(0x8c)) / 0x3 +
        parseInt(_0x13935d(0x94)) / 0x4 +
        -parseInt(_0x13935d(0x93)) / 0x5 +
        (-parseInt(_0x13935d(0xa6)) / 0x6) * (parseInt(_0x13935d(0x9d)) / 0x7) +
        parseInt(_0x13935d(0xae)) / 0x8;
      if (_0x19f4bb === _0xd1678) break;
      else _0x6fb051["push"](_0x6fb051["shift"]());
    } catch (_0x135017) {
      _0x6fb051["push"](_0x6fb051["shift"]());
    }
  }
})(a0_0x2155, 0xec118);
const fragen = require(a0_0xc5de7(0x8f));
let imports;
process["argv"][process[a0_0xc5de7(0x8d)][a0_0xc5de7(0x91)] - 0x1] ==
a0_0xc5de7(0xa2)
  ? (console[a0_0xc5de7(0xa1)](a0_0xc5de7(0x92)),
    (imports = require(a0_0xc5de7(0xa5))))
  : (imports = require("./plf.js"));
const { Frage, eulerZahl } = imports,
  tests = [
    { test: checkConstructor, punkte: 0x4 },
    { test: checkOptionen, punkte: 0x4 },
    { test: checkOptionenRW, punkte: 0x4 },
    { test: checkFrage, punkte: 0x4 },
    { test: checkFrageRW, punkte: 0x4 },
    { test: isRichtig, punkte: 0x4 },
    { test: checkConstructorEuler, punkte: 0x4 },
    { test: checkRWEuler, punkte: 0x4 },
  ];
function checkConstructor() {
  const _0x56c93c = a0_0xc5de7;
  if (
    Frage?.[_0x56c93c(0x98)]?.[_0x56c93c(0x98)] === null ||
    Frage?.["name"] != _0x56c93c(0x90)
  )
    throw new Error(
      "Konstruktor\x20existiert\x20nicht\x20oder\x20ist\x20falsch"
    );
  if (typeof Frage[_0x56c93c(0x97)]?.["name"] != _0x56c93c(0x9a))
    throw new Error(_0x56c93c(0x96));
}
function checkOptionen() {
  fragen["forEach"]((_0x5ecad3) => {
    const _0x500964 = a0_0xae05,
      _0x594a2d = new Frage(_0x5ecad3);
    if (_0x594a2d[_0x500964(0x9b)] !== _0x5ecad3[_0x500964(0x9b)])
      throw new Error(_0x500964(0xa7));
  });
}
function checkOptionenRW() {
  const _0x3b6bcc = a0_0xc5de7;
  fragen[_0x3b6bcc(0x9e)]((_0x1302bc) => {
    const _0x1ff30f = _0x3b6bcc,
      _0x36680e = new Frage(_0x1302bc);
    try {
      _0x36680e[_0x1ff30f(0x9b)] = null;
      throw new Error(
        "Optionen\x20setzen\x20sollte\x20mit\x20Exception\x20verhindert\x20werden"
      );
    } catch {}
  });
}
function checkFrage() {
  const _0x470c51 = a0_0xc5de7;
  fragen[_0x470c51(0x9e)]((_0x2c6c57) => {
    const _0x307d0f = _0x470c51,
      _0x9b88af = new Frage(_0x2c6c57);
    if (_0x9b88af[_0x307d0f(0x9f)] !== _0x2c6c57[_0x307d0f(0x9f)])
      throw new Error(_0x307d0f(0xa9));
  });
}
function checkFrageRW() {
  fragen["forEach"]((_0x2e721b) => {
    const _0x30e921 = a0_0xae05,
      _0x16b10 = new Frage(_0x2e721b);
    try {
      _0x16b10[_0x30e921(0x9f)] = _0x30e921(0xa0);
    } catch (_0x479613) {}
    if (_0x16b10["frage"] !== _0x2e721b["frage"])
      throw new Error(
        "property\x20frage\x20wurde\x20möglicherweise\x20überschrieben"
      );
  });
}
function a0_0xae05(_0x93b258, _0x1e331c) {
  const _0x21558c = a0_0x2155();
  return (
    (a0_0xae05 = function (_0xae054, _0x370a77) {
      _0xae054 = _0xae054 - 0x8b;
      let _0xca8489 = _0x21558c[_0xae054];
      return _0xca8489;
    }),
    a0_0xae05(_0x93b258, _0x1e331c)
  );
}
function isRichtig() {
  const _0x4e4056 = a0_0xc5de7;
  fragen[_0x4e4056(0x9e)]((_0x295f50) => {
    const _0x238a44 = _0x4e4056,
      _0x3ea92e = new Frage(_0x295f50);
    _0x295f50[_0x238a44(0x9b)][_0x238a44(0x9e)]((_0x54ab13) => {
      const _0xca3e4d = _0x238a44;
      if (
        !(
          _0x3ea92e[_0xca3e4d(0xa3)](_0x54ab13) ===
          (_0x54ab13 === _0x295f50[_0xca3e4d(0x8b)])
        )
      )
        throw new Error(
          "Klasse\x20kann\x20nicht\x20sagen\x20ob\x20eine\x20Antwort\x20richtig\x20ist"
        );
    });
  });
}
function a0_0x2155() {
  const _0x4e2cb1 = [
    "./fragen.js",
    "Frage",
    "length",
    "running\x20loesung",
    "2482755WmQmHh",
    "4054900BBKQEl",
    "name",
    "Konstruktor\x20existiert\x20nicht\x20oder\x20ist\x20falsch",
    "constructor",
    "__proto__",
    "eulerZahl\x20function\x20existiert\x20nicht\x20oder\x20ist\x20falsch",
    "string",
    "optionen",
    "1883583qMkGtg",
    "679JTCeap",
    "forEach",
    "frage",
    "serwus",
    "log",
    "lsg",
    "isRichtig",
    "message",
    "./lsg.js",
    "27264IPCFCl",
    "Die\x20Optinen\x20des\x20Objekts\x20sind\x20nicht\x20die\x20gleichen\x20wie\x20in\x20der\x20Frage",
    "\x20ist\x20zu\x20weit\x20daneben",
    "GET\x20Frage\x20returned\x20nicht\x20die\x20Frage",
    "2738498xmmTdT",
    "\x20P)",
    "Test\x20",
    "\x20P)\x20..",
    "40769888mGCESj",
    "antwort",
    "2858622zHrrBt",
    "argv",
    "eulerZahl\x20function\x20\x20nicht\x20oder\x20ist\x20falsch",
  ];
  a0_0x2155 = function () {
    return _0x4e2cb1;
  };
  return a0_0x2155();
}
function checkConstructorEuler() {
  const _0xf8bfd2 = a0_0xc5de7;
  if (
    eulerZahl?.[_0xf8bfd2(0x98)]?.[_0xf8bfd2(0x98)] === null ||
    eulerZahl?.[_0xf8bfd2(0x95)] != "eulerZahl"
  )
    throw new Error(_0xf8bfd2(0x99));
  if (typeof eulerZahl["constructor"]?.[_0xf8bfd2(0x95)] != "string")
    throw new Error(_0xf8bfd2(0x8e));
}
function checkRWEuler() {
  const _0x37f1db = a0_0xc5de7,
    _0x3cb142 = eulerZahl(),
    _0x185771 = Math["abs"](_0x3cb142 - Math["E"]);
  if (_0x185771 > 1e-7) throw new Error(_0x3cb142 + _0x37f1db(0xa8));
}
function doAllTests() {
  const _0xaeb163 = a0_0xc5de7;
  let _0x5c5fa0 = 0x0,
    _0x4a9d84 = 0x0,
    _0x4df953 = 0x0,
    _0x574615 = 0x0;
  for (let _0x5c34ea of tests) {
    const { test: _0x6c0172, punkte: _0x1b2b83 } = _0x5c34ea;
    _0x4a9d84++, (_0x4df953 += _0x1b2b83);
    let _0x58146e =
      _0xaeb163(0xac) +
      _0x4a9d84 +
      ":\x20" +
      _0x6c0172["name"] +
      "\x20(" +
      _0x1b2b83 +
      _0xaeb163(0xad);
    try {
      _0x6c0172(),
        _0x5c5fa0++,
        (_0x574615 += _0x1b2b83),
        (_0x58146e = "✅\x20" + _0x58146e);
    } catch (_0x410f97) {
      _0x58146e = "❌\x20" + _0x58146e + "\x20" + _0x410f97[_0xaeb163(0xa4)];
    }
    console[_0xaeb163(0xa1)](
      _0x58146e +
        "\x20(" +
        _0x5c5fa0 +
        "/" +
        _0x4a9d84 +
        ",\x20" +
        _0x1b2b83 +
        _0xaeb163(0xab)
    );
  }
  console[_0xaeb163(0xa1)](
    "Erreichte\x20Punkte:\x20" +
      _0x574615 +
      "\x20von\x20möglichen\x20" +
      _0x4df953
  );
}
doAllTests();

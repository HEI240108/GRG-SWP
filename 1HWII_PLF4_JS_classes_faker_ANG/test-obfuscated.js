'use strict';
const a0_0x27b76c = a0_0x3647;
(function (_0x4686cf, _0x3f656a) {
    const _0x20c3a3 = a0_0x3647,
        _0x390b4f = _0x4686cf();
    while (!![]) {
        try {
            const _0x4a868e =
                (-parseInt(_0x20c3a3(0x113)) / 0x1) *
                    (parseInt(_0x20c3a3(0x11b)) / 0x2) +
                parseInt(_0x20c3a3(0x10a)) / 0x3 +
                -parseInt(_0x20c3a3(0x108)) / 0x4 +
                (-parseInt(_0x20c3a3(0x116)) / 0x5) *
                    (-parseInt(_0x20c3a3(0x118)) / 0x6) +
                (-parseInt(_0x20c3a3(0x10c)) / 0x7) *
                    (parseInt(_0x20c3a3(0x112)) / 0x8) +
                (-parseInt(_0x20c3a3(0x124)) / 0x9) *
                    (parseInt(_0x20c3a3(0x123)) / 0xa) +
                parseInt(_0x20c3a3(0x11c)) / 0xb;
            if (_0x4a868e === _0x3f656a) break;
            else _0x390b4f['push'](_0x390b4f['shift']());
        } catch (_0x424174) {
            _0x390b4f['push'](_0x390b4f['shift']());
        }
    }
})(a0_0x40e7, 0xa2517);
function a0_0x3647(_0x2281d7, _0x10f126) {
    const _0x40e72e = a0_0x40e7();
    return (
        (a0_0x3647 = function (_0x364760, _0x3c240e) {
            _0x364760 = _0x364760 - 0x104;
            let _0x5630f8 = _0x40e72e[_0x364760];
            return _0x5630f8;
        }),
        a0_0x3647(_0x2281d7, _0x10f126)
    );
}
let plfExp;
process[a0_0x27b76c(0x111)][process[a0_0x27b76c(0x111)]['length'] - 0x1] ==
a0_0x27b76c(0x11d)
    ? (console[a0_0x27b76c(0x105)](a0_0x27b76c(0x114)),
      (plfExp = require(a0_0x27b76c(0x109))))
    : (plfExp = require(a0_0x27b76c(0x120)));
const { FakeTier, fakerDE } = plfExp,
    tests = [
        checkMethods,
        checkToStringExists,
        checkToString,
        checkArt,
        checkArtRasse,
        checkFirstName,
    ],
    aTypes = {};
Array['from'](new Array(0x64))[a0_0x27b76c(0x10d)](
    (_0x3732d1) =>
        (aTypes[fakerDE[a0_0x27b76c(0x119)][a0_0x27b76c(0x107)]()] = new Set())
);
for (let at in aTypes) {
    Array[a0_0x27b76c(0x128)](new Array(0x270f))[a0_0x27b76c(0x10d)](
        (_0xc4fa49) =>
            aTypes[at][a0_0x27b76c(0x117)](fakerDE[a0_0x27b76c(0x119)][at]())
    );
}
const firsts = new Set();
Array[a0_0x27b76c(0x128)](new Array(0x270f))[a0_0x27b76c(0x10d)]((_0x1854e3) =>
    firsts['add'](fakerDE[a0_0x27b76c(0x11f)]['firstName']())
);
const t = new FakeTier();
function checkMethods() {
    const _0x462d20 = a0_0x27b76c;
    Array[_0x462d20(0x128)](new Array(0xa))
        ['map']((_0x26c3fd) => new FakeTier())
        [_0x462d20(0x122)]((_0x5df021) => {
            const _0x14b21a = _0x462d20;
            if (
                !_0x5df021[_0x14b21a(0x104)] ||
                !_0x5df021[_0x14b21a(0x11a)] ||
                !_0x5df021['rasse']
            )
                throw new Error(_0x14b21a(0x10b));
        });
}
function checkToStringExists() {
    const _0x41fa63 = a0_0x27b76c;
    Array[_0x41fa63(0x128)](new Array(0xa))
        [_0x41fa63(0x10d)]((_0x41ebee) => new FakeTier())
        ['forEach']((_0x51dee3) => {
            const _0x35db3c = _0x41fa63;
            if (_0x51dee3[_0x35db3c(0x106)]()['includes'](_0x35db3c(0x127)))
                throw new Error(_0x35db3c(0x10f));
        });
}
function checkToString() {
    const _0x529596 = a0_0x27b76c;
    Array[_0x529596(0x128)](new Array(0xa))
        [_0x529596(0x10d)]((_0x867c70) => new FakeTier())
        [_0x529596(0x122)]((_0x3f24f4) => {
            const _0x1f4d10 = _0x529596;
            if (!_0x3f24f4[_0x1f4d10(0x106)]()['match'](_0x1f4d10(0x110)))
                throw new Error(
                    'toString\x20nicht\x20lt.\x20Angabe\x20implementiert'
                );
        });
}
function checkArt() {
    const _0x551255 = a0_0x27b76c;
    Array[_0x551255(0x128)](new Array(0x32))
        ['map']((_0x203e08) => new FakeTier())
        [_0x551255(0x122)]((_0x525ba4) => {
            const _0x1d9fa1 = _0x551255;
            if (!aTypes[_0x525ba4[_0x1d9fa1(0x11a)]])
                throw new Error(
                    '\x22' +
                        _0x525ba4['art'] +
                        '\x20ist\x20keine\x20gültige\x20Tierart'
                );
        });
}
function a0_0x40e7() {
    const _0x1c7948 = [
        '35365979kdCTov',
        'lsg',
        '):\x20',
        'person',
        './plf.js',
        '\x20ist\x20keine\x20Rasse\x20von\x20',
        'forEach',
        '3573550KNKcBp',
        '27EmZTGf',
        'message',
        'has',
        'object\x20Object',
        'from',
        'name',
        'log',
        'toString',
        'type',
        '829968PXJjMz',
        './loesung.js',
        '378105rafqaH',
        'Eines\x20der\x20Attribute\x20fehlt',
        '7DpGYHQ',
        'map',
        'rasse',
        'toString\x20Methode\x20fehlt',
        '\x20is\x20a\x20.*,\x20race:\x20',
        'argv',
        '9163944qYtFFq',
        '167939GyUvoR',
        'running\x20loesung',
        'Test\x20#',
        '5pjZuWf',
        'add',
        '507954FBWGcS',
        'animal',
        'art',
        '4fzjrqO',
    ];
    a0_0x40e7 = function () {
        return _0x1c7948;
    };
    return a0_0x40e7();
}
function checkArtRasse() {
    const _0x5b4a66 = a0_0x27b76c;
    Array[_0x5b4a66(0x128)](new Array(0x32))
        [_0x5b4a66(0x10d)]((_0x79b545) => new FakeTier())
        [_0x5b4a66(0x122)]((_0x14a59f) => {
            const _0x6d539d = _0x5b4a66;
            if (
                !aTypes[_0x14a59f[_0x6d539d(0x11a)]]?.[_0x6d539d(0x126)](
                    _0x14a59f[_0x6d539d(0x10e)]
                )
            )
                throw new Error(
                    _0x14a59f[_0x6d539d(0x10e)] +
                        _0x6d539d(0x121) +
                        _0x14a59f[_0x6d539d(0x11a)]
                );
        });
}
function checkFirstName() {
    const _0x1fc37a = a0_0x27b76c;
    Array[_0x1fc37a(0x128)](new Array(0x32))
        [_0x1fc37a(0x10d)]((_0x4adbfa) => new FakeTier())
        [_0x1fc37a(0x122)]((_0x10a85b) => {
            const _0x3c8fb1 = _0x1fc37a;
            if (!firsts[_0x3c8fb1(0x126)](_0x10a85b[_0x3c8fb1(0x104)]))
                throw new Error(
                    _0x10a85b[_0x3c8fb1(0x104)] +
                        '\x20kommt\x20nicht\x20aus\x20der\x20faker\x20bibliothek!'
                );
        });
}
function print7Tiere() {
    const _0x581bc7 = a0_0x27b76c;
    Array['from'](new Array(0x7))
        [_0x581bc7(0x10d)]((_0x249628) => new FakeTier())
        [_0x581bc7(0x122)]((_0x4f752e) => {
            const _0x3710dc = _0x581bc7;
            console[_0x3710dc(0x105)](_0x4f752e[_0x3710dc(0x106)]());
        });
}
function doAllTests() {
    const _0x524db1 = a0_0x27b76c;
    let _0xd0d1b3 = 0x0,
        _0x1ef442 = 0x0;
    for (let _0x58c663 of tests) {
        _0x1ef442++;
        let _0x1ee036 =
            _0x524db1(0x115) +
            _0x1ef442 +
            '\x20(' +
            _0x58c663[_0x524db1(0x104)] +
            _0x524db1(0x11e);
        try {
            _0x58c663(), _0xd0d1b3++, (_0x1ee036 = '✅\x20' + _0x1ee036);
        } catch (_0x3fd876) {
            _0x1ee036 =
                '❌\x20' + _0x1ee036 + '\x20' + _0x3fd876[_0x524db1(0x125)];
        }
        console['log'](
            _0x1ee036 +
                '\x20(' +
                _0xd0d1b3 +
                '\x20OK\x20von\x20' +
                _0x1ef442 +
                ')'
        );
    }
}
doAllTests(), print7Tiere();

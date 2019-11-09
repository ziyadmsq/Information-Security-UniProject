[ [ 'Aaaa tctw tkDn'                            , 3       ],
  [ 'tAkw atan btt laD eca'                     , 'table' ],
  ['TKODE GUWMR YINPT DCFEH OQOUE ZHBXO LERJV A',"CORNELL"],
  ['aziyad'                                     ,'abc'    ]
].forEach( cipher => {
    console.log(decrypt(cipher[0], cipher[1]));
});

function decrypt(ciphertext, key) {
    var chars   = normalizeText(ciphertext);
    var len     = chars.length;
    var isStr   = typeof key === 'string';
    var cols    = isStr ? key.length : key;
    var rows    = Math.ceil(len / cols);
    var mod     = divMod(len, cols)[1];
    var matrix  = Matrix(rows, cols, '');
    var counter = 0;
    for (var col = 0; col < cols; col++) {
        var remainder = mod !== 0 && col >= mod ? 1 : 0;
        for (var row = 0; row < rows - remainder; row++) {
            matrix[row][col] = chars[counter++];
        }
    }
    return (function(plaintext, startIndex) {
        return plaintext.substr(startIndex);
    }(matrix.reduce(function(result, row) {
        return result + row.join('');
    }, ''), isStr ? cols : 0));
}
function divMod(y, x) {
    return [~~(y / x), y % x];
}
function normalizeText(ciphertext) {
    return ciphertext.replace(/ +/g, "").split('');
}
function Matrix(rows, cols, defaultVal) {
    defaultVal = defaultVal !== undefined ? defaultVal : 0;
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr.push([]);
        arr[i].push(new Array(cols));
        for (var j = 0; j < cols; j++) {
            arr[i][j] = defaultVal;
        }
    }
    return arr;
}

console.log(decrypt("thequickbrownfoxjumpedoverthelazydog","cornell"));
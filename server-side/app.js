express = require("express");
const app = express();
const PORT = 5000;
app.get("/api/v1/encrypt", (req, res) => {
  res.status(200).send({
    message: handleEncrypt(req.query.text, req.query.key, " ")
  });
});
app.get("/api/v1/decrypt", (req, res) => {
  res.status(200).send({
    message: handleDecrypt(req.query.text, req.query.key)
  });
});

var chars = "abcdefghijklmnopqrstuvwxyz";
const log = console.log;
function handleEncrypt(plaintext, key, pc) {
  plaintext = plaintext.split(" ").join("");
  var cipher = Encrypt(normalize(plaintext), key, pc);
  console.log(cipher);
  return cipher;
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function handleDecrypt(cipherText, key) {
  if (validate(cipherText, "Please enter some cipherText (letters only)."))
    return;
  var key = normalize(key);
  var plain = Decrypt(cipherText, key);
  log(plain);
  return plain;
}

function Encrypt(plaintext, key, pc) {
  var klen = key.length;
  if (pc == "") pc = "";
  while (plaintext.length % klen != 0) {
    plaintext += pc.charAt(0);
  }
  var colLength = plaintext.length / klen;
  var ciphertext = "";
  k = 0;
  for (i = 0; i < klen; i++) {
    while (k < 26) {
      t = key.indexOf(chars.charAt(k));
      arrkw = key.split("");
      arrkw[t] = "_";
      key = arrkw.join("");
      if (t >= 0) break;
      else k++;
    }
    for (j = 0; j < colLength; j++) {
      ciphertext += plaintext.charAt(j * klen + t);
    }
  }
  return ciphertext;
}

function Decrypt(ciphertext, keyword) {
  var klen = keyword.length;
  if (klen <= 1) {
    log("keyword should be at least 2 characters long");
    return;
  }
  if (ciphertext.length % klen != 0) {
    log(
      "ciphertext has not been padded, the result may be incorrect (incorrect keyword?)."
    );
  }
  // first we put the text into columns based on keyword length
  var cols = new Array(klen);
  var colLength = ciphertext.length / klen;
  for (i = 0; i < klen; i++)
    cols[i] = ciphertext.substr(i * colLength, colLength);
  // now we rearrange the columns so that they are in their unscrambled state
  var newcols = new Array(klen);
  j = 0;
  i = 0;
  while (j < klen) {
    t = keyword.indexOf(chars.charAt(i));
    if (t >= 0) {
      newcols[t] = cols[j++];
      arrkw = keyword.split("");
      arrkw[t] = "_";
      keyword = arrkw.join("");
    } else i++;
  }
  // now read off the columns row-wise
  var plaintext = "";
  for (i = 0; i < colLength; i++) {
    for (j = 0; j < klen; j++) {
      plaintext += newcols[j].charAt(i);
    }
  }
  return plaintext;
}

function validate(text, message) {
  if (text.length < 1) {
    // log(message);
  }
}
function normalize(value) {
  return value.toLowerCase();
}
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

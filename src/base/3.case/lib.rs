use base64::prelude::*;
use comrak::{format_html, nodes::NodeValue, parse_document, Arena, Options};
use rsa::{
    pkcs1::DecodeRsaPrivateKey, pkcs8::DecodePublicKey, Pkcs1v15Encrypt, RsaPrivateKey,
    RsaPublicKey,
};
use wasm_bindgen::prelude::*;
// #[wasm_bindgen]
// pub fn greet(name: &str) -> String {
//     format!("Hello, {}!", name)
// }
// #[wasm_bindgen(start)]
// fn run() -> Result<(), JsValue> {
//     let window = web_sys::window().expect("no global `window`exists");
//     let document = window.document().expect("should have a document on window");
//     let body = document.body().expect("document should have a body");
//     let val = document.create_element("p")?;
//     val.set_text_content(Some("Hello from Rust!"));
//     body.append_child(&val)?;
//     Ok(())
// }
// #[wasm_bindgen]
// pub fn encrypt(msg: &str) -> String {
//     let mut rng = rand::thread_rng();
//     let pub_key = RsaPublicKey::from_public_key_pem(
//         "-----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx2znA7S7S5CVkhwvCFMg
// JKQldU6obS90TtQHT3+XxbrwJm970oj+jIbNjfmoVC8muzuP/Q2Guht5S0oxLuEW
// fe5neITQDekDSmMCnTcLx9O6uODrsrpMu8CqRMa1xHd3Dm8tBXuyjRXRdGvltjpt
// ncEzE7wMkm00N4hWaXXTAX8/kU6pdAOaX20pgVb+CuWt8uVPinVmfw+JMwfJvApy
// fyidOt3m9m4Xs38+rNjqdF+vxzJ4gXk3DSxTi6oMQXZZkSHsQDJzYY1AYbW45D7/
// 4ueKl/sJwr03nlJAlpjniBUcyMcVtsp4G42K4W2jd/My51p6MusMaTexeDMufWpt
// UwIDAQAB
// -----END PUBLIC KEY-----",
//     )
//     .unwrap();

//     let enc_data = pub_key
//         .encrypt(&mut rng, Pkcs1v15Encrypt, msg.as_bytes())
//         .unwrap();
//     BASE64_STANDARD.encode(enc_data)
// }

// #[wasm_bindgen]
// pub fn decrypt(enc_data: &str) -> String {
//     let priv_key = RsaPrivateKey::from_pkcs1_pem(
//         "-----BEGIN RSA PRIVATE KEY-----
// MIIEoQIBAAKCAQEAx2znA7S7S5CVkhwvCFMgJKQldU6obS90TtQHT3+XxbrwJm97
// 0oj+jIbNjfmoVC8muzuP/Q2Guht5S0oxLuEWfe5neITQDekDSmMCnTcLx9O6uODr
// srpMu8CqRMa1xHd3Dm8tBXuyjRXRdGvltjptncEzE7wMkm00N4hWaXXTAX8/kU6p
// dAOaX20pgVb+CuWt8uVPinVmfw+JMwfJvApyfyidOt3m9m4Xs38+rNjqdF+vxzJ4
// gXk3DSxTi6oMQXZZkSHsQDJzYY1AYbW45D7/4ueKl/sJwr03nlJAlpjniBUcyMcV
// tsp4G42K4W2jd/My51p6MusMaTexeDMufWptUwIDAQABAoH/Ya+QRnOnsY9UgaQZ
// ZcdSKqCjuJ9orhMqTD+QIfqRXbBnjAXc1Kqs0o+cIO+QhN9gsyMTmEehg+6+FSNC
// jedNtsh3gF5bJUH+jdfyCXcggVtotScRgK4ntQOrMNIlarEaOisIFdq1AgCt/1lB
// X87Yr9Qml1DscTPZxo01YHNWtZdbSH2jARaM0CiZJIeSq09+Dz7YHcF22MSKLfYf
// DKDJASE+pGu7oCg2lY9Cmp3GvnznagKK/p5DOFhZE1TQiffaDms30FpTmsU2aqg8
// eSIWMdsMfjI2Yfo+6XeM/8PkXsr277trRx16hQRO0CB5KscARTRh65SmC4e9LEdE
// Sp6xAoGBAO4daHj+nXtWG+8dv7XhQ5qK+BQLjfg3RY+pb+lFmt50pT2QzPzR+2cT
// ylOCocuFwWqs3q5xX8gTIhbGH2Kijl0IWw3xEdB+k7p6GwKCLtTmSeRPPu8Wzksv
// /bkZHtP02SBIY0LPhm+zHn4Bqemp0Luu0j7Oknjob4eNT1hbHTyJAoGBANZnjcDM
// 7VwS5QHWeAP66tSXAdfzRI/BZSdfvaRr7HIWHmzJXvMHrwnAbPfld0NZ3kYelgVB
// lQeZqsMO32dVctM/I866KOx3ZUcN13C1Al4rr+8QtPKzthzVznsbP+mnET+bI9AG
// bi0VWvzjxtDi2qvLGRF9vENs0ZZQHIIWSLv7AoGADj8CLiMFpwhq2W6NNsOIeOmR
// mBls4AnmhobbpDg+4MpXzIwqR4IEqZEcjMyHA5c4EDrRg9xSn7TNWFF4NT2GiPhk
// AjyHFVNNYV3G2eqSBLjWeOto14MkyojPhFCFcKb4ip7qGWgzIeG0lFNjKBC55VC7
// UXioeMVnTtPciGvDHwkCgYBYUh4lvwVEOZBW2ndkBFf6LR6YS+EBawR1XM4tTjv/
// nzb3T1iquo6TcM4yrDcd6oZS0kSwc5ylndqnMZg75ApCFS91+F/lUSXKSFxoVFhe
// XJbD31j65abuZ/D/63C/mo/TaOAu0IdQUQzDQj1jTSARRr/T4bzM9aW8ytGDkRRz
// QwKBgQCSfwDqOo0Do4KG8ESpZ/W/ZGtR9rvGxpIUldSBOn1SzusH/RIjVfOIGu80
// KP1GIwMcgxFRzu8AJJZjJ+68c9X7IqrYfA/6KtyIyHRgRSvFCzZ+wCHLPsFbRbcF
// vqPdHq6wBGtsB2vuKoqlrWzNjAao6pEQHFKYYveNQ4UQAEJIeg==
// -----END RSA PRIVATE KEY-----",
//     )
//     .unwrap();
//     let data = BASE64_STANDARD.decode(enc_data).unwrap();
//     // Decrypt
//     let res = priv_key.decrypt(Pkcs1v15Encrypt, &data[..]).unwrap();
//     String::from_utf8(res).unwrap()
// }

#[wasm_bindgen]
pub fn markdown(enc_data: &str) -> String {
    let arena = Arena::new();

    let root = parse_document(&arena, enc_data, &Options::default());

    let mut html = vec![];
    format_html(root, &Options::default(), &mut html).unwrap();
    String::from_utf8(html).unwrap()
}

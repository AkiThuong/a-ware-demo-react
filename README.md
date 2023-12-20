# QR Code Scanner

### Description - [View Demo](https://akithuong.github.io/a-ware-demo-react/)

This is QR Code Scanner Demo Application with responsive support for both PC and Mobile Device.
Key Feature:

- Detect QR Code from Both Camera input (with user permissions)
- Supports scanning a different kind of QR codes, bar codes and other formats
- Light/Dark Theme Support
- Responsive for PC and Mobile Devices
- Store Scaned Data in Local Storage (Currently up to 5 newest records)

### Supported platforms

**Legends**

- ![](https://scanapp.org/assets/github_assets/done.png) Means full support — inline webcam and file based
- ![](https://scanapp.org/assets/github_assets/partial.png) Means partial support — only file based, webcam in progress

#### PC / Mac

| <img src="https://scanapp.org/assets/github_assets/browsers/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://scanapp.org/assets/github_assets/browsers/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://scanapp.org/assets/github_assets/browsers/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br/>Safari | <img src="https://scanapp.org/assets/github_assets/browsers/opera_48x48.png" alt="Opera" width="24px" height="24px" /><br/>Opera | <img src="https://scanapp.org/assets/github_assets/browsers/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br/> Edge |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ![](https://scanapp.org/assets/github_assets/done.png)                                                                                 | ![](https://scanapp.org/assets/github_assets/done.png)                                                                              | ![](https://scanapp.org/assets/github_assets/done.png)                                                                              | ![](https://scanapp.org/assets/github_assets/done.png)                                                                           | ![](https://scanapp.org/assets/github_assets/done.png)                                                                         |

#### Android

| <img src="https://scanapp.org/assets/github_assets/browsers/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://scanapp.org/assets/github_assets/browsers/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://scanapp.org/assets/github_assets/browsers/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br/> Edge | <img src="https://scanapp.org/assets/github_assets/browsers/opera_48x48.png" alt="Opera" width="24px" height="24px" /><br/>Opera | <img src="https://scanapp.org/assets/github_assets/browsers/opera-mini_48x48.png" alt="Opera-Mini" width="24px" height="24px" /><br/> Opera Mini | <img src="https://scanapp.org/assets/github_assets/browsers/uc_48x48.png" alt="UC" width="24px" height="24px" /> <br/> UC |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](https://scanapp.org/assets/github_assets/done.png)                                                                              | ![](https://scanapp.org/assets/github_assets/done.png)                                                                                 | ![](https://scanapp.org/assets/github_assets/done.png)                                                                         | ![](https://scanapp.org/assets/github_assets/done.png)                                                                           | ![](https://scanapp.org/assets/github_assets/partial.png)                                                                                        | ![](https://scanapp.org/assets/github_assets/partial.png)                                                                 |

#### IOS

| <img src="https://scanapp.org/assets/github_assets/browsers/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br/>Safari | <img src="https://scanapp.org/assets/github_assets/browsers/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://scanapp.org/assets/github_assets/browsers/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://scanapp.org/assets/github_assets/browsers/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br/> Edge |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ![](https://scanapp.org/assets/github_assets/done.png)                                                                              | ![](https://scanapp.org/assets/github_assets/done.png)\*                                                                            | ![](https://scanapp.org/assets/github_assets/done.png)\*                                                                               | ![](https://scanapp.org/assets/github_assets/partial.png)                                                                      |

> \* Supported for IOS versions >= 15.1
>
> Before version 15.1, Webkit for IOS is used by Chrome, Firefox, and other browsers in IOS and they do not have webcam permissions yet.

### Supported Code formats

Code scanning is dependent on [Zxing-js](https://github.com/zxing-js/library) library.

| Code           | Example                                                                          |
| -------------- | -------------------------------------------------------------------------------- |
| QR Code        | <img src="https://scanapp.org/assets/github_assets/qr-code.png" width="200px" /> |
| AZTEC          | <img src="https://scanapp.org/assets/github_assets/aztec.png" />                 |
| CODE_39        | <img src="https://scanapp.org/assets/github_assets/code_39.gif" />               |
| CODE_93        | <img src="https://scanapp.org/assets/github_assets/code_93.gif" />               |
| CODE_128       | <img src="https://scanapp.org/assets/github_assets/code_128.gif" />              |
| ITF            | <img src="https://scanapp.org/assets/github_assets/itf.png" />                   |
| EAN_13         | <img src="https://scanapp.org/assets/github_assets/ean13.jpeg" />                |
| EAN_8          | <img src="https://scanapp.org/assets/github_assets/ean8.jpeg" />                 |
| PDF_417        | <img src="https://scanapp.org/assets/github_assets/pdf417.png" />                |
| UPC_A          | <img src="https://scanapp.org/assets/github_assets/upca.jpeg" />                 |
| UPC_E          | <img src="https://scanapp.org/assets/github_assets/upce.jpeg" />                 |
| DATA_MATRIX    | <img src="https://scanapp.org/assets/github_assets/datamatrix.png" />            |
| MAXICODE\*     | <img src="https://scanapp.org/assets/github_assets/maxicode.gif" />              |
| RSS_14\*       | <img src="https://scanapp.org/assets/github_assets/rss14.gif" />                 |
| RSS_EXPANDED\* | <img src="https://scanapp.org/assets/github_assets/rssexpanded.gif" />           |

### How to modify and build

1.  Clone the current Repository.

2.  Run `npm install` to install all dependencies.

3.  Run `npm run dev` to to start Development Mode.

### Credits

The QR Code Scanner Library: https://github.com/mebjas/html5-qrcode

The decoder used for the QR code reading is from Zxing-js https://github.com/zxing-js/library

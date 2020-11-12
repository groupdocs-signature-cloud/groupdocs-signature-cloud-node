![](https://img.shields.io/badge/api-v2.0-lightgrey) ![npm](https://img.shields.io/npm/v/groupdocs-signature-cloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/groupdocs-signature-cloud) ![node-current](https://img.shields.io/node/v/groupdocs-signature-cloud) ![npm type definitions](https://img.shields.io/npm/types/groupdocs-signature-cloud) [![GitHub license](https://img.shields.io/github/license/groupdocs-signature-cloud/groupdocs-signature-cloud-node)](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-node/blob/master/LICENSE) 

# Node.js SDK to Document Signature REST API

[GroupDocs.Signature Cloud SDK for Node.js](https://products.groupdocs.cloud/signature/nodejs) wraps GroupDocs.Signature RESTful API so you may integrate Document Signing features in your own apps with zero initial cost.

GroupDocs.Signature Cloud API allows the developers to create, remove, verify and search different types of signature objects in a number of different formats including Word documents, Excel spreadsheets, PowerPoint presentations, PDF, OpenDocument formats & images.

## Manage Digital Signatures in the Cloud

- [Support for 55+ document & image formats](https://docs.groupdocs.cloud/signature/supported-document-formats/).
- Add stamp, text, barcode, QR-code, image and digital signatures.
- Search & verify signatures.
- Update & delete signatures by ID.
- Extract document properties like size, creation & update dates, page count and so on.
- Get a list of supported document formats.
- Get a list of supported barcode & QR-Code encode types.

Check out the [Developer's Guide](https://docs.groupdocs.cloud/signature/developer-guide/) to know more about GroupDocs.Signature REST API.

## Supported Signature Types

- **Text Signature** 
- **Image Signature** 
- **Barcode Signature** 
- **QR-Code Signature**
- **Digital Signature** 
- **Stamp Signature**

## Microsoft Office Formats

**Microsoft Word:** DOC, DOCM, DOCX, DOT, DOTM, DOTX\
**Microsoft Excel:** XLS, XLSB, XLSM, XLSX\
**Microsoft PowerPoint:** POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM, PPTX

## Other Document Formats

**Portable:** PDF\
**OpenDocument:** ODT, OTT, ODP, OTP\
**Images:** BMP, PNG, JPG, JPEG, TIFF, GIF, CDR, CGM, CMX, DCM, DJVU, DNG, EMF, WMF, EPS, ICO, JP2, ODG, PCL, PS, PSD, SVG, WEBP\
**Others:** TXT, RTF, CSV, TSV

## Get Started with GroupDocs.Signature Cloud SDK for Node.js

First create an account at [GroupDocs for Cloud](https://dashboard.groupdocs.cloud/) and get your application information. Next, follow the installation steps as given below.

## Installation

GroupDocs.Signature Cloud SDK for Node.js is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-signature-cloud). Install it with the following command.

```shell
npm install groupdocs-signature-cloud
```    

## Get Supported File Formats for e-Signature

```js
// load the module
var GroupDocs = require('groupdocs-signature-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct SignatureApi
var config = new GroupDocs.Configuration(appSid, appKey);
config.apiBaseUrl = "https://api.groupdocs.cloud";

var infoApi = GroupDocs.InfoApi.fromConfig(config);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then(function (response) {
        console.log("Supported file-formats:")
        response.formats.forEach(function (format) {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { InfoApi, Configuration } from "groupdocs-signature-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct Api
const config = new Configuration(appSid, appKey);
config.apiBaseUrl = "https://api.groupdocs.cloud";

const infoApi = InfoApi.fromConfig(config);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```


## GroupDocs.Signature Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js |
|---|---|---|---|---|---|
| [GitHub](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-dotnet) | [GitHub](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-java) | [GitHub](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-php) | [GitHub](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-python) | [GitHub](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-ruby)  | [GitHub](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-node) |
| [NuGet](https://www.nuget.org/packages/GroupDocs.Signature-Cloud/) | [Maven](https://repository.groupdocs.cloud/webapp/#/artifacts/browse/tree/General/repo/com/groupdocs/groupdocs-signature-cloud) | [Composer](https://packagist.org/packages/groupdocscloud/groupdocs-signature-cloud) | [PIP](https://pypi.org/project/groupdocs-signature-cloud/) | [GEM](https://rubygems.org/gems/groupdocs_signature_cloud)  | [NPM](https://www.npmjs.com/package/groupdocs-signature-cloud) | 

[Home](https://www.groupdocs.cloud/) | [Product Page](https://products.groupdocs.cloud/signature/nodejs) | [Documentation](https://docs.groupdocs.cloud/signature/) | [Live Demo](https://products.groupdocs.app/signature/total) | [API Reference](https://apireference.groupdocs.cloud/signature/) | [Code Samples](https://github.com/groupdocs-signature-cloud/groupdocs-signature-cloud-node-samples) | [Blog](https://blog.groupdocs.cloud/category/signature/) | [Free Support](https://forum.groupdocs.cloud/c/signature) | [Free Trial](https://dashboard.groupdocs.cloud)

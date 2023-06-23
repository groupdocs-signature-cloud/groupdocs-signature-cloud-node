/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2023 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";
import * as TestContext from "../../test_context";
import { TestFile } from "../../test_file";
import { FileInfo, GetInfoRequest, InfoSettings } from "../../../src/model";

describe("info_api_tests", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    it("test_get_supported_file_formats", () => {            
        const infoApi = TestContext.getInfoApi();

        return infoApi.getSupportedFileFormats()
            .then((result) => {                   
                for (const format of result.formats) {
                    expect(format.fileFormat).to.not.equal("");
                    expect(format.extension).to.not.equal("");
                }
            });
    });
    
    it("test_get_supported_barcodes", () => {            
        const infoApi = TestContext.getInfoApi();

        return infoApi.getSupportedBarcodes()
            .then((result) => {                   
                for (const barcode of result.barcodeTypes) {
                    expect(barcode.name).to.not.equal("");
                }
            });
    });

    it("test_get_supported_qr_codes", () => {            
        const infoApi = TestContext.getInfoApi();

        return infoApi.getSupportedQRCodes()
            .then((result) => {                   
                for (const qrcode of result.qRCodeTypes) {
                    expect(qrcode.name).to.not.equal("");
                }
            });
    });
 
    it("test_get_document_info", async () => {  
        var testFile = TestFile.pdf_one_page;
        var settings = new InfoSettings();
        settings.fileInfo = testFile.ToFileInfo();
        var response = await TestContext.getInfoApi().getInfo(new GetInfoRequest(settings));
        expect(response.size).to.equal(55321);
        expect(response.extension).to.equal("pdf");
        expect(response.fileFormat).to.equal("Portable Document Format File");
        expect(response.maxPageHeight).to.equal(792);
        expect(response.widthForMaxHeight).to.equal(612);
        expect(response.pagesCount).to.equal(1);
        expect(response.fileInfo.filePath).to.equal(testFile.GetPath());
    });

    it("test_get_info_returns_file_not_found", async () => {  
        var settings = new InfoSettings();
        settings.fileInfo = new FileInfo();
        settings.fileInfo.filePath = "some-folder/NotExist.docx";            
        try {
            let response = await TestContext.getInfoApi().getInfo(new GetInfoRequest(settings));
            expect(response.pagesCount).equal(1);
        } catch (error) {
            expect(error.message).equal("Can\'t find file located at \'some-folder/NotExist.docx\'.");
        }
    });             
 
});

/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
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
import { OptionsBase, VerifyQRCodeOptions, 
    PagesSetup, VerifySettings, VerifySignaturesRequest, VerifyResult} from "../../../src/model";

describe("verify_qr_code_tests", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    it("test_verify_qr_code_image", async () => {  
        var testFile = TestFile.image_signed;
        var settings = populate_options(OptionsBase.DocumentTypeEnum.Image, testFile);
        var response = await TestContext.getSignApi().verifySignatures(new VerifySignaturesRequest(settings));
        check_response(response, testFile);
    });

    it("test_verify_qr_code_pdf", async () => {  
        var testFile = TestFile.pdf_signed;
        var settings = populate_options(OptionsBase.DocumentTypeEnum.Pdf, testFile);
        var response = await TestContext.getSignApi().verifySignatures(new VerifySignaturesRequest(settings));
        check_response(response, testFile);
    });

    it("test_verify_qr_code_presentation", async () => {  
        var testFile = TestFile.presentation_signed;
        var settings = populate_options(OptionsBase.DocumentTypeEnum.Presentation, testFile);
        var response = await TestContext.getSignApi().verifySignatures(new VerifySignaturesRequest(settings));
        check_response(response, testFile);
    });

    it("test_verify_qr_code_spreadsheet", async () => {  
        var testFile = TestFile.spreadsheet_signed;
        var settings = populate_options(OptionsBase.DocumentTypeEnum.Spreadsheet, testFile);
        var response = await TestContext.getSignApi().verifySignatures(new VerifySignaturesRequest(settings));
        check_response(response, testFile);
    });

    it("test_verify_qr_code_wordprocessing", async () => {  
        var testFile = TestFile.wordprocessing_signed;
        var settings = populate_options(OptionsBase.DocumentTypeEnum.WordProcessing, testFile);
        var response = await TestContext.getSignApi().verifySignatures(new VerifySignaturesRequest(settings));
        check_response(response, testFile);
    });
  
    function populate_options(documentType: OptionsBase.DocumentTypeEnum, testFile: TestFile)
    {
        var opts = new VerifyQRCodeOptions();
        opts.documentType = documentType;
        opts.signatureType = OptionsBase.SignatureTypeEnum.QRCode;
        opts.qRCodeType = 'Aztec';
        opts.text = 'John Smith';
        opts.matchType = VerifyQRCodeOptions.MatchTypeEnum.Contains;

        opts.page = 1;
        opts.allPages = true;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;

        var settings = new VerifySettings();
        settings.fileInfo = testFile.ToFileInfo();
        settings.options = [opts]
        return settings;
    }

    function check_response(response: VerifyResult, testFile: TestFile)
    {
        expect(response.fileInfo.filePath).to.equal(testFile.GetPath());       
    }    
});

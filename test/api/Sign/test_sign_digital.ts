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
import { OptionsBase, SignDigitalOptions, SaveOptions, 
         SignSettings, CreateSignaturesRequest, SignResult, ObjectExistsRequest} from "../../../src/model";

describe("sign_digital_tests", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    it("test_sign_digital_image", async () => {  
        // Digital signatures are not supported for images
    });

    it("test_sign_digital_pdf", async () => {  
        var testFile = TestFile.pdf_one_page;
        var signedFileName = "Output\\PdfDigitalSigned.pdf";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_digital_presentation", async () => {  
        // Digital signatures are not supported for presentations
    });

    it("test_sign_digital_spreadsheet", async () => {  
        var testFile = TestFile.spreadsheet_xlsx;
        var signedFileName = "Output\\SpreadsheetDigitalSigned.xlsx";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_digital_wordprocessing", async () => {  
        var testFile = TestFile.word_docx;
        var signedFileName = "Output\\WordDigitalSigned.docx";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });
  
    function populate_options(signedFileName: string, testFile: TestFile)
    {
        var opts = new SignDigitalOptions();
        opts.signatureType = OptionsBase.SignatureTypeEnum.Digital;
        opts.imageFilePath = TestFile.additional_signature01.GetPath();
        opts.certificateFilePath = TestFile.additional_pfx.GetPath();
        opts.password = "1234567890";

        var settings = new SignSettings();
        settings.fileInfo = testFile.ToFileInfo();
        settings.options = [opts]
        settings.saveOptions = new SaveOptions();
        settings.saveOptions.outputFilePath = signedFileName;
        return settings;
    }

    async function check_response(response: SignResult, signedFileName: string)
    {
        expect(response.fileInfo.filePath).to.equal(signedFileName);
        // Check signed file
        var request = new ObjectExistsRequest(signedFileName);            
        var eResponse = await TestContext.getStorageApi().objectExists(request);
        expect(eResponse.exists).equals(true);       
    }    
});

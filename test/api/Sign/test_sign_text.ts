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
import { OptionsBase, SaveOptions, SignTextOptions, Padding, Color, SignatureFont,
         PagesSetup, SignSettings, CreateSignaturesRequest, SignResult, ObjectExistsRequest} from "../../../src/model";

describe("sign_text_tests", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    it("test_sign_text_image", async () => {  
        var testFile = TestFile.image_jpg;
        var signedFileName = "Output\\ImageTextSigned.jpg";
        var settings = populate_options(signedFileName, OptionsBase.DocumentTypeEnum.Image, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_text_pdf", async () => {  
        var testFile = TestFile.pdf_one_page;
        var signedFileName = "Output\\PdfTextSigned.pdf";
        var settings = populate_options(signedFileName, OptionsBase.DocumentTypeEnum.Pdf, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_text_presentation", async () => {  
        var testFile = TestFile.presentation_pptx;
        var signedFileName = "Output\\PresentationTextSigned.pptx";
        var settings = populate_options(signedFileName, OptionsBase.DocumentTypeEnum.Presentation, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_text_spreadsheet", async () => {  
        var testFile = TestFile.spreadsheet_xlsx;
        var signedFileName = "Output\\SpreadsheetTextSigned.xlsx";
        var settings = populate_options(signedFileName, OptionsBase.DocumentTypeEnum.Spreadsheet, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_text_wordprocessing", async () => {  
        var testFile = TestFile.word_docx;
        var signedFileName = "Output\\WordTextSigned.docx";
        var settings = populate_options(signedFileName, OptionsBase.DocumentTypeEnum.WordProcessing, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });
  
    function populate_options(signedFileName: string, documentType: OptionsBase.DocumentTypeEnum, testFile: TestFile)
    {
        var opts = new SignTextOptions();
        opts.documentType = documentType;
        opts.signatureType = OptionsBase.SignatureTypeEnum.Text;        
        opts.text = 'John Smith';        

        // set signature position on a page
        opts.left = 100;
        opts.top = 100;
        opts.width = 100;
        opts.height = 100;
        opts.locationMeasureType = SignTextOptions.LocationMeasureTypeEnum.Pixels;
        opts.sizeMeasureType = SignTextOptions.SizeMeasureTypeEnum.Pixels;
        opts.stretch = SignTextOptions.StretchEnum.None;
        opts.rotationAngle = 0;
        opts.horizontalAlignment = SignTextOptions.HorizontalAlignmentEnum.None;
        opts.verticalAlignment = SignTextOptions.VerticalAlignmentEnum.None;
        opts.margin = new Padding();
        opts.margin.all = 5;
        opts.marginMeasureType = SignTextOptions.MarginMeasureTypeEnum.Pixels;

        // set signature appearance
        opts.font = new SignatureFont();
        opts.font.fontFamily = "Arial";
        opts.font.fontSize = 12;
        opts.font.bold = true;
        opts.font.italic = false;
        opts.font.underline = false;

        opts.foreColor = new Color();
        opts.foreColor.web = "BlueViolet";
        opts.borderColor = new Color();
        opts.borderColor.web = "DarkOrange";
        opts.backgroundColor = new Color();
        opts.backgroundColor.web = "DarkOrange";
        opts.borderVisiblity = true;
        opts.borderDashStyle = SignTextOptions.BorderDashStyleEnum.Dash;        

        opts.page = 1;
        opts.allPages = false;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;

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

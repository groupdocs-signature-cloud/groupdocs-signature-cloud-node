/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2021 Aspose Pty Ltd
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
import { OptionsBase, SignBarcodeOptions, SaveOptions, SignTextOptions, Padding, Color,
         SignQRCodeOptions, SignDigitalOptions, SignImageOptions, SignStampOptions, SignatureFont, StampLine, BorderLine,
         PagesSetup, SignSettings, CreateSignaturesRequest, SignResult, ObjectExistsRequest} from "../../../src/model";

describe("sign_collection_tests", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    it("test_sign_collection_image", async () => {  
        var testFile = TestFile.image_jpg;
        var signedFileName = "Output\\ImageCollectionSigned.jpg";
        var settings = populate_options_image(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_collection_pdf", async () => {  
        var testFile = TestFile.pdf_one_page;
        var signedFileName = "Output\\PdfCollectionSigned.pdf";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_collection_presentation", async () => {  
        var testFile = TestFile.presentation_pptx;
        var signedFileName = "Output\\PresentationCollectionSigned.pptx";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_collection_spreadsheet", async () => {  
        var testFile = TestFile.spreadsheet_xlsx;
        var signedFileName = "Output\\SpreadsheetCollectionSigned.xlsx";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    it("test_sign_collection_wordprocessing", async () => {  
        var testFile = TestFile.word_docx;
        var signedFileName = "Output\\WordCollectionSigned.docx";
        var settings = populate_options(signedFileName, testFile);
        var response = await TestContext.getSignApi().createSignatures(new CreateSignaturesRequest(settings));
        await check_response(response, signedFileName);
    });

    function barcode_opts()
    {
        var opts = new SignBarcodeOptions();
        opts.signatureType = OptionsBase.SignatureTypeEnum.Barcode;
        opts.barcodeType = 'Code39Standard';
        opts.text = '123456789012';
        opts.codeTextAlignment = SignBarcodeOptions.CodeTextAlignmentEnum.None;

        // set signature position on a page
        opts.left = 100;
        opts.top = 100;
        opts.width = 300;
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
        opts.foreColor = new Color();
        opts.foreColor.web = "BlueViolet";
        opts.border = new BorderLine();
        opts.border.color = new Color();
        opts.border.color.web = "DarkOrange";
        opts.border.visible = true;
        opts.border.style = BorderLine.StyleEnum.Dash;
        opts.border.weight = 12;

        opts.backgroundColor = new Color();
        opts.backgroundColor.web = "DarkOrange";
        opts.transparency = 0.8;
        opts.innerMargins = new Padding();
        opts.innerMargins.all = 2;

        opts.page = 1;
        opts.allPages = false;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;

        return opts;
    }    

    function qr_code_opts()
    {
        var opts = new SignQRCodeOptions();
        opts.signatureType = OptionsBase.SignatureTypeEnum.QRCode;
        opts.qRCodeType = 'Aztec';
        opts.text = 'John Smith';

        // set signature position on a page
        opts.left = 100;
        opts.top = 100;
        opts.width = 200;
        opts.height = 200;
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
        opts.foreColor = new Color();
        opts.foreColor.web = "BlueViolet";
        opts.border = new BorderLine();
        opts.border.color = new Color();
        opts.border.color.web = "DarkOrange";
        opts.border.visible = true;
        opts.border.style = BorderLine.StyleEnum.Dash;
        opts.border.weight = 12;

        opts.backgroundColor = new Color();
        opts.backgroundColor.web = "DarkOrange";
        opts.transparency = 0.8;
        opts.innerMargins = new Padding();
        opts.innerMargins.all = 2;

        opts.page = 1;
        opts.allPages = false;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;      
        
        return opts;
    }

    function digital_opts()
    {
        var opts = new SignDigitalOptions();
        opts.signatureType = OptionsBase.SignatureTypeEnum.Digital;
        opts.imageFilePath = TestFile.additional_signature01.GetPath();
        opts.certificateFilePath = TestFile.additional_pfx.GetPath();
        opts.password = "1234567890";
        
        return opts;
    }

    function image_opts()
    {
        var opts = new SignImageOptions();
        opts.signatureType = OptionsBase.SignatureTypeEnum.Image;
        opts.imageFilePath = TestFile.image_sign.GetPath();

        // set signature position on a page
        opts.left = 100;
        opts.top = 100;
        opts.width = 200;
        opts.height = 100;
        opts.locationMeasureType = SignTextOptions.LocationMeasureTypeEnum.Pixels;
        opts.sizeMeasureType = SignTextOptions.SizeMeasureTypeEnum.Pixels;
        opts.rotationAngle = 0;
        opts.horizontalAlignment = SignTextOptions.HorizontalAlignmentEnum.None;
        opts.verticalAlignment = SignTextOptions.VerticalAlignmentEnum.None;
        opts.margin = new Padding();
        opts.margin.all = 5;
        opts.marginMeasureType = SignTextOptions.MarginMeasureTypeEnum.Pixels;

        // set signature appearance
        opts.transparency = 0.8;

        opts.page = 1;
        opts.allPages = false;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;
        
        return opts;
    }    

    function text_opts()
    {
        var opts = new SignTextOptions();
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
        opts.border = new BorderLine();
        opts.border.color = new Color();
        opts.border.color.web = "DarkOrange";
        opts.border.visible = true;
        opts.border.style = BorderLine.StyleEnum.Dash;

        opts.backgroundColor = new Color();
        opts.backgroundColor.web = "DarkOrange";    

        opts.page = 1;
        opts.allPages = false;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;

        return opts;
    }    

    function stamp_opts()
    {
        var opts = new SignStampOptions();
        opts.signatureType = OptionsBase.SignatureTypeEnum.Stamp;
        opts.imageFilePath = TestFile.image_sign.GetPath();

        // set signature position on a page
        opts.left = 100;
        opts.top = 100;
        opts.width = 300;
        opts.height = 200;
        opts.locationMeasureType = SignTextOptions.LocationMeasureTypeEnum.Pixels;
        opts.sizeMeasureType = SignTextOptions.SizeMeasureTypeEnum.Pixels;
        opts.rotationAngle = 0;
        opts.horizontalAlignment = SignTextOptions.HorizontalAlignmentEnum.None;
        opts.verticalAlignment = SignTextOptions.VerticalAlignmentEnum.None;
        opts.margin = new Padding();
        opts.margin.all = 5;
        opts.marginMeasureType = SignTextOptions.MarginMeasureTypeEnum.Pixels;

        // set signature appearance
        opts.backgroundColor = new Color();
        opts.backgroundColor.web = "CornflowerBlue";
        opts.backgroundColorCropType = SignStampOptions.BackgroundColorCropTypeEnum.InnerArea;
        opts.backgroundImageCropType = SignStampOptions.BackgroundImageCropTypeEnum.MiddleArea;
        opts.transparency = 0.8;

        var outline = new StampLine();                
        outline.text = "John Smith";
        outline.font = new SignatureFont();
        outline.font.fontFamily = "Arial";
        outline.font.fontSize = 12;
        outline.font.bold = true;
        outline.font.italic = true;
        outline.font.underline = true;
        outline.textBottomIntent = 5;
        outline.textColor = new Color();
        outline.textColor.web = "Gold";
        outline.textRepeatType = StampLine.TextRepeatTypeEnum.FullTextRepeat;
        outline.backgroundColor = new Color();
        outline.backgroundColor.web = "BlueViolet";
        outline.height = 20;
        outline.innerBorder = new BorderLine();
        outline.innerBorder.color = new Color();
        outline.innerBorder.color.web = "DarkOrange";
        outline.innerBorder.style = BorderLine.StyleEnum.LongDash;
        outline.innerBorder.transparency = 0.5;
        outline.innerBorder.weight = 1.2;
        outline.outerBorder = new BorderLine();
        outline.outerBorder.color = new Color();
        outline.outerBorder.color.web = "DarkOrange";
        outline.outerBorder.style = BorderLine.StyleEnum.LongDashDot;
        outline.outerBorder.transparency = 0.7;
        outline.outerBorder.weight = 1.4;
        outline.visible = true;
        opts.outerLines = [outline];

        var innerline = new StampLine();                
        innerline.text = "John Smith";
        innerline.font = new SignatureFont();
        innerline.font.fontFamily = "Times New Roman";
        innerline.font.fontSize = 20;
        innerline.font.bold = true;
        innerline.font.italic = true;
        innerline.font.underline = true;
        innerline.textBottomIntent = 3;
        innerline.textColor = new Color();
        innerline.textColor.web = "Gold";
        innerline.textRepeatType = StampLine.TextRepeatTypeEnum.None;
        innerline.backgroundColor = new Color();
        innerline.backgroundColor.web = "CornflowerBlue";
        innerline.height = 30;
        innerline.innerBorder = new BorderLine();
        innerline.innerBorder.color = new Color();
        innerline.innerBorder.color.web = "OliveDrab";
        innerline.innerBorder.style = BorderLine.StyleEnum.LongDash;
        innerline.innerBorder.transparency = 0.5;
        innerline.innerBorder.weight = 1.2;
        innerline.outerBorder = new BorderLine();
        innerline.outerBorder.color = new Color();
        innerline.outerBorder.color.web = "GhostWhite";
        innerline.outerBorder.style = BorderLine.StyleEnum.LongDashDot;
        innerline.outerBorder.transparency = 0.4;
        innerline.outerBorder.weight = 1.4;
        innerline.visible = true;
        opts.innerLines = [innerline];        

        opts.page = 1;
        opts.allPages = false;
        var ps = new PagesSetup();
        ps.evenPages = false;
        ps.firstPage = true;
        ps.lastPage = false;
        ps.oddPages = false;
        ps.pageNumbers = [1];
        opts.pagesSetup = ps;

        return opts;
    }    

    function populate_options_image(signedFileName: string, testFile: TestFile)
    {
        var settings = new SignSettings();
        settings.fileInfo = testFile.ToFileInfo();
        settings.options = [barcode_opts(),
                            qr_code_opts(),
                            image_opts(),
                            stamp_opts(),
                            text_opts()];
        settings.saveOptions = new SaveOptions();
        settings.saveOptions.outputFilePath = signedFileName;
        return settings;
    }

    function populate_options(signedFileName: string, testFile: TestFile)
    {
        var settings = new SignSettings();
        settings.fileInfo = testFile.ToFileInfo();
        settings.options = [barcode_opts(),
                            qr_code_opts(),
                            digital_opts(),
                            image_opts(),
                            stamp_opts(),
                            text_opts()];
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

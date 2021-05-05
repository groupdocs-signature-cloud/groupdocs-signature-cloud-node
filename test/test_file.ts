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
import { FileInfo } from "../src/model";
/**
 * Describes test file
 */
export class TestFile {

    /**
     * PDF file with one page
     */
    public static pdf_one_page: TestFile =
        new TestFile("01_pages.pdf", "Pdf\\");

    /**
     * Image file
     */
    public static image_jpg: TestFile =
        new TestFile("01_pages.jpg", "Images\\");

    /**
     * Presentation file
     */
    public static presentation_pptx: TestFile =
        new TestFile("01_pages.pptx", "Presentations\\");
        
    /**
     * Spreadsheet file
     */
    public static spreadsheet_xlsx: TestFile =
        new TestFile("01_pages.xlsx", "Spreadsheets\\");
        
    /**
     * Word file
     */
    public static word_docx: TestFile =
        new TestFile("01_pages.docx", "WordProcessing\\");        


    /**
     * Signed image file
     */
    public static image_signed: TestFile =
        new TestFile("SignedForVerificationAll.png", "Signed\\", 27533);  
                                      
    /**
     * Signed pdf file
     */
    public static pdf_signed: TestFile =
        new TestFile("SignedForVerificationAll.pdf", "Signed\\", 164060);  
        
    /**
     * Signed presentation file
     */
    public static presentation_signed: TestFile =
        new TestFile("SignedForVerificationAll.pptx", "Signed\\", 43205);  
        
    /**
     * Signed spreadsheet file
     */
    public static spreadsheet_signed: TestFile =
        new TestFile("SignedForVerificationAll.xlsx", "Signed\\", 318157);  
        
    /**
     * Signed word file
     */
    public static wordprocessing_signed: TestFile =
        new TestFile("SignedForVerificationAll.docx", "Signed\\", 1358290);          


    /**
     * Image signature file
     */
    public static additional_signature01: TestFile =
        new TestFile("signature_01.jpg", "Additional\\");        

    /**
     * Certificate file
     */
    public static additional_pfx: TestFile =
        new TestFile("SherlockHolmes.pfx", "Additional\\");        

    /**
     * Image signature file
     */
    public static image_sign: TestFile =
        new TestFile("JohnSmithSign.png", "Additional\\");        

    /**
     * File name
     */
    public fileName: string;
    
    /**
     * Folder where file is located
     */
    public folder: string;

    /**
     * File size
     */
    public size: number;
    

    /**
     * Returns test file path
     */
    public GetPath() {
        return this.folder + this.fileName;
    }

    /**
     *  Returns FileInfo
     */
    public ToFileInfo()
    {
        let fileInfo = new FileInfo();
        fileInfo.filePath = this.GetPath();        
        return fileInfo;
    }

    private constructor(fileName: string, folder: string, size?: number) {
        this.fileName = fileName;
        this.folder = folder;
        this.size = size;
    }

    public static GetTestFiles() {
        return [
            TestFile.pdf_one_page,
            TestFile.image_jpg,
            TestFile.presentation_pptx,
            TestFile.spreadsheet_xlsx,
            TestFile.word_docx,

            TestFile.image_signed,
            TestFile.pdf_signed,
            TestFile.presentation_signed,
            TestFile.spreadsheet_signed,
            TestFile.wordprocessing_signed,

            TestFile.additional_signature01,
            TestFile.additional_pfx,
            TestFile.image_sign
        ];
    }
}

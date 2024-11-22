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

/**
 * Describes Barcode type
 */
export class BarcodeType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BarcodeType.attributeTypeMap;
    }

    /**
     * Barcode type name
     */
    public name: string;
    
    public constructor(init?: Partial<BarcodeType>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes collection of supported Barcode types
 */
export class BarcodesResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "barcodeTypes",
            baseName: "barcodeTypes",
            type: "Array<BarcodeType>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BarcodesResult.attributeTypeMap;
    }

    /**
     * List of Barcode types
     */
    public barcodeTypes: Array<BarcodeType>;
    
    public constructor(init?: Partial<BarcodesResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Defines base class for settings
 */
export class BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BaseSettings.attributeTypeMap;
    }

    /**
     * File info
     */
    public fileInfo: FileInfo;
    
    public constructor(init?: Partial<BaseSettings>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Instance to keep Border line properties
 */
export class BorderLine {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "style",
            baseName: "style",
            type: "BorderLine.StyleEnum",
        },        
        {
            name: "transparency",
            baseName: "transparency",
            type: "number",
        },        
        {
            name: "weight",
            baseName: "weight",
            type: "number",
        },        
        {
            name: "color",
            baseName: "color",
            type: "Color",
        },        
        {
            name: "visible",
            baseName: "visible",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BorderLine.attributeTypeMap;
    }

    /**
     * Gets or sets the signature border style
     */
    public style: BorderLine.StyleEnum;
    
    /**
     * Gets or sets the signature border transparency (value from 0.0 (opaque) through 1.0 (clear))
     */
    public transparency: number;
    
    /**
     * Gets or sets the weight of the signature border
     */
    public weight: number;
    
    /**
     * Gets or sets the border color of signature
     */
    public color: Color;
    
    /**
     * Gets or sets the border visibility
     */
    public visible: boolean;
    
    public constructor(init?: Partial<BorderLine>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace BorderLine {
    export enum StyleEnum {
        Solid = 'Solid' as any,
        ShortDash = 'ShortDash' as any,
        ShortDot = 'ShortDot' as any,
        ShortDashDot = 'ShortDashDot' as any,
        ShortDashDotDot = 'ShortDashDotDot' as any,
        Dot = 'Dot' as any,
        Dash = 'Dash' as any,
        LongDash = 'LongDash' as any,
        DashDot = 'DashDot' as any,
        LongDashDot = 'LongDashDot' as any,
        LongDashDotDot = 'LongDashDotDot' as any,
        RoundDot = 'RoundDot' as any,
        SquareDot = 'SquareDot' as any,
        DashDotDot = 'DashDotDot' as any,
        DashLongDash = 'DashLongDash' as any,
        DashLongDashDot = 'DashLongDashDot' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents base class for various brushes
 */
export class Brush {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "brushType",
            baseName: "brushType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Brush.attributeTypeMap;
    }

    /**
     * Internal property that specify the current brush type
     */
    public brushType: string;
    
    public constructor(init?: Partial<Brush>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Keep color value
 */
export class Color {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "web",
            baseName: "web",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Color.attributeTypeMap;
    }

    /**
     * HTML string color representation
     */
    public web: string;
    
    public constructor(init?: Partial<Color>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Metered license consumption information
 */
export class ConsumptionResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "credit",
            baseName: "credit",
            type: "number",
        },        
        {
            name: "quantity",
            baseName: "quantity",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConsumptionResult.attributeTypeMap;
    }

    /**
     * Amount of used credits
     */
    public credit: number;
    
    /**
     * Amount of MBs processed
     */
    public quantity: number;
    
    public constructor(init?: Partial<ConsumptionResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base container class for delete signature options
 */
export class DeleteOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "signatureType",
            baseName: "signatureType",
            type: "DeleteOptions.SignatureTypeEnum",
        },        
        {
            name: "signatureId",
            baseName: "signatureId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DeleteOptions.attributeTypeMap;
    }

    /**
     * Specifies the type of signature
     */
    public signatureType: DeleteOptions.SignatureTypeEnum;
    
    /**
     * Unique signature identifier to modify signature in the document over Update or Delete methods. This property will be set automatically after Sign or Search method being called. If this property was saved before it can be set manually to manipulate the signature.              
     */
    public signatureId: string;
    
    public constructor(init?: Partial<DeleteOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DeleteOptions {
    export enum SignatureTypeEnum {
        None = 'None' as any,
        Text = 'Text' as any,
        Image = 'Image' as any,
        Digital = 'Digital' as any,
        Barcode = 'Barcode' as any,
        QRCode = 'QRCode' as any,
        Stamp = 'Stamp' as any,
        FormField = 'FormField' as any,
        Metadata = 'Metadata' as any,
    }
}
// tslint:enable:quotemark
/**
 * Delete result information
 */
export class DeleteResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "succeeded",
            baseName: "succeeded",
            type: "Array<Signature>",
        },        
        {
            name: "failed",
            baseName: "failed",
            type: "Array<Signature>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DeleteResult.attributeTypeMap;
    }

    /**
     * Source document file info
     */
    public fileInfo: FileInfo;
    
    /**
     * Source document size in bytes
     */
    public size: number;
    
    /**
     * List of successfully deleted signatures
     */
    public succeeded: Array<Signature>;
    
    /**
     * List of signatures that were not deleted
     */
    public failed: Array<Signature>;
    
    public constructor(init?: Partial<DeleteResult>) {
        
        Object.assign(this, init);
    }        
}

export class DigitalVBA {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "certificateFilePath",
            baseName: "certificateFilePath",
            type: "string",
        },        
        {
            name: "signOnlyVBAProject",
            baseName: "signOnlyVBAProject",
            type: "boolean",
        },        
        {
            name: "comments",
            baseName: "comments",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DigitalVBA.attributeTypeMap;
    }

    /**
     * Gets or sets the password of digital certificate
     */
    public password: string;
    
    /**
     * Gets or sets the digital certificate file path
     */
    public certificateFilePath: string;
    
    /**
     * Gets or sets setting of only VBA project signing. If set to true, the SpreadSheet document will not be signed, but the VBA project will be signed.             
     */
    public signOnlyVBAProject: boolean;
    
    /**
     * Gets or sets the signature comments.
     */
    public comments: string;
    
    public constructor(init?: Partial<DigitalVBA>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File info
 */
export class FileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileInfo.attributeTypeMap;
    }

    /**
     * File path in storage
     */
    public filePath: string;
    
    /**
     * Storage name
     */
    public storageName: string;
    
    /**
     * Version ID
     */
    public versionId: string;
    
    /**
     * Password to open file
     */
    public password: string;
    
    public constructor(init?: Partial<FileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File format
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File format extension
     */
    public extension: string;
    
    /**
     * File format name
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes list of supported file formats
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Document info result
 */
export class InfoResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "pagesCount",
            baseName: "pagesCount",
            type: "number",
        },        
        {
            name: "dateCreated",
            baseName: "dateCreated",
            type: "Date",
        },        
        {
            name: "dateModified",
            baseName: "dateModified",
            type: "Date",
        },        
        {
            name: "widthForMaxHeight",
            baseName: "widthForMaxHeight",
            type: "number",
        },        
        {
            name: "maxPageHeight",
            baseName: "maxPageHeight",
            type: "number",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageInfo>",
        },        
        {
            name: "signatures",
            baseName: "signatures",
            type: "Array<Signature>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * Input File info
     */
    public fileInfo: FileInfo;
    
    /**
     * Document extension
     */
    public extension: string;
    
    /**
     * Document file format
     */
    public fileFormat: string;
    
    /**
     * Document size in bytes
     */
    public size: number;
    
    /**
     * Count of pages in document
     */
    public pagesCount: number;
    
    /**
     * Document created date
     */
    public dateCreated: Date;
    
    /**
     * Document modification date
     */
    public dateModified: Date;
    
    /**
     * Specifies width for max height of document page
     */
    public widthForMaxHeight: number;
    
    /**
     * Specifies max page height
     */
    public maxPageHeight: number;
    
    /**
     * List of document pages descriptions
     */
    public pages: Array<PageInfo>;
    
    /**
     * Collection of document signatures
     */
    public signatures: Array<Signature>;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base container class for all possible options data
 */
export class OptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "signatureType",
            baseName: "signatureType",
            type: "OptionsBase.SignatureTypeEnum",
        },        
        {
            name: "page",
            baseName: "page",
            type: "number",
        },        
        {
            name: "allPages",
            baseName: "allPages",
            type: "boolean",
        },        
        {
            name: "pagesSetup",
            baseName: "pagesSetup",
            type: "PagesSetup",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OptionsBase.attributeTypeMap;
    }

    /**
     * Specifies the signature type of processing
     */
    public signatureType: OptionsBase.SignatureTypeEnum;
    
    /**
     * Gets or sets a document page number for processing. Value is optional
     */
    public page: number;
    
    /**
     * Process all document pages. Type of processing depends on SignatureType For Images Document Type it can be used only for multi-frames images like .tiff
     */
    public allPages: boolean;
    
    /**
     * Options to specify pages for processing
     */
    public pagesSetup: PagesSetup;
    
    public constructor(init?: Partial<OptionsBase>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OptionsBase {
    export enum SignatureTypeEnum {
        None = 'None' as any,
        Text = 'Text' as any,
        Image = 'Image' as any,
        Digital = 'Digital' as any,
        Barcode = 'Barcode' as any,
        QRCode = 'QRCode' as any,
        Stamp = 'Stamp' as any,
        FormField = 'FormField' as any,
        Metadata = 'Metadata' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents padding or margin information associated with element
 */
export class Padding {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "all",
            baseName: "all",
            type: "number",
        },        
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "right",
            baseName: "right",
            type: "number",
        },        
        {
            name: "bottom",
            baseName: "bottom",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Padding.attributeTypeMap;
    }

    /**
     * Gets or sets the padding value for all the edges
     */
    public all: number;
    
    /**
     * Gets or sets the padding value for the left edge
     */
    public left: number;
    
    /**
     * Gets or sets the padding value for the top edge
     */
    public top: number;
    
    /**
     * Gets or sets the padding value for the right edge
     */
    public right: number;
    
    /**
     * Gets or sets the padding value for the bottom edge
     */
    public bottom: number;
    
    public constructor(init?: Partial<Padding>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Page information
 */
export class PageInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "number",
            baseName: "number",
            type: "number",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "angle",
            baseName: "angle",
            type: "number",
        },        
        {
            name: "visible",
            baseName: "visible",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * Page number
     */
    public number: number;
    
    /**
     * Page name
     */
    public name: string;
    
    /**
     * Page width
     */
    public width: number;
    
    /**
     * Page height
     */
    public height: number;
    
    /**
     * Page angle
     */
    public angle: number;
    
    /**
     * Page visibility
     */
    public visible: boolean;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes special pages of document to process
 */
export class PagesSetup {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "firstPage",
            baseName: "firstPage",
            type: "boolean",
        },        
        {
            name: "lastPage",
            baseName: "lastPage",
            type: "boolean",
        },        
        {
            name: "oddPages",
            baseName: "oddPages",
            type: "boolean",
        },        
        {
            name: "evenPages",
            baseName: "evenPages",
            type: "boolean",
        },        
        {
            name: "pageNumbers",
            baseName: "pageNumbers",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PagesSetup.attributeTypeMap;
    }

    /**
     * Get or set flag to use first document page
     */
    public firstPage: boolean;
    
    /**
     * Get or set flag to use last document page
     */
    public lastPage: boolean;
    
    /**
     * Get or set flag to use odd pages of document
     */
    public oddPages: boolean;
    
    /**
     * Get or set flag to use even pages of document
     */
    public evenPages: boolean;
    
    /**
     * Set arbitrary pages of document to use
     */
    public pageNumbers: Array<number>;
    
    public constructor(init?: Partial<PagesSetup>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Contains pdf digital Signature properties
 */
export class PdfDigitalSignature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "contactInfo",
            baseName: "contactInfo",
            type: "string",
        },        
        {
            name: "location",
            baseName: "location",
            type: "string",
        },        
        {
            name: "reason",
            baseName: "reason",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "PdfDigitalSignature.TypeEnum",
        },        
        {
            name: "timeStamp",
            baseName: "timeStamp",
            type: "TimeStamp",
        },        
        {
            name: "showProperties",
            baseName: "showProperties",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignature.attributeTypeMap;
    }

    /**
     * Information provided by the signer to enable a recipient to contact the signer
     */
    public contactInfo: string;
    
    /**
     * The CPU host name or physical location of the signing.
     */
    public location: string;
    
    /**
     * The reason for the signing, such as (I agreeРІР‚В¦).
     */
    public reason: string;
    
    /**
     * Type of Pdf digital signature.
     */
    public type: PdfDigitalSignature.TypeEnum;
    
    /**
     * Time stamp for Pdf digital signature. Default value is null.
     */
    public timeStamp: TimeStamp;
    
    /**
     * Force to show/hide signature properties
     */
    public showProperties: boolean;
    
    public constructor(init?: Partial<PdfDigitalSignature>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDigitalSignature {
    export enum TypeEnum {
        Signature = 'Signature' as any,
        Certificate = 'Certificate' as any,
    }
}
// tslint:enable:quotemark
/**
 * Document preview page
 */
export class PreviewPage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        },        
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "downloadUrl",
            baseName: "downloadUrl",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PreviewPage.attributeTypeMap;
    }

    /**
     * Page number
     */
    public pageNumber: number;
    
    /**
     * Page file path in storage
     */
    public filePath: string;
    
    /**
     * Page file size
     */
    public size: number;
    
    /**
     * Download url
     */
    public downloadUrl: string;
    
    public constructor(init?: Partial<PreviewPage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Document preview result
 */
export class PreviewResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "pagesCount",
            baseName: "pagesCount",
            type: "number",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PreviewPage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PreviewResult.attributeTypeMap;
    }

    /**
     * Input File info
     */
    public fileInfo: FileInfo;
    
    /**
     * Input File size
     */
    public size: number;
    
    /**
     * Count of pages
     */
    public pagesCount: number;
    
    /**
     * Document preview pages
     */
    public pages: Array<PreviewPage>;
    
    public constructor(init?: Partial<PreviewResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes QR-code type
 */
export class QRCodeType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return QRCodeType.attributeTypeMap;
    }

    /**
     * QR-code type name
     */
    public name: string;
    
    public constructor(init?: Partial<QRCodeType>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes collection of supported QR-code types
 */
export class QRCodesResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "qRCodeTypes",
            baseName: "qrCodeTypes",
            type: "Array<QRCodeType>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return QRCodesResult.attributeTypeMap;
    }

    /**
     * List of QRCode Types
     */
    public qRCodeTypes: Array<QRCodeType>;
    
    public constructor(init?: Partial<QRCodesResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base document save options class
 */
export class SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "overwriteExisting",
            baseName: "overwriteExisting",
            type: "boolean",
        },        
        {
            name: "outputFilePath",
            baseName: "outputFilePath",
            type: "string",
        },        
        {
            name: "saveFormat",
            baseName: "saveFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptions.attributeTypeMap;
    }

    /**
     * Overwrite existing file with new output file. Otherwise new file will be created with number as suffix
     */
    public overwriteExisting: boolean;
    
    /**
     * Output file name
     */
    public outputFilePath: string;
    
    /**
     * format of save
     */
    public saveFormat: string;
    
    public constructor(init?: Partial<SaveOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Search result information
 */
export class SearchResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "signatures",
            baseName: "signatures",
            type: "Array<Signature>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SearchResult.attributeTypeMap;
    }

    /**
     * Processed file info
     */
    public fileInfo: FileInfo;
    
    /**
     * Size in bytes
     */
    public size: number;
    
    /**
     * List of document signatures that were found during search
     */
    public signatures: Array<Signature>;
    
    public constructor(init?: Partial<SearchResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Sign result information
 */
export class SignResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "downloadUrl",
            baseName: "downloadUrl",
            type: "string",
        },        
        {
            name: "succeeded",
            baseName: "succeeded",
            type: "Array<Signature>",
        },        
        {
            name: "failed",
            baseName: "failed",
            type: "Array<Signature>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SignResult.attributeTypeMap;
    }

    /**
     * Signed file info
     */
    public fileInfo: FileInfo;
    
    /**
     * Source document size in bytes
     */
    public size: number;
    
    /**
     * ULR to retrieve signed file
     */
    public downloadUrl: string;
    
    /**
     * List of newly created signatures
     */
    public succeeded: Array<Signature>;
    
    /**
     * List of signatures that were failed to create
     */
    public failed: Array<Signature>;
    
    public constructor(init?: Partial<SignResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes base class for signatures
 */
export class Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "signatureType",
            baseName: "signatureType",
            type: "Signature.SignatureTypeEnum",
        },        
        {
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        },        
        {
            name: "signatureId",
            baseName: "signatureId",
            type: "string",
        },        
        {
            name: "isSignature",
            baseName: "isSignature",
            type: "boolean",
        },        
        {
            name: "createdOn",
            baseName: "createdOn",
            type: "Date",
        },        
        {
            name: "modifiedOn",
            baseName: "modifiedOn",
            type: "Date",
        },        
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Signature.attributeTypeMap;
    }

    /**
     * Specifies the signature type (Text, Image, Digital, Barcode, QRCode, Stamp)
     */
    public signatureType: Signature.SignatureTypeEnum;
    
    /**
     * Specifies the page signature was found on
     */
    public pageNumber: number;
    
    /**
     * Unique signature identifier to modify signature in the document over Update or Delete methods. This property will be set automatically after Sign or Search method being called. If this property was saved before it can be set manually to manipulate the signature.
     */
    public signatureId: string;
    
    /**
     * Get or set flag to indicate if this component is Signature or document content. This property is being used with Update method to set element as signature (true) or document element (false).             
     */
    public isSignature: boolean;
    
    /**
     * Get or set the signature creation date
     */
    public createdOn: Date;
    
    /**
     * Get or set the signature modification date
     */
    public modifiedOn: Date;
    
    /**
     * Specifies top position of signature
     */
    public top: number;
    
    /**
     * Specifies left position of signature
     */
    public left: number;
    
    /**
     * Specifies width of signature
     */
    public width: number;
    
    /**
     * Specifies height of signature
     */
    public height: number;
    
    public constructor(init?: Partial<Signature>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Signature {
    export enum SignatureTypeEnum {
        None = 'None' as any,
        Text = 'Text' as any,
        Image = 'Image' as any,
        Digital = 'Digital' as any,
        Barcode = 'Barcode' as any,
        QRCode = 'QRCode' as any,
        Stamp = 'Stamp' as any,
        FormField = 'FormField' as any,
        Metadata = 'Metadata' as any,
    }
}
// tslint:enable:quotemark
/**
 * Appearance is a base class for keeping additional information for various options
 */
export class SignatureAppearance {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appearanceType",
            baseName: "appearanceType",
            type: "SignatureAppearance.AppearanceTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SignatureAppearance.attributeTypeMap;
    }

    /**
     * Specifies the type of appearance
     */
    public appearanceType: SignatureAppearance.AppearanceTypeEnum;
    
    public constructor(init?: Partial<SignatureAppearance>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignatureAppearance {
    export enum AppearanceTypeEnum {
        Undefined = 'Undefined' as any,
        PdfTextAnnotation = 'PdfTextAnnotation' as any,
        PdfTextSticker = 'PdfTextSticker' as any,
        Image = 'Image' as any,
        DigitalSignature = 'DigitalSignature' as any,
        PdfDigitalSignature = 'PdfDigitalSignature' as any,
    }
}
// tslint:enable:quotemark
/**
 * Create instance of SignatureFont class to specify Font properties
 */
export class SignatureFont {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fontFamily",
            baseName: "fontFamily",
            type: "string",
        },        
        {
            name: "fontSize",
            baseName: "fontSize",
            type: "number",
        },        
        {
            name: "bold",
            baseName: "bold",
            type: "boolean",
        },        
        {
            name: "italic",
            baseName: "italic",
            type: "boolean",
        },        
        {
            name: "underline",
            baseName: "underline",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SignatureFont.attributeTypeMap;
    }

    /**
     * Font Family Name
     */
    public fontFamily: string;
    
    /**
     * Font Size 
     */
    public fontSize: number;
    
    /**
     * Apply Font Bold Style
     */
    public bold: boolean;
    
    /**
     * Apply Font Italic Style
     */
    public italic: boolean;
    
    /**
     * Apply Underline Style
     */
    public underline: boolean;
    
    public constructor(init?: Partial<SignatureFont>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Specify Stamp line properties
 */
export class StampLine {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "backgroundColor",
            baseName: "backgroundColor",
            type: "Color",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "font",
            baseName: "font",
            type: "SignatureFont",
        },        
        {
            name: "textColor",
            baseName: "textColor",
            type: "Color",
        },        
        {
            name: "textBottomIntent",
            baseName: "textBottomIntent",
            type: "number",
        },        
        {
            name: "textRepeatType",
            baseName: "textRepeatType",
            type: "StampLine.TextRepeatTypeEnum",
        },        
        {
            name: "outerBorder",
            baseName: "outerBorder",
            type: "BorderLine",
        },        
        {
            name: "innerBorder",
            baseName: "innerBorder",
            type: "BorderLine",
        },        
        {
            name: "visible",
            baseName: "visible",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StampLine.attributeTypeMap;
    }

    /**
     * Gets or sets the line height on Stamp
     */
    public height: number;
    
    /**
     * Gets or sets the background color of signature
     */
    public backgroundColor: Color;
    
    /**
     * Gets or sets the text of stamp line
     */
    public text: string;
    
    /**
     * Get or set Font of Stamp Line text
     */
    public font: SignatureFont;
    
    /**
     * Gets or sets the text color of signature
     */
    public textColor: Color;
    
    /**
     * Gets or sets the bottom intent of text
     */
    public textBottomIntent: number;
    
    /**
     * Gets or sets text repeat type
     */
    public textRepeatType: StampLine.TextRepeatTypeEnum;
    
    /**
     * Setup Outer Border
     */
    public outerBorder: BorderLine;
    
    /**
     * Setup Internal Border
     */
    public innerBorder: BorderLine;
    
    /**
     * Get and set visibility of Stamp Line
     */
    public visible: boolean;
    
    public constructor(init?: Partial<StampLine>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StampLine {
    export enum TextRepeatTypeEnum {
        None = 'None' as any,
        FullTextRepeat = 'FullTextRepeat' as any,
        RepeatWithTruncation = 'RepeatWithTruncation' as any,
    }
}
// tslint:enable:quotemark
/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents data to get time stamp from third-party site.
 */
export class TimeStamp {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "url",
            baseName: "url",
            type: "string",
        },        
        {
            name: "user",
            baseName: "user",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TimeStamp.attributeTypeMap;
    }

    /**
     * Url of third-party site.
     */
    public url: string;
    
    /**
     * User.
     */
    public user: string;
    
    /**
     * Password.
     */
    public password: string;
    
    public constructor(init?: Partial<TimeStamp>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base container class for update signature options
 */
export class UpdateOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "signatureType",
            baseName: "signatureType",
            type: "UpdateOptions.SignatureTypeEnum",
        },        
        {
            name: "signatureId",
            baseName: "signatureId",
            type: "string",
        },        
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "isSignature",
            baseName: "isSignature",
            type: "boolean",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return UpdateOptions.attributeTypeMap;
    }

    /**
     * Specifies the type of signature
     */
    public signatureType: UpdateOptions.SignatureTypeEnum;
    
    /**
     * Unique signature identifier to modify signature in the document over Update or Delete methods. This property will be set automatically after Sign or Search method being called. If this property was saved before it can be set manually to manipulate the signature.              
     */
    public signatureId: string;
    
    /**
     * Specifies left position of signature
     */
    public left: number;
    
    /**
     * Specifies top position of signature
     */
    public top: number;
    
    /**
     * Specifies width of signature
     */
    public width: number;
    
    /**
     * Specifies height of signature
     */
    public height: number;
    
    /**
     * Get or set flag to indicate if this component is Signature or document content. This property is being used with Update method to set element as signature (true) or document element (false).             
     */
    public isSignature: boolean;
    
    /**
     * The text to update text signature
     */
    public text: string;
    
    public constructor(init?: Partial<UpdateOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace UpdateOptions {
    export enum SignatureTypeEnum {
        None = 'None' as any,
        Text = 'Text' as any,
        Image = 'Image' as any,
        Digital = 'Digital' as any,
        Barcode = 'Barcode' as any,
        QRCode = 'QRCode' as any,
        Stamp = 'Stamp' as any,
        FormField = 'FormField' as any,
        Metadata = 'Metadata' as any,
    }
}
// tslint:enable:quotemark
/**
 * Update result information
 */
export class UpdateResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "succeeded",
            baseName: "succeeded",
            type: "Array<Signature>",
        },        
        {
            name: "failed",
            baseName: "failed",
            type: "Array<Signature>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return UpdateResult.attributeTypeMap;
    }

    /**
     * Updated document file info
     */
    public fileInfo: FileInfo;
    
    /**
     * Source document size in bytes
     */
    public size: number;
    
    /**
     * List of successfully modified signatures
     */
    public succeeded: Array<Signature>;
    
    /**
     * List of signatures that were not updated
     */
    public failed: Array<Signature>;
    
    public constructor(init?: Partial<UpdateResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Verification result information
 */
export class VerifyResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "isSuccess",
            baseName: "isSuccess",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VerifyResult.attributeTypeMap;
    }

    /**
     * Processed document file info
     */
    public fileInfo: FileInfo;
    
    /**
     * Processed document size in bytes
     */
    public size: number;
    
    /**
     * Indicates whether document contains signatures that meet verification criteria
     */
    public isSuccess: boolean;
    
    public constructor(init?: Partial<VerifyResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Contains Barcode signature properties
 */
export class BarcodeSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "barcodeType",
            baseName: "barcodeType",
            type: "string",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BarcodeSignature.attributeTypeMap);
    }

    /**
     * Specifies the Barcode type
     */
    public barcodeType: string;
    
    /**
     * Specifies text of Bar-code
     */
    public text: string;
    
    /**
     * Specifies the format of Barcode signature image.
     */
    public format: string;
    
    public constructor(init?: Partial<BarcodeSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace BarcodeSignature {
}
// tslint:enable:quotemark
/**
 * Defines delete sign document settings
 */
export class DeleteSettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "options",
            baseName: "options",
            type: "Array<DeleteOptions>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DeleteSettings.attributeTypeMap);
    }

    /**
     * Gets or sets options to perform signatures delete
     */
    public options: Array<DeleteOptions>;
    
    public constructor(init?: Partial<DeleteSettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Contains digital Signature properties
 */
export class DigitalSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "comments",
            baseName: "comments",
            type: "string",
        },        
        {
            name: "isValid",
            baseName: "isValid",
            type: "boolean",
        },        
        {
            name: "signTime",
            baseName: "signTime",
            type: "Date",
        },        
        {
            name: "pdfDigitalSignature",
            baseName: "pdfDigitalSignature",
            type: "PdfDigitalSignature",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DigitalSignature.attributeTypeMap);
    }

    /**
     * Gets or sets the signing purpose comment
     */
    public comments: string;
    
    /**
     * Keeps true if this digital signature is valid and the document has not been tampered with
     */
    public isValid: boolean;
    
    /**
     * Gets or sets the time the document was signed
     */
    public signTime: Date;
    
    /**
     * Pdf digital signature properties
     */
    public pdfDigitalSignature: PdfDigitalSignature;
    
    public constructor(init?: Partial<DigitalSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DigitalSignature {
}
// tslint:enable:quotemark
/**
 * Describes appearance of Signature Line for Digital Signature. One Signature Line could be applied for only one Digital Signature. Signature Line always is on the first page. This feature may be useful for .docx, .doc, .odt and .xlsx file formats.
 */
export class DigitalSignatureAppearance extends SignatureAppearance {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "email",
            baseName: "email",
            type: "string",
        },        
        {
            name: "signer",
            baseName: "signer",
            type: "string",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DigitalSignatureAppearance.attributeTypeMap);
    }

    /**
     * Gets or sets a email that will be displayed in signature line.
     */
    public email: string;
    
    /**
     * Gets or sets signer name for signature line.
     */
    public signer: string;
    
    /**
     * Gets or sets a title for signature line.
     */
    public title: string;
    
    public constructor(init?: Partial<DigitalSignatureAppearance>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DigitalSignatureAppearance {
}
// tslint:enable:quotemark
/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Contains Form field signature properties
 */
export class FormFieldSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "FormFieldSignature.TypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldSignature.attributeTypeMap);
    }

    /**
     * Specifies unique form field name
     */
    public name: string;
    
    /**
     * Specifies Form field type
     */
    public type: FormFieldSignature.TypeEnum;
    
    public constructor(init?: Partial<FormFieldSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FormFieldSignature {
    export enum TypeEnum {
        Text = 'Text' as any,
        Checkbox = 'Checkbox' as any,
        Combobox = 'Combobox' as any,
        DigitalSignature = 'DigitalSignature' as any,
        Radio = 'Radio' as any,
        None = 'None' as any,
    }
}
// tslint:enable:quotemark
/**
 * Describes extended appearance features for Image Signature.
 */
export class ImageAppearance extends SignatureAppearance {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "brightness",
            baseName: "brightness",
            type: "number",
        },        
        {
            name: "contrast",
            baseName: "contrast",
            type: "number",
        },        
        {
            name: "gammaCorrection",
            baseName: "gammaCorrection",
            type: "number",
        },        
        {
            name: "grayscale",
            baseName: "grayscale",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageAppearance.attributeTypeMap);
    }

    /**
     * Gets or sets image brightness. Default value is 1 it corresponds to original brightness of image.
     */
    public brightness: number;
    
    /**
     * Gets or sets image contrast. Default value is 1 it corresponds to original contrast of image.
     */
    public contrast: number;
    
    /**
     * Gets or sets image gamma. Default value is 1 it corresponds to original gamma of image.
     */
    public gammaCorrection: number;
    
    /**
     * Setup this flag to true if gray-scale filter is required.
     */
    public grayscale: boolean;
    
    public constructor(init?: Partial<ImageAppearance>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ImageAppearance {
}
// tslint:enable:quotemark
/**
 * Contains Image signature properties             
 */
export class ImageSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageSignature.attributeTypeMap);
    }

    /**
     * Specifies the image size
     */
    public size: number;
    
    /**
     * Specifies the format of image
     */
    public format: string;
    
    public constructor(init?: Partial<ImageSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ImageSignature {
}
// tslint:enable:quotemark
/**
 * Defines document information request settings
 */
export class InfoSettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "showDeletedSignaturesInfo",
            baseName: "showDeletedSignaturesInfo",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InfoSettings.attributeTypeMap);
    }

    /**
     * Gets or sets flag that includes deleted signatures into Document Info result.
     */
    public showDeletedSignaturesInfo: boolean;
    
    public constructor(init?: Partial<InfoSettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents linear gradient brush
 */
export class LinearGradientBrush extends Brush {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startColor",
            baseName: "startColor",
            type: "Color",
        },        
        {
            name: "endColor",
            baseName: "endColor",
            type: "Color",
        },        
        {
            name: "angle",
            baseName: "angle",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LinearGradientBrush.attributeTypeMap);
    }

    /**
     * Gets or sets start gradient color
     */
    public startColor: Color;
    
    /**
     * Gets or sets finish gradient color
     */
    public endColor: Color;
    
    /**
     * Gets or sets gradient angle
     */
    public angle: number;
    
    public constructor(init?: Partial<LinearGradientBrush>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Contains Metadata signature properties.
 */
export class MetadataSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "type",
            baseName: "type",
            type: "MetadataSignature.TypeEnum",
        },        
        {
            name: "dataType",
            baseName: "dataType",
            type: "MetadataSignature.DataTypeEnum",
        },        
        {
            name: "value",
            baseName: "value",
            type: "string",
        },        
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "id",
            baseName: "id",
            type: "number",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "tagPrefix",
            baseName: "tagPrefix",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MetadataSignature.attributeTypeMap);
    }

    /**
     * Specifies metadata type.
     */
    public type: MetadataSignature.TypeEnum;
    
    /**
     * Specifies metadata value type.
     */
    public dataType: MetadataSignature.DataTypeEnum;
    
    /**
     * Specifies metadata object value
     */
    public value: string;
    
    /**
     * Specifies unique metadata name
     */
    public name: string;
    
    /**
     * The identifier of Image Metadata signature. See GroupDocs.Signature.Domain.ImageMetadataSignatures class that contains standard Signature with predefined Id value.
     */
    public id: number;
    
    /**
     * Size of  Image Metadata value
     */
    public size: number;
    
    /**
     * Description for standard Image Metadata signature
     */
    public description: string;
    
    /**
     * The prefix tag of Pdf Metadata signature name. By default this property is set to \"xmp\". Possible values are
     */
    public tagPrefix: string;
    
    public constructor(init?: Partial<MetadataSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace MetadataSignature {
    export enum TypeEnum {
        None = 'None' as any,
        Certificate = 'Certificate' as any,
        Image = 'Image' as any,
        Pdf = 'Pdf' as any,
        Presentation = 'Presentation' as any,
        Spreadsheet = 'Spreadsheet' as any,
        WordProcessing = 'WordProcessing' as any,
    }
    export enum DataTypeEnum {
        Undefined = 'Undefined' as any,
        Boolean = 'Boolean' as any,
        Integer = 'Integer' as any,
        Double = 'Double' as any,
        DateTime = 'DateTime' as any,
        String = 'String' as any,
    }
}
// tslint:enable:quotemark
/**
 * Describes appearance of Digital Signature are on PDF documents.
 */
export class PdfDigitalSignatureAppearance extends SignatureAppearance {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "background",
            baseName: "background",
            type: "Color",
        },        
        {
            name: "contactInfoLabel",
            baseName: "contactInfoLabel",
            type: "string",
        },        
        {
            name: "dateSignedAtLabel",
            baseName: "dateSignedAtLabel",
            type: "string",
        },        
        {
            name: "digitalSignedLabel",
            baseName: "digitalSignedLabel",
            type: "string",
        },        
        {
            name: "fontFamilyName",
            baseName: "fontFamilyName",
            type: "string",
        },        
        {
            name: "fontSize",
            baseName: "fontSize",
            type: "number",
        },        
        {
            name: "locationLabel",
            baseName: "locationLabel",
            type: "string",
        },        
        {
            name: "reasonLabel",
            baseName: "reasonLabel",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfDigitalSignatureAppearance.attributeTypeMap);
    }

    /**
     * Get or set background color of signature appearance. By default the value is SystemColors.Windows
     */
    public background: Color;
    
    /**
     * Gets or sets contact info label. Default value: \"Contact\". if this value is empty then no contact label will appear on digital signature area.             
     */
    public contactInfoLabel: string;
    
    /**
     * Gets or sets date signed label. Default value: \"Date\".
     */
    public dateSignedAtLabel: string;
    
    /**
     * Gets or sets digital signed label. Default value: \"Digitally signed by\".
     */
    public digitalSignedLabel: string;
    
    /**
     * Gets or sets the Font family name to display the labels. Default value is \"Arial\".
     */
    public fontFamilyName: string;
    
    /**
     * Gets or sets the Font size to display the labels. Default value is 10.
     */
    public fontSize: number;
    
    /**
     * Gets or sets location label. Default value: \"Location\". if this value is empty then no location label will appear on digital signature area.
     */
    public locationLabel: string;
    
    /**
     * Gets or sets reason label. Default value: \"Reason\". if this value is empty then no reason label will appear on digital signature area.
     */
    public reasonLabel: string;
    
    public constructor(init?: Partial<PdfDigitalSignatureAppearance>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDigitalSignatureAppearance {
}
// tslint:enable:quotemark
/**
 * Describes appearance of PDF text annotation object (Title, Subject, Content).
 */
export class PdfTextAnnotationAppearance extends SignatureAppearance {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "border",
            baseName: "border",
            type: "BorderLine",
        },        
        {
            name: "borderEffect",
            baseName: "borderEffect",
            type: "PdfTextAnnotationAppearance.BorderEffectEnum",
        },        
        {
            name: "borderEffectIntensity",
            baseName: "borderEffectIntensity",
            type: "number",
        },        
        {
            name: "contents",
            baseName: "contents",
            type: "string",
        },        
        {
            name: "hCornerRadius",
            baseName: "hCornerRadius",
            type: "number",
        },        
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        },        
        {
            name: "vCornerRadius",
            baseName: "vCornerRadius",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfTextAnnotationAppearance.attributeTypeMap);
    }

    /**
     * Represents border appearance
     */
    public border: BorderLine;
    
    /**
     * Gets or sets border effect.
     */
    public borderEffect: PdfTextAnnotationAppearance.BorderEffectEnum;
    
    /**
     * Gets or sets border effect intensity. Valid range of value is [0..2].
     */
    public borderEffectIntensity: number;
    
    /**
     * Gets or sets content of annotation object.
     */
    public contents: string;
    
    /**
     * Gets or sets horizontal corner radius.
     */
    public hCornerRadius: number;
    
    /**
     * Gets or sets Subject representing description of the object.
     */
    public subject: string;
    
    /**
     * Gets or sets a Title that will be displayed in title bar of annotation object.
     */
    public title: string;
    
    /**
     * Gets or sets vertical corner radius.
     */
    public vCornerRadius: number;
    
    public constructor(init?: Partial<PdfTextAnnotationAppearance>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfTextAnnotationAppearance {
    export enum BorderEffectEnum {
        None = 'None' as any,
        Cloudy = 'Cloudy' as any,
    }
}
// tslint:enable:quotemark
/**
 * Describes appearance of PDF text annotation sticker object and pop-up window of sticker.
 */
export class PdfTextStickerAppearance extends SignatureAppearance {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "contents",
            baseName: "contents",
            type: "string",
        },        
        {
            name: "icon",
            baseName: "icon",
            type: "PdfTextStickerAppearance.IconEnum",
        },        
        {
            name: "opened",
            baseName: "opened",
            type: "boolean",
        },        
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfTextStickerAppearance.attributeTypeMap);
    }

    /**
     * Gets or sets the contents of pop-up window.
     */
    public contents: string;
    
    /**
     * Gets or sets the icon of sticker.
     */
    public icon: PdfTextStickerAppearance.IconEnum;
    
    /**
     * Setup if sticker pop-up window will be opened by default.
     */
    public opened: boolean;
    
    /**
     * Gets or sets subject.
     */
    public subject: string;
    
    /**
     * Gets or sets title of pop-up window.
     */
    public title: string;
    
    public constructor(init?: Partial<PdfTextStickerAppearance>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfTextStickerAppearance {
    export enum IconEnum {
        Note = 'Note' as any,
        Comment = 'Comment' as any,
        Key = 'Key' as any,
        Help = 'Help' as any,
        NewParagraph = 'NewParagraph' as any,
        Paragraph = 'Paragraph' as any,
        Insert = 'Insert' as any,
        Check = 'Check' as any,
        Cross = 'Cross' as any,
        Circle = 'Circle' as any,
        Star = 'Star' as any,
    }
}
// tslint:enable:quotemark
/**
 * Defines preview request settings
 */
export class PreviewSettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "resolution",
            baseName: "resolution",
            type: "number",
        },        
        {
            name: "pageNumbers",
            baseName: "pageNumbers",
            type: "Array<number>",
        },        
        {
            name: "previewFormat",
            baseName: "previewFormat",
            type: "PreviewSettings.PreviewFormatEnum",
        },        
        {
            name: "hideSignatures",
            baseName: "hideSignatures",
            type: "boolean",
        },        
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PreviewSettings.attributeTypeMap);
    }

    /**
     * Preview images width
     */
    public width: number;
    
    /**
     * Preview images height
     */
    public height: number;
    
    /**
     * Gets or sets the resolution of the preview images in DPI (dots per inch).
     */
    public resolution: number;
    
    /**
     * Preview page numbers
     */
    public pageNumbers: Array<number>;
    
    /**
     * Preview format
     */
    public previewFormat: PreviewSettings.PreviewFormatEnum;
    
    /**
     * Flag to hide signatures from page preview image. Only signatures are marked as IsSignature will be hidden from generated document page image
     */
    public hideSignatures: boolean;
    
    /**
     * Set path for output pages. If not set then default path used.
     */
    public outputPath: string;
    
    public constructor(init?: Partial<PreviewSettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PreviewSettings {
    export enum PreviewFormatEnum {
        PNG = 'PNG' as any,
        JPEG = 'JPEG' as any,
        BMP = 'BMP' as any,
    }
}
// tslint:enable:quotemark
/**
 * Contains QRCode signature properties
 */
export class QRCodeSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "qRCodeType",
            baseName: "qrCodeType",
            type: "string",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(QRCodeSignature.attributeTypeMap);
    }

    /**
     * Specifies the QRCode type
     */
    public qRCodeType: string;
    
    /**
     * Specifies text of Barcode
     */
    public text: string;
    
    /**
     * Specifies the format of QR-code signature image.
     */
    public format: string;
    
    public constructor(init?: Partial<QRCodeSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace QRCodeSignature {
}
// tslint:enable:quotemark
/**
 * Represents radial gradient brush
 */
export class RadialGradientBrush extends Brush {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "innerColor",
            baseName: "innerColor",
            type: "Color",
        },        
        {
            name: "outerColor",
            baseName: "outerColor",
            type: "Color",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RadialGradientBrush.attributeTypeMap);
    }

    /**
     * Gets or sets inner gradient color
     */
    public innerColor: Color;
    
    /**
     * Gets or sets outer gradient color
     */
    public outerColor: Color;
    
    public constructor(init?: Partial<RadialGradientBrush>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Defines options for signature Search within a document
 */
export class SearchOptions extends OptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<SearchOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SearchOptions {
}
// tslint:enable:quotemark
/**
 * Defines signatures search settings request
 */
export class SearchSettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "options",
            baseName: "options",
            type: "Array<SearchOptions>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchSettings.attributeTypeMap);
    }

    /**
     * Gets or sets options collection to perform search in a document
     */
    public options: Array<SearchOptions>;
    
    public constructor(init?: Partial<SearchSettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Base container class for signature options data
 */
export class SignOptions extends OptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appearance",
            baseName: "appearance",
            type: "SignatureAppearance",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignOptions.attributeTypeMap);
    }

    /**
     * Specifies Appearance with additional properties for this options instance
     */
    public appearance: SignatureAppearance;
    
    public constructor(init?: Partial<SignOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignOptions {
}
// tslint:enable:quotemark
/**
 * Defines sign document settings request
 */
export class SignSettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "options",
            baseName: "options",
            type: "Array<SignOptions>",
        },        
        {
            name: "saveOptions",
            baseName: "saveOptions",
            type: "SaveOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignSettings.attributeTypeMap);
    }

    /**
     * Gets or sets options to perform document signing
     */
    public options: Array<SignOptions>;
    
    /**
     * Gets or sets format specific save options for output file
     */
    public saveOptions: SaveOptions;
    
    public constructor(init?: Partial<SignSettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents solid brush. It could be used instead background color property
 */
export class SolidBrush extends Brush {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "color",
            type: "Color",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SolidBrush.attributeTypeMap);
    }

    /**
     * Gets or sets color of solid brush
     */
    public color: Color;
    
    public constructor(init?: Partial<SolidBrush>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Contains Text signature properties
 */
export class TextSignature extends Signature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "signatureImplementation",
            baseName: "signatureImplementation",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextSignature.attributeTypeMap);
    }

    /**
     * Specifies signature text
     */
    public text: string;
    
    /**
     * Text signature implementation
     */
    public signatureImplementation: string;
    
    public constructor(init?: Partial<TextSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextSignature {
}
// tslint:enable:quotemark
/**
 * Represents texture brush
 */
export class TextureBrush extends Brush {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "imageFilePath",
            baseName: "imageFilePath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextureBrush.attributeTypeMap);
    }

    /**
     * Gets or sets the texture image file path
     */
    public imageFilePath: string;
    
    public constructor(init?: Partial<TextureBrush>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Defines update sign document settings
 */
export class UpdateSettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "options",
            baseName: "options",
            type: "Array<UpdateOptions>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateSettings.attributeTypeMap);
    }

    /**
     * Gets or sets options to perform signatures update
     */
    public options: Array<UpdateOptions>;
    
    public constructor(init?: Partial<UpdateSettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Keeps options for document verification
 */
export class VerifyOptions extends OptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerifyOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VerifyOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace VerifyOptions {
}
// tslint:enable:quotemark
/**
 * Defines verify settings request
 */
export class VerifySettings extends BaseSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "options",
            baseName: "options",
            type: "Array<VerifyOptions>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerifySettings.attributeTypeMap);
    }

    /**
     * Gets or sets options to perform document verification
     */
    public options: Array<VerifyOptions>;
    
    public constructor(init?: Partial<VerifySettings>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Contains check-box input form field signature properties
 */
export class CheckboxFormFieldSignature extends FormFieldSignature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "checked",
            baseName: "checked",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CheckboxFormFieldSignature.attributeTypeMap);
    }

    /**
     * Gets or sets checked value of form field check-box input
     */
    public checked: boolean;
    
    public constructor(init?: Partial<CheckboxFormFieldSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CheckboxFormFieldSignature {
}
// tslint:enable:quotemark
/**
 * Contains combo-box input form field signature properties
 */
export class ComboboxFormFieldSignature extends FormFieldSignature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "selected",
            baseName: "selected",
            type: "string",
        },        
        {
            name: "items",
            baseName: "items",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ComboboxFormFieldSignature.attributeTypeMap);
    }

    /**
     * Get or set selected value
     */
    public selected: string;
    
    /**
     * Get or set combo-box options list
     */
    public items: Array<string>;
    
    public constructor(init?: Partial<ComboboxFormFieldSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ComboboxFormFieldSignature {
}
// tslint:enable:quotemark
/**
 * Contains digital signature input form field properties for Pdf Documents
 */
export class DigitalFormFieldSignature extends FormFieldSignature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "signed",
            baseName: "signed",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DigitalFormFieldSignature.attributeTypeMap);
    }

    /**
     * Property that shows if Form-field Signature was signed with digital certificate
     */
    public signed: boolean;
    
    public constructor(init?: Partial<DigitalFormFieldSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DigitalFormFieldSignature {
}
// tslint:enable:quotemark
/**
 * Contains radio-button input form field signature properties
 */
export class RadioButtonFormFieldSignature extends FormFieldSignature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "selected",
            baseName: "selected",
            type: "string",
        },        
        {
            name: "items",
            baseName: "items",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RadioButtonFormFieldSignature.attributeTypeMap);
    }

    /**
     * Get or set selected value
     */
    public selected: string;
    
    /**
     * Get or set radio options list
     */
    public items: Array<string>;
    
    public constructor(init?: Partial<RadioButtonFormFieldSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RadioButtonFormFieldSignature {
}
// tslint:enable:quotemark
/**
 * Defines options to Search barcode signature within a document
 */
export class SearchBarcodeOptions extends SearchOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "barcodeType",
            baseName: "barcodeType",
            type: "string",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "matchType",
            baseName: "matchType",
            type: "SearchBarcodeOptions.MatchTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchBarcodeOptions.attributeTypeMap);
    }

    /**
     * Specifies encode type property to search barcodes. If this value is not set, search is processed for all supported barcode Types
     */
    public barcodeType: string;
    
    /**
     * Specifies text for searching and matching in barcode signature
     */
    public text: string;
    
    /**
     * Get or set barcode text match type search. It is used only when Text property is set
     */
    public matchType: SearchBarcodeOptions.MatchTypeEnum;
    
    public constructor(init?: Partial<SearchBarcodeOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SearchBarcodeOptions {
    export enum MatchTypeEnum {
        Exact = 'Exact' as any,
        StartsWith = 'StartsWith' as any,
        EndsWith = 'EndsWith' as any,
        Contains = 'Contains' as any,
    }
}
// tslint:enable:quotemark
/**
 * Defines options to search Digital signature within a document
 */
export class SearchDigitalOptions extends SearchOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchDigitalOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<SearchDigitalOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SearchDigitalOptions {
}
// tslint:enable:quotemark
/**
 * Defines options to search QR-Code signature of document
 */
export class SearchQRCodeOptions extends SearchOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "qRCodeType",
            baseName: "qRCodeType",
            type: "string",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "matchType",
            baseName: "matchType",
            type: "SearchQRCodeOptions.MatchTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchQRCodeOptions.attributeTypeMap);
    }

    /**
     * Specifies Encode Type property to search barcodes. If this value is not set, search is processed for all supported barcode types
     */
    public qRCodeType: string;
    
    /**
     * Specifies text for searching and matching in barcode signature
     */
    public text: string;
    
    /**
     * Get or set barcode text Match Type search. It is used only when Text property is set
     */
    public matchType: SearchQRCodeOptions.MatchTypeEnum;
    
    public constructor(init?: Partial<SearchQRCodeOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SearchQRCodeOptions {
    export enum MatchTypeEnum {
        Exact = 'Exact' as any,
        StartsWith = 'StartsWith' as any,
        EndsWith = 'EndsWith' as any,
        Contains = 'Contains' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents the Image sign options
 */
export class SignImageOptions extends SignOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "imageFilePath",
            baseName: "imageFilePath",
            type: "string",
        },        
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "locationMeasureType",
            baseName: "locationMeasureType",
            type: "SignImageOptions.LocationMeasureTypeEnum",
        },        
        {
            name: "sizeMeasureType",
            baseName: "sizeMeasureType",
            type: "SignImageOptions.SizeMeasureTypeEnum",
        },        
        {
            name: "rotationAngle",
            baseName: "rotationAngle",
            type: "number",
        },        
        {
            name: "horizontalAlignment",
            baseName: "horizontalAlignment",
            type: "SignImageOptions.HorizontalAlignmentEnum",
        },        
        {
            name: "verticalAlignment",
            baseName: "verticalAlignment",
            type: "SignImageOptions.VerticalAlignmentEnum",
        },        
        {
            name: "margin",
            baseName: "margin",
            type: "Padding",
        },        
        {
            name: "marginMeasureType",
            baseName: "marginMeasureType",
            type: "SignImageOptions.MarginMeasureTypeEnum",
        },        
        {
            name: "transparency",
            baseName: "transparency",
            type: "number",
        },        
        {
            name: "border",
            baseName: "border",
            type: "BorderLine",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignImageOptions.attributeTypeMap);
    }

    /**
     * Gets or sets the signature image file name. This property is used only if ImageStream is not specified
     */
    public imageFilePath: string;
    
    /**
     * Left X position of Signature on Document Page in Measure values (pixels or percent see MeasureType LocationMeasureType). (works if horizontal alignment is not specified). For Spreadsheet documents this property is mutually exclusive with Column property. If Left property is set ColumnNumber will be reset to 0
     */
    public left: number;
    
    /**
     * Top Y Position of Signature on Document Page in Measure values (pixels or percent see MeasureType LocationMeasureType). (works if vertical alignment is not specified). For Spreadsheet documents this property is mutually exclusive with Row property. If Top property is set RowNumber will be reset to 0
     */
    public top: number;
    
    /**
     * Width of Signature on Document Page in Measure values (pixels or percent see MeasureType SizeMeasureType)
     */
    public width: number;
    
    /**
     * Height of Signature on Document Page in Measure values (pixels or percent see MeasureType SizeMeasureType)
     */
    public height: number;
    
    /**
     * Measure type (pixels or percent) for Left and Top properties
     */
    public locationMeasureType: SignImageOptions.LocationMeasureTypeEnum;
    
    /**
     * Measure type (pixels or percent) for Width and Height properties
     */
    public sizeMeasureType: SignImageOptions.SizeMeasureTypeEnum;
    
    /**
     * Rotation angle of signature on document page (clockwise)
     */
    public rotationAngle: number;
    
    /**
     * Horizontal alignment of signature on document page
     */
    public horizontalAlignment: SignImageOptions.HorizontalAlignmentEnum;
    
    /**
     * Vertical alignment of signature on document page
     */
    public verticalAlignment: SignImageOptions.VerticalAlignmentEnum;
    
    /**
     * Gets or sets the space between Sign and Document edges (works ONLY if horizontal or vertical alignment are specified)
     */
    public margin: Padding;
    
    /**
     * Gets or sets the measure type (pixels or percent) for Margin
     */
    public marginMeasureType: SignImageOptions.MarginMeasureTypeEnum;
    
    /**
     * Gets or sets the signature transparency(value from 0.0 (opaque) through 1.0 (clear)). Default value is 0 (opaque).
     */
    public transparency: number;
    
    /**
     * Gets or sets the signature border properties
     */
    public border: BorderLine;
    
    public constructor(init?: Partial<SignImageOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignImageOptions {
    export enum LocationMeasureTypeEnum {
        Pixels = 'Pixels' as any,
        Percents = 'Percents' as any,
        Millimeters = 'Millimeters' as any,
    }
    export enum SizeMeasureTypeEnum {
        Pixels = 'Pixels' as any,
        Percents = 'Percents' as any,
        Millimeters = 'Millimeters' as any,
    }
    export enum HorizontalAlignmentEnum {
        None = 'None' as any,
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
    }
    export enum VerticalAlignmentEnum {
        None = 'None' as any,
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any,
    }
    export enum MarginMeasureTypeEnum {
        Pixels = 'Pixels' as any,
        Percents = 'Percents' as any,
        Millimeters = 'Millimeters' as any,
    }
}
// tslint:enable:quotemark
/**
 * Base container class for signature options data
 */
export class SignTextOptions extends SignOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "locationMeasureType",
            baseName: "locationMeasureType",
            type: "SignTextOptions.LocationMeasureTypeEnum",
        },        
        {
            name: "sizeMeasureType",
            baseName: "sizeMeasureType",
            type: "SignTextOptions.SizeMeasureTypeEnum",
        },        
        {
            name: "stretch",
            baseName: "stretch",
            type: "SignTextOptions.StretchEnum",
        },        
        {
            name: "rotationAngle",
            baseName: "rotationAngle",
            type: "number",
        },        
        {
            name: "horizontalAlignment",
            baseName: "horizontalAlignment",
            type: "SignTextOptions.HorizontalAlignmentEnum",
        },        
        {
            name: "verticalAlignment",
            baseName: "verticalAlignment",
            type: "SignTextOptions.VerticalAlignmentEnum",
        },        
        {
            name: "margin",
            baseName: "margin",
            type: "Padding",
        },        
        {
            name: "marginMeasureType",
            baseName: "marginMeasureType",
            type: "SignTextOptions.MarginMeasureTypeEnum",
        },        
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "font",
            baseName: "font",
            type: "SignatureFont",
        },        
        {
            name: "foreColor",
            baseName: "foreColor",
            type: "Color",
        },        
        {
            name: "backgroundColor",
            baseName: "backgroundColor",
            type: "Color",
        },        
        {
            name: "backgroundBrush",
            baseName: "backgroundBrush",
            type: "Brush",
        },        
        {
            name: "border",
            baseName: "border",
            type: "BorderLine",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "textHorizontalAlignment",
            type: "SignTextOptions.TextHorizontalAlignmentEnum",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "textVerticalAlignment",
            type: "SignTextOptions.TextVerticalAlignmentEnum",
        },        
        {
            name: "zOrder",
            baseName: "zOrder",
            type: "number",
        },        
        {
            name: "native",
            baseName: "native",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignTextOptions.attributeTypeMap);
    }

    /**
     * Left X position of Signature on Document Page in Measure values (pixels or percent see MeasureType LocationMeasureType property)
     */
    public left: number;
    
    /**
     * Top Y Position of Signature on Document Page in Measure values (pixels or percent see MeasureType LocationMeasureType property)
     */
    public top: number;
    
    /**
     * Width of Signature area on Document Page in Measure values (pixels or percent see MeasureType SizeMeasureType property)
     */
    public width: number;
    
    /**
     * Height of Signature are on Document Page in Measure values (pixels or percent see MeasureType SizeMeasureType property)
     */
    public height: number;
    
    /**
     * Measure type (pixels or percent) for Left and Top properties
     */
    public locationMeasureType: SignTextOptions.LocationMeasureTypeEnum;
    
    /**
     * Measure type (pixels or percent) for Width and Height properties
     */
    public sizeMeasureType: SignTextOptions.SizeMeasureTypeEnum;
    
    /**
     * Stretch mode on document page
     */
    public stretch: SignTextOptions.StretchEnum;
    
    /**
     * Rotation angle of signature on document page (clockwise)
     */
    public rotationAngle: number;
    
    /**
     * Horizontal alignment of signature on document page
     */
    public horizontalAlignment: SignTextOptions.HorizontalAlignmentEnum;
    
    /**
     * Vertical alignment of signature on document page
     */
    public verticalAlignment: SignTextOptions.VerticalAlignmentEnum;
    
    /**
     * Gets or sets the space between Sign and Document edges (works ONLY if horizontal or vertical alignment are specified)
     */
    public margin: Padding;
    
    /**
     * Gets or sets the measure type (pixels or percent) for Margin
     */
    public marginMeasureType: SignTextOptions.MarginMeasureTypeEnum;
    
    /**
     * Text of signature
     */
    public text: string;
    
    /**
     * Gets or sets the font of signature
     */
    public font: SignatureFont;
    
    /**
     * Gets or sets the fore color of signature
     */
    public foreColor: Color;
    
    /**
     * Gets or sets the background color of signature
     */
    public backgroundColor: Color;
    
    /**
     * Gets or sets the signature background brush. Value by default is null.  If this property has a value it will be used instead BackgroundBrush property. For Spreadsheet documents TextStamp implementation RadialGradientBrush is not applicable, it is replaced by LinearGradientBrush. Spreadsheets, Images, Presentations It is not used for Watermark implementation. PDF For Stamp implementation LinearGradientBrush (ColorStart) and RadialGradientBrush (ColorInner) are used as SolidBrush. PDF It is not used for Annotation, Sticker, TextToFormField and Watermark implementations. Presentations For TextStamp implementation RadialGradientBrush is not applicable, it is replaced by LinearGradientBrush. Word Processing For TextStamp implementation LinearGradientBrush (ColorStart) and RadialGradientBrush (ColorInner) are used as SolidBrush. Word Processing It is not used for TextToFormField and Watermark implementations
     */
    public backgroundBrush: Brush;
    
    /**
     * Gets or sets the signature border properties
     */
    public border: BorderLine;
    
    /**
     * Horizontal alignment of text inside a signature
     */
    public textHorizontalAlignment: SignTextOptions.TextHorizontalAlignmentEnum;
    
    /**
     * Vertical alignment of text inside a signature
     */
    public textVerticalAlignment: SignTextOptions.TextVerticalAlignmentEnum;
    
    /**
     * Gets or sets the Z-order position of text signature. Determines the display order of overlapping signatures.             
     */
    public zOrder: number;
    
    /**
     * Gets or sets the native attribute. If it is set document specific signatures could be used. Native text watermark for WordProcessing documents is different than regular, for example.             
     */
    public native: boolean;
    
    public constructor(init?: Partial<SignTextOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignTextOptions {
    export enum LocationMeasureTypeEnum {
        Pixels = 'Pixels' as any,
        Percents = 'Percents' as any,
        Millimeters = 'Millimeters' as any,
    }
    export enum SizeMeasureTypeEnum {
        Pixels = 'Pixels' as any,
        Percents = 'Percents' as any,
        Millimeters = 'Millimeters' as any,
    }
    export enum StretchEnum {
        None = 'None' as any,
        PageWidth = 'PageWidth' as any,
        PageHeight = 'PageHeight' as any,
        PageArea = 'PageArea' as any,
    }
    export enum HorizontalAlignmentEnum {
        None = 'None' as any,
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
    }
    export enum VerticalAlignmentEnum {
        None = 'None' as any,
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any,
    }
    export enum MarginMeasureTypeEnum {
        Pixels = 'Pixels' as any,
        Percents = 'Percents' as any,
        Millimeters = 'Millimeters' as any,
    }
    export enum TextHorizontalAlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
    }
    export enum TextVerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any,
    }
}
// tslint:enable:quotemark
/**
 * Contains text input form field signature properties for Pdf Document
 */
export class TextFormFieldSignature extends FormFieldSignature {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextFormFieldSignature.attributeTypeMap);
    }

    /**
     * Gets or sets text of form field text input
     */
    public text: string;
    
    public constructor(init?: Partial<TextFormFieldSignature>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextFormFieldSignature {
}
// tslint:enable:quotemark
/**
 * Defines options to verify Digital signature within a document
 */
export class VerifyDigitalOptions extends VerifyOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "certificateFilePath",
            baseName: "certificateFilePath",
            type: "string",
        },        
        {
            name: "comments",
            baseName: "comments",
            type: "string",
        },        
        {
            name: "signDateTimeFrom",
            baseName: "signDateTimeFrom",
            type: "Date",
        },        
        {
            name: "signDateTimeTo",
            baseName: "signDateTimeTo",
            type: "Date",
        },        
        {
            name: "reason",
            baseName: "reason",
            type: "string",
        },        
        {
            name: "contact",
            baseName: "contact",
            type: "string",
        },        
        {
            name: "location",
            baseName: "location",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerifyDigitalOptions.attributeTypeMap);
    }

    /**
     * Password of Digital Certificate if required
     */
    public password: string;
    
    /**
     * File Guid of Digital Certificate
     */
    public certificateFilePath: string;
    
    /**
     * Comments of Digital Signature to validate Suitable for Spreadsheet and Words Processing document types
     */
    public comments: string;
    
    /**
     * Date and time range of Digital Signature to validate. Null value will be ignored. Suitable for Spreadsheet and Words Processing document types
     */
    public signDateTimeFrom: Date;
    
    /**
     * Date and time range of Digital Signature to validate. Null value will be ignored Suitable for Spreadsheet and Words Processing document types
     */
    public signDateTimeTo: Date;
    
    /**
     * Reason of Digital Signature to validate Suitable for Pdf document type
     */
    public reason: string;
    
    /**
     * Signature Contact to validate Suitable for Pdf document type
     */
    public contact: string;
    
    /**
     * Signature Location to validate Suitable for Pdf document type
     */
    public location: string;
    
    public constructor(init?: Partial<VerifyDigitalOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace VerifyDigitalOptions {
}
// tslint:enable:quotemark
/**
 * Keeps options to verify Text signature of document
 */
export class VerifyTextOptions extends VerifyOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "matchType",
            baseName: "matchType",
            type: "VerifyTextOptions.MatchTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerifyTextOptions.attributeTypeMap);
    }

    /**
     * Specify text of signature if it should be verified
     */
    public text: string;
    
    /**
     * Get or set text match type verification. It is used only when Text property is set
     */
    public matchType: VerifyTextOptions.MatchTypeEnum;
    
    public constructor(init?: Partial<VerifyTextOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace VerifyTextOptions {
    export enum MatchTypeEnum {
        Exact = 'Exact' as any,
        StartsWith = 'StartsWith' as any,
        EndsWith = 'EndsWith' as any,
        Contains = 'Contains' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents the Barcode signature options
 */
export class SignBarcodeOptions extends SignTextOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "barcodeType",
            baseName: "barcodeType",
            type: "string",
        },        
        {
            name: "transparency",
            baseName: "transparency",
            type: "number",
        },        
        {
            name: "codeTextAlignment",
            baseName: "codeTextAlignment",
            type: "SignBarcodeOptions.CodeTextAlignmentEnum",
        },        
        {
            name: "innerMargins",
            baseName: "innerMargins",
            type: "Padding",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignBarcodeOptions.attributeTypeMap);
    }

    /**
     * Get or set Barcode type. Pick one from supported barcode types list
     */
    public barcodeType: string;
    
    /**
     * Gets or sets the signature transparency (value from 0.0 (opaque) through 1.0 (clear)). Default value is 0 (opaque).
     */
    public transparency: number;
    
    /**
     * Gets or sets the alignment of text in the result Barcode Default value is None
     */
    public codeTextAlignment: SignBarcodeOptions.CodeTextAlignmentEnum;
    
    /**
     * Gets or sets the space between Barcode elements and result image borders
     */
    public innerMargins: Padding;
    
    public constructor(init?: Partial<SignBarcodeOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignBarcodeOptions {
    export enum CodeTextAlignmentEnum {
        None = 'None' as any,
        Above = 'Above' as any,
        Below = 'Below' as any,
        Right = 'Right' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents the Digital sign options
 */
export class SignDigitalOptions extends SignImageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "reason",
            baseName: "reason",
            type: "string",
        },        
        {
            name: "contact",
            baseName: "contact",
            type: "string",
        },        
        {
            name: "location",
            baseName: "location",
            type: "string",
        },        
        {
            name: "visible",
            baseName: "visible",
            type: "boolean",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "certificateFilePath",
            baseName: "certificateFilePath",
            type: "string",
        },        
        {
            name: "xAdESType",
            baseName: "xAdESType",
            type: "SignDigitalOptions.XAdESTypeEnum",
        },        
        {
            name: "digitalVBA",
            baseName: "digitalVBA",
            type: "DigitalVBA",
        },        
        {
            name: "signTime",
            baseName: "signTime",
            type: "Date",
        },        
        {
            name: "comments",
            baseName: "comments",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignDigitalOptions.attributeTypeMap);
    }

    /**
     * Gets or sets the reason of signature.
     */
    public reason: string;
    
    /**
     * Gets or sets the signature contact.
     */
    public contact: string;
    
    /**
     * Gets or sets the signature location.
     */
    public location: string;
    
    /**
     * Gets or sets the visibility of signature.
     */
    public visible: boolean;
    
    /**
     * Gets or sets the password of digital certificate
     */
    public password: string;
    
    /**
     * Gets or sets the digital certificate file GUID
     */
    public certificateFilePath: string;
    
    /**
     * XAdES type GroupDocs.Signature.Options.DigitalSignOptions.XAdESType. Default value is None (XAdES is off). At this moment XAdES signature type is supported only for Spreadsheet documents.             
     */
    public xAdESType: SignDigitalOptions.XAdESTypeEnum;
    
    /**
     * Options for signing VBA project
     */
    public digitalVBA: DigitalVBA;
    
    /**
     * The time the document was signed.
     */
    public signTime: Date;
    
    /**
     * The signing purpose comment.
     */
    public comments: string;
    
    public constructor(init?: Partial<SignDigitalOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignDigitalOptions {
    export enum XAdESTypeEnum {
        None = 'None' as any,
        XAdES = 'XAdES' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents the QR-code signature options
 */
export class SignQRCodeOptions extends SignTextOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "qRCodeType",
            baseName: "qRCodeType",
            type: "string",
        },        
        {
            name: "transparency",
            baseName: "transparency",
            type: "number",
        },        
        {
            name: "codeTextAlignment",
            baseName: "codeTextAlignment",
            type: "SignQRCodeOptions.CodeTextAlignmentEnum",
        },        
        {
            name: "innerMargins",
            baseName: "innerMargins",
            type: "Padding",
        },        
        {
            name: "logoFilePath",
            baseName: "logoFilePath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignQRCodeOptions.attributeTypeMap);
    }

    /**
     * Get or set QRCode type. Value should be one from supported QRCode types list
     */
    public qRCodeType: string;
    
    /**
     * Gets or sets the signature transparency (value from 0.0 (opaque) through 1.0 (clear)). Default value is 0 (opaque).             
     */
    public transparency: number;
    
    /**
     * Gets or sets the alignment of text in the result QR-code Default value is None
     */
    public codeTextAlignment: SignQRCodeOptions.CodeTextAlignmentEnum;
    
    /**
     * Gets or sets the space between QRCode elements and result image borders
     */
    public innerMargins: Padding;
    
    /**
     * Gets or sets the QR-code logo image file name. This property in use only if LogoStream is not specified. Using of this property could cause problems with verification. Use it carefully
     */
    public logoFilePath: string;
    
    public constructor(init?: Partial<SignQRCodeOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignQRCodeOptions {
    export enum CodeTextAlignmentEnum {
        None = 'None' as any,
        Above = 'Above' as any,
        Below = 'Below' as any,
        Right = 'Right' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents the Stamp signature options
 */
export class SignStampOptions extends SignImageOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outerLines",
            baseName: "outerLines",
            type: "Array<StampLine>",
        },        
        {
            name: "innerLines",
            baseName: "innerLines",
            type: "Array<StampLine>",
        },        
        {
            name: "backgroundColor",
            baseName: "backgroundColor",
            type: "Color",
        },        
        {
            name: "backgroundBrush",
            baseName: "backgroundBrush",
            type: "Brush",
        },        
        {
            name: "backgroundColorCropType",
            baseName: "backgroundColorCropType",
            type: "SignStampOptions.BackgroundColorCropTypeEnum",
        },        
        {
            name: "backgroundImageCropType",
            baseName: "backgroundImageCropType",
            type: "SignStampOptions.BackgroundImageCropTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignStampOptions.attributeTypeMap);
    }

    /**
     * List of Outer Lines rendered as concentric circles
     */
    public outerLines: Array<StampLine>;
    
    /**
     * List of Inner Lines rendered as set of rectangles
     */
    public innerLines: Array<StampLine>;
    
    /**
     * Gets or sets the background color of signature
     */
    public backgroundColor: Color;
    
    /**
     * Gets or sets the signature background brush. Value by default is null.  When property has a value it is used instead BackgroundBrush property
     */
    public backgroundBrush: Brush;
    
    /**
     * Gets or sets the background color crop type of signature
     */
    public backgroundColorCropType: SignStampOptions.BackgroundColorCropTypeEnum;
    
    /**
     * Gets or sets the background image crop type of signature
     */
    public backgroundImageCropType: SignStampOptions.BackgroundImageCropTypeEnum;
    
    public constructor(init?: Partial<SignStampOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SignStampOptions {
    export enum BackgroundColorCropTypeEnum {
        None = 'None' as any,
        OuterArea = 'OuterArea' as any,
        MiddleArea = 'MiddleArea' as any,
        InnerArea = 'InnerArea' as any,
    }
    export enum BackgroundImageCropTypeEnum {
        None = 'None' as any,
        OuterArea = 'OuterArea' as any,
        MiddleArea = 'MiddleArea' as any,
        InnerArea = 'InnerArea' as any,
    }
}
// tslint:enable:quotemark
/**
 * Defines options to verify Barcode signature within a document
 */
export class VerifyBarcodeOptions extends VerifyTextOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "barcodeType",
            baseName: "barcodeType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerifyBarcodeOptions.attributeTypeMap);
    }

    /**
     * Get or set Barcode type name verification
     */
    public barcodeType: string;
    
    public constructor(init?: Partial<VerifyBarcodeOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace VerifyBarcodeOptions {
}
// tslint:enable:quotemark
/**
 * Option keeps settings to verify QR-code signature of document
 */
export class VerifyQRCodeOptions extends VerifyTextOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "qRCodeType",
            baseName: "qRCodeType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerifyQRCodeOptions.attributeTypeMap);
    }

    /**
     * Get or set QR-code type verification
     */
    public qRCodeType: string;
    
    public constructor(init?: Partial<VerifyQRCodeOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace VerifyQRCodeOptions {
}
// tslint:enable:quotemark
const enumsMap = {
    "BorderLine.StyleEnum": BorderLine.StyleEnum,
    "DeleteOptions.SignatureTypeEnum": DeleteOptions.SignatureTypeEnum,
    "OptionsBase.SignatureTypeEnum": OptionsBase.SignatureTypeEnum,
    "PdfDigitalSignature.TypeEnum": PdfDigitalSignature.TypeEnum,
    "Signature.SignatureTypeEnum": Signature.SignatureTypeEnum,
    "SignatureAppearance.AppearanceTypeEnum": SignatureAppearance.AppearanceTypeEnum,
    "StampLine.TextRepeatTypeEnum": StampLine.TextRepeatTypeEnum,
    "UpdateOptions.SignatureTypeEnum": UpdateOptions.SignatureTypeEnum,
    "FormFieldSignature.TypeEnum": FormFieldSignature.TypeEnum,
    "MetadataSignature.TypeEnum": MetadataSignature.TypeEnum,
    "MetadataSignature.DataTypeEnum": MetadataSignature.DataTypeEnum,
    "PdfTextAnnotationAppearance.BorderEffectEnum": PdfTextAnnotationAppearance.BorderEffectEnum,
    "PdfTextStickerAppearance.IconEnum": PdfTextStickerAppearance.IconEnum,
    "PreviewSettings.PreviewFormatEnum": PreviewSettings.PreviewFormatEnum,
    "SearchBarcodeOptions.MatchTypeEnum": SearchBarcodeOptions.MatchTypeEnum,
    "SearchQRCodeOptions.MatchTypeEnum": SearchQRCodeOptions.MatchTypeEnum,
    "SignImageOptions.LocationMeasureTypeEnum": SignImageOptions.LocationMeasureTypeEnum,
    "SignImageOptions.SizeMeasureTypeEnum": SignImageOptions.SizeMeasureTypeEnum,
    "SignImageOptions.HorizontalAlignmentEnum": SignImageOptions.HorizontalAlignmentEnum,
    "SignImageOptions.VerticalAlignmentEnum": SignImageOptions.VerticalAlignmentEnum,
    "SignImageOptions.MarginMeasureTypeEnum": SignImageOptions.MarginMeasureTypeEnum,
    "SignTextOptions.LocationMeasureTypeEnum": SignTextOptions.LocationMeasureTypeEnum,
    "SignTextOptions.SizeMeasureTypeEnum": SignTextOptions.SizeMeasureTypeEnum,
    "SignTextOptions.StretchEnum": SignTextOptions.StretchEnum,
    "SignTextOptions.HorizontalAlignmentEnum": SignTextOptions.HorizontalAlignmentEnum,
    "SignTextOptions.VerticalAlignmentEnum": SignTextOptions.VerticalAlignmentEnum,
    "SignTextOptions.MarginMeasureTypeEnum": SignTextOptions.MarginMeasureTypeEnum,
    "SignTextOptions.TextHorizontalAlignmentEnum": SignTextOptions.TextHorizontalAlignmentEnum,
    "SignTextOptions.TextVerticalAlignmentEnum": SignTextOptions.TextVerticalAlignmentEnum,
    "VerifyTextOptions.MatchTypeEnum": VerifyTextOptions.MatchTypeEnum,
    "SignBarcodeOptions.CodeTextAlignmentEnum": SignBarcodeOptions.CodeTextAlignmentEnum,
    "SignDigitalOptions.XAdESTypeEnum": SignDigitalOptions.XAdESTypeEnum,
    "SignQRCodeOptions.CodeTextAlignmentEnum": SignQRCodeOptions.CodeTextAlignmentEnum,
    "SignStampOptions.BackgroundColorCropTypeEnum": SignStampOptions.BackgroundColorCropTypeEnum,
    "SignStampOptions.BackgroundImageCropTypeEnum": SignStampOptions.BackgroundImageCropTypeEnum,
};

const typeMap = {
            BarcodeType,
            BarcodesResult,
            BaseSettings,
            BorderLine,
            Brush,
            Color,
            ConsumptionResult,
            DeleteOptions,
            DeleteResult,
            DigitalVBA,
            DiscUsage,
            ErrorDetails,
            FileInfo,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            InfoResult,
            ModelError,
            ObjectExist,
            OptionsBase,
            Padding,
            PageInfo,
            PagesSetup,
            PdfDigitalSignature,
            PreviewPage,
            PreviewResult,
            QRCodeType,
            QRCodesResult,
            SaveOptions,
            SearchResult,
            SignResult,
            Signature,
            SignatureAppearance,
            SignatureFont,
            StampLine,
            StorageExist,
            StorageFile,
            TimeStamp,
            UpdateOptions,
            UpdateResult,
            VerifyResult,
            BarcodeSignature,
            DeleteSettings,
            DigitalSignature,
            DigitalSignatureAppearance,
            FileVersion,
            FormFieldSignature,
            ImageAppearance,
            ImageSignature,
            InfoSettings,
            LinearGradientBrush,
            MetadataSignature,
            PdfDigitalSignatureAppearance,
            PdfTextAnnotationAppearance,
            PdfTextStickerAppearance,
            PreviewSettings,
            QRCodeSignature,
            RadialGradientBrush,
            SearchOptions,
            SearchSettings,
            SignOptions,
            SignSettings,
            SolidBrush,
            TextSignature,
            TextureBrush,
            UpdateSettings,
            VerifyOptions,
            VerifySettings,
            CheckboxFormFieldSignature,
            ComboboxFormFieldSignature,
            DigitalFormFieldSignature,
            RadioButtonFormFieldSignature,
            SearchBarcodeOptions,
            SearchDigitalOptions,
            SearchQRCodeOptions,
            SignImageOptions,
            SignTextOptions,
            TextFormFieldSignature,
            VerifyDigitalOptions,
            VerifyTextOptions,
            SignBarcodeOptions,
            SignDigitalOptions,
            SignQRCodeOptions,
            SignStampOptions,
            VerifyBarcodeOptions,
            VerifyQRCodeOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetInfo operation.
 */
export class GetInfoRequest {
    /**
     * Settings required for obtaining document info
     */
    public infoSettings: InfoSettings;
    
    public constructor(infoSettings: InfoSettings) {        
        this.infoSettings = infoSettings;
    }
}

/**
 * Request model for PreviewDocument operation.
 */
export class PreviewDocumentRequest {
    /**
     * Document preview settings
     */
    public previewSettings: PreviewSettings;
    
    public constructor(previewSettings: PreviewSettings) {        
        this.previewSettings = previewSettings;
    }
}

/**
 * Request model for CreateSignatures operation.
 */
export class CreateSignaturesRequest {
    /**
     * Document sign settings
     */
    public signSettings: SignSettings;
    
    public constructor(signSettings: SignSettings) {        
        this.signSettings = signSettings;
    }
}

/**
 * Request model for DeleteSignatures operation.
 */
export class DeleteSignaturesRequest {
    /**
     * Delete signatures settings
     */
    public deleteSettings: DeleteSettings;
    
    public constructor(deleteSettings: DeleteSettings) {        
        this.deleteSettings = deleteSettings;
    }
}

/**
 * Request model for SearchSignatures operation.
 */
export class SearchSignaturesRequest {
    /**
     * Signatures search settings
     */
    public searchSettings: SearchSettings;
    
    public constructor(searchSettings: SearchSettings) {        
        this.searchSettings = searchSettings;
    }
}

/**
 * Request model for UpdateSignatures operation.
 */
export class UpdateSignaturesRequest {
    /**
     * Update signatures settings
     */
    public updateSettings: UpdateSettings;
    
    public constructor(updateSettings: UpdateSettings) {        
        this.updateSettings = updateSettings;
    }
}

/**
 * Request model for VerifySignatures operation.
 */
export class VerifySignaturesRequest {
    /**
     * Settings that includes different criteria to verify document signatures
     */
    public verifySettings: VerifySettings;
    
    public constructor(verifySettings: VerifySettings) {        
        this.verifySettings = verifySettings;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}

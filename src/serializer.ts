/*
* The MIT License (MIT)
*
* Copyright (c) Aspose Pty Ltd
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

import { enumsMap, typeMap, FormFieldSignature } from "./model";

const primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any",
];

/**
 * Serializer
 */
export class Serializer {

    /**
     * Serialize object to json string.
     */
    public static serialize(data: any, type: string) {
        if (data === undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData = [];
            for (const index in data) {
                if (data.hasOwnProperty(index)) {
                    const date = data[index];
                    transformedData.push(Serializer.serialize(date, subType));
                }
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // get the map for the correct type.
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance = {};
            for (const index in attributeTypes) {
                if (attributeTypes.hasOwnProperty(index)) {
                    const attributeType = attributeTypes[index];
                    if (data[attributeType.name] instanceof Object) {
                        instance[attributeType.baseName] = Serializer.serialize(data[attributeType.name], data[attributeType.name].constructor.name);
                    } else {
                        instance[attributeType.baseName] = Serializer.serialize(data[attributeType.name], attributeType.type);
                    }
                }
            }
            return instance;
        }
    }

    /**
     * Construct object from json string
     */
    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = Serializer.findCorrectType(data, type);
        if (data === undefined || data === null) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData = [];
            for (const index in data) {
                if (data.hasOwnProperty(index)) {
                    const date = data[index];
                    transformedData.push(Serializer.deserialize(date, subType));
                }
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(Date.parse(data));
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            const instance = new typeMap[type]();
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            for (const index in attributeTypes) {
                if (attributeTypes.hasOwnProperty(index)) {
                    const attributeType = attributeTypes[index];
                    if (data.hasOwnProperty(attributeType.baseName)) {
                        instance[attributeType.name] = Serializer.deserialize(data[attributeType.baseName], attributeType.type);
                    }
                }
            }
            return instance;
        }
    }

    private static findCorrectType(data: any, expectedType: string) {
        if (data === undefined || data === null) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Signature type fix
            const signatureTypeProperty = "signatureType";
            if (data[signatureTypeProperty] !== undefined) {
                if(data[signatureTypeProperty] == "FormField") {
                    let type = data["type"];
                    if(type == FormFieldSignature.TypeEnum.Text) return "TextFormFieldSignature";
                    if(type == FormFieldSignature.TypeEnum.Checkbox) return "CheckboxFormFieldSignature";
                    if(type == FormFieldSignature.TypeEnum.Combobox) return "ComboboxFormFieldSignature";
                    if(type == FormFieldSignature.TypeEnum.DigitalSignature) return "DigitalFormFieldSignature";
                    if(type == FormFieldSignature.TypeEnum.Radio) return "RadioButtonFormFieldSignature";
                    return "FormFieldSignature";
                }
                return data[signatureTypeProperty] + "Signature";
            }

            // Check the discriminator
            const discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty]; // use the type given in the discriminator
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
}

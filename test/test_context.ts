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

import * as fs from "fs";

import { Configuration } from "../src/configuration";
import { Serializer } from "../src/serializer";
import { InfoApi, SignApi, ObjectExistsRequest, UploadFileRequest } from "../src/signature_api";
import { StorageApi } from "../src/signature_api";
import { FileApi } from "../src/signature_api";
import { FolderApi, DeleteFolderRequest } from "../src/signature_api";
import { TestFile } from "./test_file";

let infoApi: InfoApi;
let signApi: SignApi;
let storageApi: StorageApi;
let fileApi: FileApi;
let folderApi: FolderApi;
var uploaded: boolean = false;


/**
 * Initializes ViewerApi
 */
export function getSignApi() {
    if (!signApi) {
        const settings = require("./test_settings.json");

        const config = new Configuration(settings.AppSid, settings.AppKey);
        config.apiBaseUrl = settings.ApiBaseUrl;
        //config.debugging = true;
        infoApi = InfoApi.fromConfig(config);
        signApi = SignApi.fromConfig(config);
        storageApi = StorageApi.fromConfig(config);
        fileApi = FileApi.fromConfig(config);
        folderApi = FolderApi.fromConfig(config);
    }

    return signApi;
}


export function getInfoApi() {
    if (!signApi) getSignApi();
    return infoApi;
}

export function getStorageApi() {
    if (!signApi) getSignApi();
    return storageApi;
}

export function getFileApi() {
    if (!signApi) getSignApi();
    return fileApi;
}

export function getFolderApi() {
    if (!signApi) getSignApi();
    return folderApi;
}

/**
 * Uploads test files
 */
export function uploadTestFiles() {
    if(uploaded) return;
    if (!signApi) getSignApi();    
    const testFiles = TestFile.GetTestFiles();
    testFiles.forEach(async function (file) {
        const response = await storageApi.objectExists(new ObjectExistsRequest(file.GetPath()));
        if (!response.exists) {
            console.log("Uploading: " + file.GetPath());
            let filebuf = getTestFileBuffer(file);
            await fileApi.uploadFile(new UploadFileRequest(file.GetPath(), filebuf));
        }        
    });
    uploaded = true;
}

/**
 * Cleanups temp files
 */
export function cleanupTempFiles() {
    const api = getFolderApi();
    
    const tempDirs = ["Output"];    

    return Promise.all(tempDirs.map((dir) => {
        return deleteTempDir(api, dir);
    }));
}

/**
 * Retrieves test file 
 */
export function getTestFileBuffer(file: TestFile) {
    const testFilesDir = __dirname + "\\test_files";
    const testFilePath = testFilesDir + "\\" + file.GetPath();
    return fs.readFileSync(testFilePath);
}

/**
 * Retrieves test file 
 */
export function serializeIntoBuffer(obj) {
    const serialized = Serializer.serialize(obj, obj.constructor.name);
    const json = JSON.stringify(serialized, undefined, 2);
    return new Buffer(json, "utf-8");
}

const deleteTempDir = (api, dir) => {
    return api.deleteFolder(new DeleteFolderRequest(dir, undefined, true));
};

import { expect } from "chai";
import "mocha";
import {
    DeleteOptions,
    OptionsBase,
    PdfDigitalSignatureAppearance,
    Signature,
    SignImageDigitalOptions,
    UpdateOptions,
    VerifyImageDigitalOptions,
} from "../../src/model";

describe("image_digital_options", () => {
    it("serializes sign options", () => {
        const options = new SignImageDigitalOptions({ password: "embed-password" });
        expect(options.password).to.equal("embed-password");
    });

    it("serializes verify options", () => {
        const options = new VerifyImageDigitalOptions({
            password: "embed-password",
            detectionThresholdPercent: 75,
            useFullDataExtraction: true,
        });
        expect(options.password).to.equal("embed-password");
        expect(options.detectionThresholdPercent).to.equal(75);
        expect(options.useFullDataExtraction).to.equal(true);
    });

    it("supports ImageDigital types and foreground appearance", () => {
        expect(OptionsBase.SignatureTypeEnum.ImageDigital).to.equal("ImageDigital");
        expect(DeleteOptions.SignatureTypeEnum.ImageDigital).to.equal("ImageDigital");
        expect(UpdateOptions.SignatureTypeEnum.ImageDigital).to.equal("ImageDigital");
        expect(Signature.SignatureTypeEnum.ImageDigital).to.equal("ImageDigital");

        const appearance = new PdfDigitalSignatureAppearance({ isForegroundImage: true });
        expect(appearance.isForegroundImage).to.equal(true);
    });
});

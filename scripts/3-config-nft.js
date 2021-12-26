import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2808e9ab5A4369C7f260367C8bE299B6De5CDE4b"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Great Book",
        description: "This NFT will give you access to LearnDAO!",
        image: readFileSync("scripts/assets/book.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

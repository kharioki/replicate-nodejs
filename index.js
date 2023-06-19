import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
// const input = { prompt: "an astronaut riding a horse on mars, hd, dramatic lighting, detailed" };
// const output = await replicate.run(model, { input });

// console.log(output);
// ['https://replicate.com/api/models/stability-ai/stable-diffusion/files/50fcac81-865d-499e-81ac-49de0cb79264/out-0.png']

const model = "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608";
const input = {
  image: "https://replicate.delivery/pbxt/IJEPmgAlL2zNBNDoRRKFegTEcxnlRhoQxlNjPHSZEy0pSIKn/gg_bridge.jpeg",
  question: "what body of water does this bridge cross?"
};
const output = await replicate.run(model, { input });

console.log(output);

// Output:
// san francisco bay
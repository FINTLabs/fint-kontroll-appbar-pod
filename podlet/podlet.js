const {podlet} = require("@fintlabs/fint-podium-podlet")
const packageJson = require("./package.json");

const PODLET_NAME = process.env.PODLET_NAME || packageJson.name


podlet.runPod(PODLET_NAME)



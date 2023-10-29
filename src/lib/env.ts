import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  IPIFY_API_KEY: str(),
  IPIFY_API_URL: str(),
});

export default env;

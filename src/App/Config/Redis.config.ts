import { createClient } from "redis";

export const RedisClient = createClient({url:'redis://103.255.39.101:6379'})
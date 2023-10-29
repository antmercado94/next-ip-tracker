import { z } from "zod";

const IpAddressSchema = z.object({
  ip: z.string(),
  domains: z.string().array().optional(),
  isp: z.string(),
});

const LocationSchema = z.object({
  country: z.string(),
  region: z.string(),
  city: z.string(),
  lat: z.number(),
  lng: z.number(),
  postalCode: z.string(),
  timezone: z.string(),
  geonameId: z.number().optional(),
});

const AutonomousSystemSchema = z.object({
  asn: z.number(),
  name: z.string(),
  route: z.string(),
  domain: z.string(),
  type: z.string().optional(),
});

export const GeoLocationSchema = IpAddressSchema.extend({
  location: LocationSchema,
  as: AutonomousSystemSchema.optional(),
  dummy: z.boolean().optional(),
});

export const IpSchema = z.string().ip();

export type Location = z.infer<typeof LocationSchema>;

export type GeoLocationData = z.infer<typeof GeoLocationSchema>;

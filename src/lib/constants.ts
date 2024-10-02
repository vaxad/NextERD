import { Attribute, Relation } from "./types";

export const attributeTypes: Attribute[] = ["string", "number", "boolean", "Date"];
export const relationTypes: Relation["type"][] = ["1-?1", "1?-1", "1-m", "m-1"];
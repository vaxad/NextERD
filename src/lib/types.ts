export type Attribute = "string" | "number" | "boolean" | "Date" | 'string[]' | 'number[]' | 'boolean[]' | 'Date[]';
export type ConstraintType = "required" | "unique" | "optional" | "default";
export interface Entity {
  name: string;
  attributes: Array<{ name: string; type: Attribute, constraint?: {value?:string, type:ConstraintType }}>;
}

export interface Relation {
  type: "1-?1" | "1-m" | "m-1" | "1?-1";
}
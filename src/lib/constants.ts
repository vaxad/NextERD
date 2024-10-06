import { Attribute, Relation } from "./types";
import { GenerateFormData } from "./types";

export const placeholderData: GenerateFormData = 
{
    "name": "Project01",
    "description": "Project01 description",
    "auth": true,
    "entities": [
        {
            "name": "user",
            "attributes": [
                {
                    "name": "email",
                    "type": "string",
                    "constraint": {
                        "type": "unique"
                    }
                },
                {
                    "name": "password",
                    "type": "string"
                },
                {
                    "name": "createdAt",
                    "type": "Date"
                }
            ]
        },
        {
            "name": "task",
            "attributes": [
                {
                    "name": "description",
                    "type": "string"
                },
                {
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "sequence",
                    "type": "number"
                }
            ]
        }
    ],
    "relations": [
        {
            "from": "user",
            "to": "task",
            "type": "1-m",
        }
    ]
}
export const attributeTypes: Attribute[] = ["string", "number", "boolean", "Date"];
export const relationTypes: Relation["type"][] = ["1-?1", "1?-1", "1-m", "m-1"];
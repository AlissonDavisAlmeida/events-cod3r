import { v4, validate } from "uuid"

export class Id {

    static new(): string {
        return v4();
    }

    static validate(id: string): boolean {
        return validate(id);
    }
    
}

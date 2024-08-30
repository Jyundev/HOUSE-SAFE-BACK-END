import { Decimal } from "@prisma/client/runtime/library";

export class LandlordDTO {
    name: string;  // VARCHAR(50)
    age?: number | null;  // TINYINT UNSIGNED (Optional as it might be nullable)
    address: string;  // VARCHAR(255)
    depositObligation: number;  // DECIMAL(15,2)
    dueDate: Date;  // DATE
    delinquency: number;  // SMALLINT UNSIGNED
    fulfillmentDate: Date;  // DATE
    reimbursementDebt: number;  // DECIMAL(15,2)
    executionCount: number;  // TINYINT UNSIGNED
    referenceDate: Date;  // DATE

    constructor(landLord: {
        name: string,
        age?: number,
        address: string,
        depositObligation: number,
        dueDate: Date,
        delinquency: number,
        fulfillmentDate: Date,
        reimbursementDebt: number,
        executionCount: number,
        referenceDate: Date
    }) {
        this.name = landLord.name;
        this.age = landLord.age ?? undefined;
        this.address = landLord.address;
        this.depositObligation = landLord.depositObligation;
        this.dueDate = landLord.dueDate;
        this.delinquency = landLord.delinquency;
        this.fulfillmentDate = landLord.fulfillmentDate;
        this.reimbursementDebt = landLord.reimbursementDebt;
        this.executionCount = landLord.executionCount;
        this.referenceDate = landLord.referenceDate;
    }


    static fromEntity(landlord: {
        name: string,
        age?: number | null,
        address: string,
        depositObligation: Decimal,
        dueDate: Date,
        delinquency: number,
        fulfillmentDate: Date,
        reimbursementDebt: Decimal,
        executionCount: number,
        referenceDate: Date
    }): LandlordDTO {
        return new LandlordDTO({
            name: landlord.name,
            age: landlord.age ?? undefined,
            address: landlord.address,
            depositObligation: landlord.depositObligation.toNumber(),
            dueDate: landlord.dueDate,
            delinquency: landlord.delinquency,
            fulfillmentDate: landlord.fulfillmentDate,
            reimbursementDebt: landlord.reimbursementDebt.toNumber(),
            executionCount: landlord.executionCount,
            referenceDate: landlord.referenceDate,
        });
    }

}

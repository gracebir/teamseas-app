import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    createAt = "createAt",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    team = "team",
    message = "message"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereInput } from '../donation/donation-where.input';
import { Type } from 'class-transformer';
import { DonationOrderByWithRelationInput } from '../donation/donation-order-by-with-relation.input';
import { DonationWhereUniqueInput } from '../donation/donation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DonationScalarFieldEnum } from '../donation/donation-scalar-field.enum';

@ArgsType()
export class FindFirstDonationOrThrowArgs {

    @Field(() => DonationWhereInput, {nullable:true})
    @Type(() => DonationWhereInput)
    where?: DonationWhereInput;

    @Field(() => [DonationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DonationOrderByWithRelationInput>;

    @Field(() => DonationWhereUniqueInput, {nullable:true})
    cursor?: DonationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DonationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DonationScalarFieldEnum>;
}

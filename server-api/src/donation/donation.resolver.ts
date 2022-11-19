import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DonationService } from './donation.service';

@Resolver('Donation')
export class DonationResolver {
  constructor(private readonly donationService: DonationService) {}

  @Mutation('createDonation')
  create(@Args('createDonationInput') createDonationInput: Prisma.DonationCreateInput) {
    return this.donationService.create(createDonationInput);
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy: {
    field: string,
    direction: string
  }) {
    return this.donationService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationService.findOne({id});
  }
}

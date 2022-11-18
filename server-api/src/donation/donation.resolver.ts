import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DonationService } from './donation.service';
import { CreateDonationInput } from './dto/create-donation.input';

@Resolver('Donation')
export class DonationResolver {
  constructor(private readonly donationService: DonationService) {}

  @Mutation('createDonation')
  create(@Args('createDonationInput') createDonationInput: CreateDonationInput) {
    return this.donationService.create(createDonationInput);
  }

  @Query('donations')
  findAll() {
    return this.donationService.findAll();
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationService.findOne(id);
  }
}

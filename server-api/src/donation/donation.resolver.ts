import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { DonationCreateInput } from 'src/@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { OrderByParams } from 'src/graphql';
import { DonationService } from './donation.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Donation')
export class DonationResolver {
  constructor(private readonly donationService: DonationService) {}

  @Mutation('createDonation')
  async create(@Args('createDonationInput') createDonationInput: DonationCreateInput) {
    const created = await this.donationService.create(createDonationInput);
    const total = await this.donationService.getTotal()

    pubSub.publish('totalUpdated', {totalUpdated: { total }})
    return created;
  }

  @Subscription()
  totalUpdated(){
    return pubSub.asyncIterator('totalUpdated')
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy: OrderByParams) {
    return this.donationService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationService.findOne({id});
  }

  @Query('totalDonation')
  getTotal() {
    return this.donationService.getTotal();
  }
}

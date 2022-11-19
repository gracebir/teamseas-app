import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DonationCreateInput } from 'src/@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { OrderByParams } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationService {
  constructor(private prisma: PrismaService){}

  async create(createDonationInput: DonationCreateInput) {
    const donation = await this.prisma.donation.create({
      data: createDonationInput
    })
    return donation
  }

  async findAll(orderBy?: OrderByParams) {
    const {field = 'createAt', direction = 'desc'} = orderBy || {}
    return await this.prisma.donation.findMany({
      orderBy: { [field]: direction}
    });
  }

  async findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return await this.prisma.donation.findUnique({
      where: donationWhereUniqueInput
    });
  }

  async getTotal(){
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true
      }
    })
    return response._sum.count;
  }
}

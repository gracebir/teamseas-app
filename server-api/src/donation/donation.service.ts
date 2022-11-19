import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationService {
  constructor(private prisma: PrismaService){}

  async create(createDonationInput: Prisma.DonationCreateInput) {
    const donation = await this.prisma.donation.create({
      data: createDonationInput
    })
    return donation
  }

  async findAll(orderBy?: {field?: string; direction?: string}) {
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
}

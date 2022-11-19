import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonationInput } from './dto/create-donation.input';

@Injectable()
export class DonationService {
  constructor(private prisma: PrismaService){}

  async create(createDonationInput: CreateDonationInput) {
    const donation = await this.prisma.donation.create({
      data: {
        count: createDonationInput.count,
        displayName: createDonationInput.displayName,
        email: createDonationInput.email
      }
    })
    return donation
  }

  async findAll() {
    return await this.prisma.donation.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.donation.findUnique({
      where: { id }
    });
  }
}

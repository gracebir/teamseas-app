import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault as ApoloServerLanding } from 'apollo-server-core';
import { DonationModule } from './donation/donation.module';
import { GraphQLDateTime } from 'graphql-iso-date'
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: false,
    typePaths: ['./**/*.graphql'],
    plugins: [ApoloServerLanding],
    resolvers: {DateTime: GraphQLDateTime}
  }), DonationModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  providers: [PrismaService],
})
export class AppModule {}

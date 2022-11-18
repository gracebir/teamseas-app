import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault as ApoloServerLanding } from 'apollo-server-core';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: false,
    typePaths: ['./**/*.graphql'],
    plugins: [ApoloServerLanding]
  })],
})
export class AppModule {}

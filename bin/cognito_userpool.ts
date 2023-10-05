#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CognitoUserPoolStack } from '../lib/cognito_userpool-stack';

const app = new cdk.App();
new CognitoUserPoolStack(app, process.env.STACK_NAME!);

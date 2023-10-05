import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { UserPool } from 'aws-cdk-lib/aws-cognito';

export class CognitoUserPoolStack extends Stack {
    public readonly userPoolId: string;
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const pool = new UserPool(this, 'UserPool', {
            removalPolicy: RemovalPolicy.DESTROY,
        });
        this.userPoolId = pool.userPoolId;
    }
}

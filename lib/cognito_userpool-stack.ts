import { CfnOutput, CfnParameter, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { UserPool } from 'aws-cdk-lib/aws-cognito';


export class CognitoUserPoolStack extends Stack {
    public readonly userPoolId: string;
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const userPoolNameParam = new CfnParameter(this, 'userPoolName', {
            type: 'String',
            description: 'The name of the user pool',
            default: 'my-user-pool',
        });

        const pool = new UserPool(this, 'UserPool', {
            removalPolicy: RemovalPolicy.DESTROY,
            userPoolName: userPoolNameParam.valueAsString,
        });
        this.userPoolId = pool.userPoolId;

        new CfnOutput(this, 'userPoolId', {
            value: pool.userPoolId,
            description: 'The ID of the user pool',
        });
    }
}
